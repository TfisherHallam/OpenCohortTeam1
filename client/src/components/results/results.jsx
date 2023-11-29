import './results.css';
import {useEffect, useRef, useState} from 'react';

const PORT = process.env.PORT || 3001;

export function formatTime(timeString) {
  const options = {hour: 'numeric', minute: 'numeric', hour12: true};
  return new Date(`1970-01-01T${timeString}Z`).toLocaleTimeString([], options);
}

export function calculateCountdown(endDate, endTime) {
  try {
    const auctionDate = new Date(endDate).toISOString().split('T')[0];
    const auctionDateTimeString = `${auctionDate}T${endTime}`;
    const auctionDateTime = new Date(auctionDateTimeString).getTime();
    const now = new Date().getTime();
    const timeRemaining = auctionDateTime - now;

    if (timeRemaining <= 0) {
      return "Auction has ended";
    }
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } catch (error) {
    console.error('Error in calculateCountdown:', error);
    console.log('endDate:', endDate);
    console.log('endTime:', endTime);
    return 'Countdown calculation error';
  }
}

function SearchResults() {
  const [results, setResults] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('lowestCountdown');
  const [selectedEventType, setSelectedEventType] = useState('');
  const [bidRange, setBidRange] = useState([0, 2000]);
  const [selectedDateRange, setSelectedDateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterSectionRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const queryParams = new URLSearchParams({
          minBid: bidRange[0],
          maxBid: bidRange[1],
          startDate: selectedDateRange.startDate
              ? selectedDateRange.startDate.toISOString().split('T')[0]
              : null,
          endDate: selectedDateRange.endDate
              ? selectedDateRange.endDate.toISOString().split('T')[0]
              : null,
          eventType: selectedEventType,
        });

        const response = await fetch(
            `http://localhost:${PORT}/api/listings/?${queryParams}`
        );

        if (response.ok) {
          const data = await response.json();
          setResults(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error during data fetching:', error);
      }
    }

    fetchData();
  }, [bidRange, selectedDateRange, selectedEventType]);

  useEffect(() => {
    // Update countdown every second
    const intervalId = setInterval(() => {
      setResults((prevResults) => prevResults.map((result) => ({
        ...result,
        countdown: calculateCountdown(result.auctionEndDate,
            result.auctionEndTime),

      })));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleDateChange = (dateType, dateValue) => {
    setSelectedDateRange((prevDateRange) => ({
      ...prevDateRange,
      [dateType]: dateValue ? new Date(dateValue) : null,
    }));
  };

  const sortOptions = {
    lowestCountdown: (a, b) => {
      const endDateComparison = new Date(a.auctionEndDate) - new Date(
          b.auctionEndDate);
      if (endDateComparison === 0) {
        return new Date(a.auctionEndTime) - new Date(b.auctionEndTime);
      } else {
        return endDateComparison;
      }
    },
    longestCountdown: (a, b) => {
      const endDateComparison = new Date(b.auctionEndDate) - new Date(
          a.auctionEndDate);
      if (endDateComparison === 0) {
        return new Date(b.auctionEndTime) - new Date(a.auctionEndTime);
      } else {
        return endDateComparison;
      }
    },
    highestPrice: (a, b) => b.currentBid - a.currentBid,
    lowestPrice: (a, b) => a.currentBid - b.currentBid,

  };

  const filteredAndSortedResults = results
  ?.filter((result) => {
    const isNameDescriptionMatch =
        result.eventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.description.toLowerCase().includes(searchQuery.toLowerCase());

    const isBidInRange =
        result.currentBid >= bidRange[0] && result.currentBid <= bidRange[1];

    const isDateInRange =
        (!selectedDateRange.startDate || new Date(result.eventDate)
            >= selectedDateRange.startDate) &&
        (!selectedDateRange.endDate || new Date(result.eventDate)
            <= selectedDateRange.endDate);

    const isEventTypeMatch =
        selectedEventType === '' || result.eventType === selectedEventType;

    return isNameDescriptionMatch && isBidInRange && isDateInRange
        && isEventTypeMatch;
  })
  .sort(sortOptions[sortOption]);

  useEffect(() => {
    filterSectionRef.current?.style &&
    (filterSectionRef.current.style.maxHeight = isFilterOpen
        ? filterSectionRef.current.scrollHeight + 'px'
        : '0');
  }, [isFilterOpen]);

  return (<div className="Results">

    <div className="SearchAndSort SearchMain">
      <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
    <div className="SearchAndSort">
      <button
          className="toggleFilterButton"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
      >
        {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
      </button>
      <div className={`filterContainer ${isFilterOpen ? 'open' : 'closed'}`}>
        <div className="filterSection First" ref={filterSectionRef}>

          <label htmlFor="sortOption">Sort by:</label>
          <select
              id="sortOption"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="lowestCountdown">Shortest Countdown</option>
            <option value="longestCountdown">Longest Countdown</option>
            <option value="highestPrice">Highest Price</option>
            <option value="lowestPrice">Lowest Price</option>
          </select>
          <label htmlFor="eventType">Event Type:
            <select
                value={selectedEventType}
                onChange={(e) => setSelectedEventType(e.target.value)}
            >
              <option value="">All Event Types</option>
              <option value="Gig">Gig</option>
              <option value="Concert">Concert</option>
              <option value="Festival">Festival</option>
              <option value="Comedy Night">Comedy Night</option>
            </select></label>
          <div className="filterSection Second" ref={filterSectionRef}>
            <div className="BidFilter">
              <label>Price Range:
                <div></div>
                <label>Min:
                  <input
                      type="number"
                      min="0"
                      max="1000"
                      step="10"
                      value={bidRange[0]}
                      onChange={(e) => setBidRange(
                          [parseInt(e.target.value), bidRange[1]])}
                  />
                </label>
                <label>Max:
                  <input
                      type="number"
                      min="0"
                      max="1000"
                      step="10"
                      value={bidRange[1]}
                      onChange={(e) => setBidRange(
                          [bidRange[0], parseInt(e.target.value)])}
                  />
                </label>
              </label>
            </div>
            <p style={{
              textAlign: 'center',
              fontWeight: 'bold'
            }}>{`£${bidRange[0]} - £${bidRange[1]}`}</p>
            <div className="DateRange">

              <label> Event Date Range: {`\n`}
                <label>Start Date:
                  <input
                      type="date"
                      value={
                        selectedDateRange.startDate
                            ? selectedDateRange.startDate.toISOString().split(
                                'T')[0]
                            : ''
                      }
                      onChange={(e) => handleDateChange('startDate',
                          e.target.value)}
                  /></label>
                <label>End Date:
                  <input
                      type="date"
                      value={
                        selectedDateRange.endDate
                            ? selectedDateRange.endDate.toISOString().split(
                                'T')[0]
                            : ''
                      }
                      onChange={(e) => handleDateChange('endDate',
                          e.target.value)}
                  /></label></label></div>
          </div>
        </div>
      </div>

    </div>
    <div className="Container">
      <div className="Carousel">
        {filteredAndSortedResults && filteredAndSortedResults.length > 0
            ? (filteredAndSortedResults.map((result) => (
                <a key={result._id} href={`/itemView/${result._id}`}
                   className="AuctionItem">
                  <img src={result.image} alt={result.eventName}
                       className="AuctionImage"/>
                  <div key={result.id} className="AuctionDetails">
                    <h2 className={"eventTitle"}>{result.eventName}</h2>
                    <p style={{textAlign: 'right'}}>Date: {new Date(
                        result.eventDate).toLocaleDateString()}  </p>
                    <p style={{textAlign: 'right'}}>Time: {formatTime(
                        result.eventTime)}</p>
                    <p style={{textAlign: 'right'}}>Sold
                      By: {result.username}</p>
                    <p style={{textAlign: 'left'}}> {result.description}</p>
                    <div className="line"></div>
                    <div className="bidAndCountdown">
                      <p className="CurrentBid">Current Bid:
                        £{result.currentBid}</p>
                      <div className="Countdown">
                        <p>{calculateCountdown(result.auctionEndDate,
                            result.auctionEndTime)}</p>
                      </div>
                    </div>
                    <p className={"auctionEnd"}>Auction End: {new Date(
                        result.auctionEndDate).toLocaleDateString()} at {formatTime(
                        result.auctionEndTime)}</p>
                  </div>

                </a>

            ))) : (// Display a message when no results are available
                <p>No auction listings found. Try changing your search
                  criteria! </p>)}
      </div>
    </div>
  </div>);
}

export default SearchResults;
