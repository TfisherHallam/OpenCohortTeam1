import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import './itemView.css';
import CurrencyInput from 'react-currency-input-field';
import {calculateCountdown, formatTime} from '../results/results.jsx';
import {useSelector} from 'react-redux/es/hooks/useSelector.js';
import submitBid from "./submitBid.js";

const PORT = process.env.PORT || 3001;

export default function ItemView() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [countdown, setCountdown] = useState(
      calculateCountdown(item?.auctionEndDate, item?.auctionEndTime));
  const [currentBid, setCurrentBid] = useState(item?.currentBid);
  const params = useParams();
  const [newBid, setNewBid] = useState({
    currentBid: '', bidder: '', listingId: '',
  });
  const {currentUser} = useSelector(state => state.user)

  const handleChange = (e, itemId) => {
    setNewBid({
      ...newBid,
      currentBid: e.target.value,
      bidder: currentUser.username,
      listingId: itemId,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newBid.currentBid <= item.currentBid + 0.49) {
      alert("Bid must be at least 50p more than the current bid");
      return;
    }
    if(currentUser.username === item.username){
      window.alert("You cannot bid on your own item");
      window.location.reload();
      return;
    }

    const isConfirmed = window.confirm(

        `You are about to bid £${newBid.currentBid}, if you win the bidding and do not follow through this could result in termination of your account, are you sure you want to submit this bid?`);
    if (!isConfirmed) {
      return;
    }

    try {
      const data = await submitBid(newBid);
      window.location.reload();
    } catch (error) {
      console.error('Error in handleSubmit:', error);
    }
  };

  useEffect(() => {
    const fetchItem = async () => {
      try {
        setLoading(true);

        const res = await fetch(
            `http://localhost:${PORT}/api/listings/${params.itemid}`);
        const data = await res.json();

        if (data.success === false) {
          setError(true);
          return;
        }

        setItem(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [params.itemid]);

  useEffect(() => {
    const updateCountdown = () => {
      setCountdown(
          calculateCountdown(item?.auctionEndDate, item?.auctionEndTime));
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [item]);

  useEffect(() => {
    const updateCurrentBid = () => {
      setCurrentBid(item?.currentBid);
    };

    const bidIntervalId = setInterval(updateCurrentBid, 5000); // Check every 5 seconds

    return () => {
      clearInterval(bidIntervalId);
    };
  }, [item]);

  return (<main>
        {loading && <p>Loading...</p>}
        {error && <p>An issue occurred, please try again</p>}
        {item && !loading && !error && (<article className="itemView">
              <h1 className="itemView-title">{item.eventName}</h1>
              {item.image && (<img src={item.image} alt="Item Image"
                                   className="itemView-image"/>)}
              <section className="itemView-details">
                <div className="itemView-row">
                  <strong className="itemView-label">Category:</strong>
                  <span className="itemView-value">{item.eventType}</span>
                </div>

                <div className="itemView-row">
                  <strong className="itemView-label">Event Date:</strong>
                  <span className="itemView-value">{new Date(
                      item.eventDate).toLocaleDateString()}</span>
                </div>

                <div className="itemView-row">
                  <strong className="itemView-label">Event Time:</strong>
                  <span className="itemView-value">{formatTime(
                      item.eventTime)}</span>
                </div>

                <div className="itemView-row">
                  <strong className="itemView-label">Auction End Date:</strong>
                  <span className="itemView-value">{new Date(
                      item.eventDate).toLocaleDateString()}</span>
                </div>

                <div className="itemView-row">
                  <strong className="itemView-label">Auction End Time:</strong>
                  <span className="itemView-value">{formatTime(
                      item.eventTime)}</span>
                </div>

                <div className="itemView-row">
                  <strong className="itemView-label">Seller:</strong>
                  <span className="itemView-value">{item.username}</span>
                </div>

                <div className="itemView-row">
                  <strong className="itemView-label">Description:</strong>
                  <p className="itemView-value">{item.description}</p>
                </div>
              </section>

              <section className={"auctionFunction"}>

                <div className="itemView-row">
                  <strong className="itemView-label"> {item.bidder
                  === item.username || item.bidder === undefined || item.bidder
                  === null || item.bidder === "" ? 'Starting Bid'
                      : 'Current Bid'}:</strong>
                  <div className={"spacer"}></div>
                  <span className="currentBid">£{item.currentBid}</span>
                  <div className={"spacer"}></div>
                  <span className="leader"> Leading Bidder: {item.bidder
                  === currentUser.username ? `${item.bidder} (You)`
                      : item.bidder}</span>

                </div>

                <div className="Countdown">
                  <p>{calculateCountdown(item.auctionEndDate,
                      item.auctionEndTime)}</p>
                </div>
              </section>
              <form className={"bidSection"} onSubmit={handleSubmit}>
                <div className={"bidBox"}>
                  <div className={"bidInput"}>
                    <CurrencyInput
                        className="form-input"
                        id="startingBid"
                        name="startingBid"
                        placeholder={`£${item.currentBid + 0.50}`}
                        style={{textAlign: "center"}}
                        prefix="£"
                        decimalsLimit={2}
                        required={true}
                        value={newBid.currentBid || ''}
                        onValueChange={(value, name) => handleChange(
                            {target: {value}}, item._id)}
                    />
                  </div>
                  <div className="bidButton">
                    {item.username === currentUser.username ? (
                        <button className="bidButtonBox" disabled>
                          Cannot Bid On Your Own Item
                        </button>
                    ) : (
                        <button type="submit" className="bidButtonBox">
                          Place Your Bid
                        </button>
                    )}
                  </div>
                </div>
              </form>

            </article>)}
      </main>);
}
