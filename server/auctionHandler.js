import fetch from 'node-fetch';

const PORT = process.env.PORT || 3001;

const isInPast = (eventDate, eventTime) => {
  const eventDateTime = new Date(`${eventDate.split('T')[0]}T${eventTime}`);
  const now = new Date();

  return eventDateTime < now;
};

const pushToCompletedAuctions = async (item) => {
  const {
    username,
    bidder,
    currentBid,
    eventName,
    eventDate,
    eventTime,
    eventType,
    image,
  } = item;

  const seller = username;
  const buyer = bidder;
  const price = currentBid;

  try {
    const response = await fetch(`http://localhost:${PORT}/api/completedAuctions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          seller,
          buyer,
          price,
          eventName,
          eventDate,
          eventTime,
          eventType,
          image,
        }),
      });

    if (!response.ok) {
      console.error(`Error pushing item '${eventName}' to completed auctions:`,
        response.statusText);
    } else {
      console.log(`Item '${eventName}' moved to completed auctions.`);
      await fetch(`http://localhost:${PORT}/api/listings/${item._id}`, {
        method: 'DELETE',
      });
    }
  } catch (error) {
    console.error(`Error pushing item '${eventName}' to completed auctions:`,
      error);
  }
};

const checkForCompletedAuctions = async () => {
  const now = Date.now();
  const endpoint = `http://localhost:${PORT}/api/listings/?auctionEndDate[$lt]=${now}&auctionEndTime[$lt]=${now}`;
  const res = await fetch(endpoint);
  const data = await res.json();

  for (const item of data) {
    if (await isInPast(item.auctionEndDate, item.auctionEndTime)) {
      console.log(`Item '${item.eventName}' is in the past.`);
      await pushToCompletedAuctions(item);
    }
  }
};

export default checkForCompletedAuctions;
