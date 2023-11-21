import './results.css';
import { useEffect, useState } from 'react';

function formatTime(timeString) {
  const options = { hour: 'numeric', minute: 'numeric', hour12: true };
  return new Date(`1970-01-01T${timeString}Z`).toLocaleTimeString([], options);
}

function calculateCountdown(endDate, endTime) {
  try {
    const eventDate = new Date(endDate).toISOString().split('T')[0];
    const eventDateTimeString = `${eventDate}T${endTime}`;
    const eventDateTime = new Date(eventDateTimeString).getTime();
    const now = new Date().getTime();
    const timeRemaining = eventDateTime - now;

    if (timeRemaining <= 0) {
      return "Event has ended";
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
        const response = await fetch('http://localhost:5000/api/listings/');
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
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
      <div className="Results">
        <h1 className={"resultsTitle"}>Search Results:</h1>
        <div className="Container">
          <div className="Carousel">
        {results && results.length > 0 ? (
            results.map((result) => (
                <div key={result._id} className="AuctionItem">
                  <img src={result.image} alt={result.eventName} className="AuctionImage" />
                  <div key={result.id} className="AuctionDetails">
                    <h2>{result.eventName}</h2>
                    <p style={{ textAlign: 'right' }}>Date: {new Date(result.eventDate).toLocaleDateString()}  </p>
                    <p style={{ textAlign: 'right'}}>Time: {formatTime(result.eventTime)}</p>
                    <p style={{textAlign:'right'}}>Sold By: {result.username}</p>
                    <p style={{textAlign:'left'}}>Description: {result.description}</p>
                    <div className="bidAndCountdown">
                    <p className="CurrentBid">Current Bid: ${result.startingBid}</p>
                    <div className="Countdown">
                      <p>{calculateCountdown(result.eventDate, result.eventTime)}</p>
                    </div>
                    </div>
                    <p>Reserve: ${result.reserve}</p>
                  </div>

                </div>
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

