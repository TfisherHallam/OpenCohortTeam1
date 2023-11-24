import React from 'react';
import './adminDashboard.css';
import { useEffect, useState } from 'react';

function AdminDashboard() {


  const [results, setResults] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3001/api/usernames/');
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
      <div>
        <h1>Users:</h1>
        <div>
          <div>
        {results && results.length > 0 ? (
            results.map((result) => (
                <div key={result._id} >
                  <div key={result.id} >
                    <h2>{result.eventName}</h2>  
                    <p style={{textAlign:'right'}}>Username: {result.username}</p>
                    <p style={{textAlign:'right'}}>Email: {result.email}</p>
                    <p style={{textAlign:'right'}}>State Code: {result.userStateCode}</p>
                  </div>
                </div>
            ))
        ) : (
            // Display a message when no results are available
            <p>No users found</p>
        )}
          </div>
      </div>
      </div>
  );
}

export default AdminDashboard;

