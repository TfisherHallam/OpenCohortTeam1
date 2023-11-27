import './results.css';
import { useEffect, useState } from 'react';
const PORT = process.env.PORT || 3001;
export function formatTime(timeString) {
  const options = { hour: 'numeric', minute: 'numeric', hour12: true };
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
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
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

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:${PORT}/api/listings/`);
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
  }, []);
  useEffect(() => {
    // Update countdown every second
    const intervalId = setInterval(() => {
      setResults((prevResults) =>
          prevResults.map((result) => ({
            ...result,
            countdown: calculateCountdown(result.auctionEndDate, result.auctionEndTime),
          }))
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
      <div className="Results">
        <h1 className={"resultsTitle"}>Search Results:</h1>
        <div className="Container">
          <div className="Carousel">
        {results && results.length > 0 ? (
            results.map((result) => (
                <a key={result._id} href={`/itemView/${result._id}`} className="AuctionItem">
                  <img src={result.image} alt={result.eventName} className="AuctionImage" />
                  <div key={result.id} className="AuctionDetails">
                    <h2 className={"eventTitle"}>{result.eventName}</h2>
                    <p style={{ textAlign: 'right' }}>Date: {new Date(result.eventDate).toLocaleDateString()}  </p>
                    <p style={{ textAlign: 'right'}}>Time: {formatTime(result.eventTime)}</p>
                    <p style={{textAlign:'right'}}>Sold By: {result.username}</p>
                    <p style={{textAlign:'left'}}> {result.description}</p>
                    <div className="line"></div>
                    <div className="bidAndCountdown">
                    <p className="CurrentBid">Current Bid: £{result.startingBid}</p>
                    <div className="Countdown">
                      <p>{calculateCountdown(result.auctionEndDate, result.auctionEndTime)}</p>
                    </div>
                    </div>
                    <p className={"auctionEnd"}>Auction End: {new Date(result.auctionEndDate).toLocaleDateString()} at {formatTime(result.auctionEndTime)}</p>
                  </div>

                </a>

            ))
        ) : (
            // Display a message when no results are available
            <p>No auction listings found.</p>
        )}
          </div>
      </div>
      </div>
  );
}

export default SearchResults;
