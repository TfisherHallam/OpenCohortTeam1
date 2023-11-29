import React, {useEffect, useState} from "react";
import {formatTime} from "../results/results.jsx";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux/es/hooks/useSelector.js";

const PORT = process.env.PORT || 3001;



export default function SaleDetails() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();
  const {currentUser} = useSelector(state => state.user)

  useEffect(() => {
    const fetchItem = async () => {
      try {
        setLoading(true);
        const res = await fetch(
            `http://localhost:${PORT}/api/completedAuctions/${params.itemid}`);
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

  return (<main>
    {loading && <p>Loading...</p>}
    {error && <p>An issue occurred, please try again</p>}
    {item && !loading && !error && (
        <article className="itemView">
          <h1 className="itemView-title">{item.eventName}</h1>
          {item.image && (<img
              src={item.image}
              alt="Item Image"
              className="itemView-image"
          />)}
          <section className="itemView-details">
            <div className="itemView-row">
              <strong className="itemView-label">Category:</strong>
              <span className="itemView-value">{item.eventType}</span>
            </div>

            <div className="itemView-row">
              <strong className="itemView-label">Event Date:</strong>
              <span className="itemView-value">
              {new Date(item.eventDate).toLocaleDateString()}
            </span>
            </div>

            <div className="itemView-row">
              <strong className="itemView-label">Event Time:</strong>
              <span className="itemView-value">{formatTime(
                  item.eventTime)}</span>
            </div>

            <div className="itemView-row">
              <strong className="itemView-label">Seller:</strong>
              <span
                  className="itemView-value">
            {item.seller === currentUser.username ?
                `${item.seller} (You)` : item.seller}
          </span>
            </div>

            <div className="itemView-row">
              <strong className="itemView-label">Buyer:</strong>
              <span className="itemView-value">
            {item.buyer === currentUser.username ?
                `${item.buyer} (You)` : item.buyer}
          </span>
            </div>
            <div className="itemView-row">
              <strong className="itemView-label">Price:</strong>
              <span className="itemView-value">£{item.price}</span>
            </div>
          </section>
        <section>
          <Forum item={item} />
        </section>
        </article>)}
  </main>)
};

const Forum = ({ item }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  const params = useParams();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch(
            `http://localhost:${PORT}/api/messages/${params.itemid}`
        );
        const data = await res.json();
        if (data.success) {
          setMessages(data.messages);
        } else {
          console.error("Failed to fetch messages");
        }
      } catch (error) {
        console.error("Error fetching messages", error);
      }
    };
    fetchMessages();
  }, [params.itemid]);

  const sendMessage = () => {
    const newMessageObj = {
      sender: currentUser.username,
      message: newMessage,
    };
    setMessages([...messages, newMessageObj]);
    setNewMessage("");
  };

  return (
      <div style={{ margin: '20px', padding: '20px', border: '1px solid #ddd' }}>
        <h2 style={{ marginBottom: '10px' }}>Prototype of Messaging:</h2>
        <div
            className="message-container"
            style={{ marginBottom: '10px', maxHeight: '200px', overflowY: 'auto' }}
        >
          {messages.map((message, index) => (
              <div key={index} style={{ marginBottom: '5px' }}>
                <strong>{message.sender}:</strong> {message.message}
              </div>
          ))}
        </div>
        <div className="message-input" style={{ display: 'flex', alignItems: 'center' }}>
        <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            style={{ flex: 1, marginRight: '10px' }}
        />
          <button onClick={sendMessage} style={{ padding: '5px 10px', cursor: 'pointer' }}>
            Send
          </button>
        </div>
      </div>
  );
};