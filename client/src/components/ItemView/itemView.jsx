import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import './itemView.css';
import {formatTime} from '../results/results.jsx';

const PORT = process.env.PORT || 3001;

export default function ItemView() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();

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

  const renderBidValue = () => {
    // Add logic for rendering new bid value here
  };

  return (
      <main>
        {loading && <p>Loading...</p>}
        {error && <p>An issue occurred, please try again</p>}
        {item && !loading && !error && (
            <article className="itemView">
              {item.image && (
                  <img src={item.image} alt="Item Image" className="itemView-image" />
              )}

              <section className="itemView-details">
                <div className="itemView-row">
                  <strong className="itemView-label">Category:</strong>
                  <span className="itemView-value">{item.category}</span>
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
                  <strong className="itemView-label">Auction End:</strong>
                  <span className="itemView-value">{item.auctionEndDate}</span>
                </div>

                <div className="itemView-row">
                  <strong className="itemView-label">Starting Bid:</strong>
                  <span className="itemView-value">{item.startingBid}</span>
                </div>

                <div className="itemView-row">
                  <strong className="itemView-label">Current Bid:</strong>
                  <span className="itemView-value">{item.currentBid}</span>
                </div>

                <div className="itemView-row">
                  <strong className="itemView-label">New Bid:</strong>
                  <span className="itemView-value">{renderBidValue()}</span>
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
            </article>
        )}
      </main>
  );
}
