const PORT = process.env.PORT || 3001;
function submitListing(formData, currentUser) {


    switch (formData.eventType) {
      case "Gig":
        formData.image = "https://www.shutterstock.com/shutterstock/videos/1028320181/thumb/4.jpg?ip=x480";
        break;
      case "Concert":
        formData.image = "https://media.istockphoto.com/id/1329410603/photo/large-group-of-people-at-a-concert-party.jpg?s=612x612&w=0&k=20&c=l6wVs8ljbWD_6c6_Z9QG7vKwrEQvKnYxeyOjA-KmQkk=";
        break;
      case "Festival":
        formData.image = "https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        break;
      case "Comedy Night":
        formData.image = "https://st2.depositphotos.com/1008801/9201/v/450/depositphotos_92017794-stock-illustration-microphone-and-red-curtain.jpg";
        break;
      default:
        formData.image = "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        break;
    }

  formData.currentBid = formData.startingBid;
  formData.username = currentUser.username;
  formData.bidder = currentUser.username;

  return fetch(`http://localhost:${PORT}/api/listings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
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
    console.log('Success in submitting listing:', data);
    return data;
  })
  .catch((error) => {
    console.error('Error in submitting listing:', error.message);
    throw error;
  });
}
export default submitListing;
