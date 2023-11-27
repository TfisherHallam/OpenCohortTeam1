const updateListing = async (listingId, updatedData) => {
  try {
    const response = await fetch(`http://localhost:3001/api/listings/${listingId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ $set: updatedData }), // Use $set to update specific fields
    });

    if (!response.ok) {
      throw new Error(`Failed to update listing ${listingId}`);
    }

    const updatedListing = await response.json();
    console.log(`Successfully updated listing ${listingId}:`, updatedListing);
  } catch (error) {
    console.error(error);
  }
};


const fetchAndUpdateListings = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/listings');
    if (!response.ok) {
      throw new Error('Failed to fetch listings');
    }

    const data = await response.json();

    // Loop through each item in the data array and perform a PATCH request
    for (const listing of data) {
      const { _id, startingBid } = listing;

      // Create an updatedData object with the new field "currentBid"
      const updatedData = {
        currentBid: startingBid, // Set "currentBid" to the same as "startingBid"
        // Add other fields you want to update
      };

      await updateListing(_id, updatedData);
    }

    console.log('All listings updated successfully');
  } catch (error) {
    console.error(error);
  }
};

// Call the function to fetch and update listings
fetchAndUpdateListings();
