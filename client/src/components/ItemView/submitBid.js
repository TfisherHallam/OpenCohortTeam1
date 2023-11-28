import {current} from "@reduxjs/toolkit";
const PORT = process.env.PORT || 3001;
function submitBid(newBid) {

  return fetch(`http://localhost:${PORT}/api/listings/${newBid.listingId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBid),
  })
  .then(async (response) => {
    if (!response.ok) {
      let errorMessage = 'Server error';
      try {
        const errorData = await response.json();
        if (errorData.message) {
          errorMessage = `Server error: ${errorData.message}`;
        }
      } catch (jsonError) {
        console.error('Error parsing JSON response:', jsonError);
      }
      throw new Error(errorMessage);
    }
    return response.json();
  })
  .then((data) => {
    console.log('Success in submitting bid:', data);
    return data;
  })
  .catch((error) => {
    console.error('Error in submitting listing:', error.message);
    throw error;
  });
}
export default submitBid;
