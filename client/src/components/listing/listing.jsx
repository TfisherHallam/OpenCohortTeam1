import { useState } from "react";
import CurrencyInput from 'react-currency-input-field';
import "./listing.css";
import Image from "./imageupload.jsx";
import submitListing from "./submitListing.js";
import { useSelector } from 'react-redux/es/hooks/useSelector.js';
import { useNavigate } from 'react-router-dom';
import Blockederroritems from "../blockederror/blockederror.jsx";

function Listing() {
  const [formData, setFormData] = useState({});
  const { currentUser } = useSelector(state => state.user)
  const navigate = useNavigate();

  // const handleImageChange = async (selectedFile) => {
  //
  //   setFormData({
  //     ...formData,
  //     image: selectedFile,
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.image = null;
    const auctionDate = new Date(formData.auctionEndDate);
    const eventDate = new Date(formData.eventDate);
    const currentDate = new Date();
    if (auctionDate < currentDate) {
      window.alert("Auction end date must be tomorrow or later.");
      return;
    } else if (auctionDate >= eventDate) {
      window.alert("Auction end date must be the day before the event date or sooner.");
      return;
    }
    if (eventDate <= currentDate) {
      window.alert("Event date must be tomorrow or later.");
      return;
    }
    try {
      const data = await submitListing(formData, currentUser);
      const newId = data.id;
      try {
        window.location.href = `http://localhost:3000/itemView/${newId}`;
      } catch (error) {
        console.log("unable to redirect: ", error);
      }

    } catch (error) {
      window.alert("Not all required fields have been filled in.");
      console.error('Error in handleSubmit:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  if (currentUser.userStateCode !== "Blocked user") {
    return (
      <div className="">
        <div className="">
          <div className="flex-container">
            <form className="form" onSubmit={handleSubmit}>
              <h1 className={"heading"}>Create your listing</h1>
              <div className="input-wrapper">
                <label htmlFor="eventName" className="form-label">Event
                  Name</label>
                <input
                  id="eventName"
                  type="text"
                  placeholder="Event Name"
                  name="Event Name"
                  onChange={handleChange}
                  required={true}
                  className="form-input" />
              </div>
              <div className="input-wrapper">
                <label htmlFor="eventDate" className="form-label">Event
                  Date</label>
                <input
                  className="form-input"
                  type="date"
                  onChange={handleChange}
                  id="eventDate"
                  name="Event Date"
                  placeholder=""
                  value={formData.eventDate || ''}
                  min=""
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="eventTime" className="form-label">Event
                  Time</label>
                <input
                  type="time"
                  onChange={handleChange}
                  id="eventTime"
                  name="Event Time"
                  value={formData.eventTime || ''}
                  min=""
                  className="form-input" />
              </div>
              <div className="input-wrapper">
                <label htmlFor="eventType" className="form-label">Event
                  Type</label>
                <select
                  id="eventType"
                  placeholder="Browse..."
                  onChange={handleChange}
                  className="Event-Type">
                  <option value=""></option>
                  <option value="Concert">Concert</option>
                  <option value="Festival">Festival</option>
                  <option value="Gig">Gig</option>
                  <option value="Comedy Night">Comedy Night</option>
                  <option value="Club Night">Club Night</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="input-wrapper">
                <label htmlFor="startingBid" className="form-label">Starting
                  Bid</label>
                <CurrencyInput
                  className="form-input"
                  id="startingBid"
                  name="startingBid"
                  placeholder="£00.00"
                  prefix="£"
                  decimalsLimit={2}
                  required={true}
                  onValueChange={(value, name) => handleChange(
                    { target: { id: name, value } })}
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="auctionEndDate" className="form-label">Auction
                  End Date</label>
                <input
                  className="form-input"
                  type="date"
                  onChange={handleChange}
                  id="auctionEndDate"
                  name="Auction End Date"
                  placeholder=""
                  value={formData.auctionEndDate || ''}
                  min=""
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="auctionEndTime" className="form-label">Auction
                  End Time</label>
                <input
                  type="time"
                  onChange={handleChange}
                  id="auctionEndTime"
                  name="Auction End Time"
                  value={formData.auctionEndTime || ''}
                  min=""
                  className="form-input"
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="description" className="form-label">Event
                  Description</label>
                <input
                  id="description"
                  type="textarea"
                  className="form-input"
                  placeholder="Give more information about your event..."
                  name="Description"
                  onChange={handleChange}
                  required={false}
                />
              </div>
              {/*<div className="input-wrapper">*/}
              {/*  <label htmlFor="image" className="form-label">Add an Event*/}
              {/*    Image</label>*/}
              {/*  <Image*/}
              {/*      className="form-input"*/}
              {/*      onFileChange={handleImageChange}*/}
              {/*  />*/}
              {/*</div>*/}
              <button type="submit" className="submit-button">
                Submit
              </button>
              <button type="clear" className="clear-button"
                onClick={() => window.location.reload()}>
                Clear
              </button>
            </form>
          </div>
        </div>
      </div>);
  } return (
    <Blockederroritems />
  )
}

export default Listing;