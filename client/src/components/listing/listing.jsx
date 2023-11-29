import {useState} from "react";
import CurrencyInput from 'react-currency-input-field';
import "./listing.css";
import Image from "./imageupload.jsx";
import submitListing from "./submitListing.js";
import { useSelector } from 'react-redux/es/hooks/useSelector.js';

function Listing() {

  const [formData, setFormData] = useState({});
  const { currentUser } = useSelector(state => state.user)


  const handleImageChange = async (selectedFile) => {
    console.log("selectedFile:", selectedFile);

    setFormData({
      ...formData,
      image: selectedFile,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('formData:', formData);
    try {

      const data = await submitListing(formData, currentUser);
    } catch (error) {
      console.error('Error in handleSubmit:', error);
    }
  };


	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};

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
                    className="form-input"/>

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
                    className="form-input"/>

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
                  <option value="Club Night">Concert</option>
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
                        {target: {id: name, value}})}
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

              <div className="input-wrapper">
                <label htmlFor="image" className="form-label">Add an Event
                  Image</label>
                <Image
                    className="form-input"
                    onFileChange={handleImageChange}
                />
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
              <button type="clear" className="clear-button" onClick={()=> window.location.reload()}>
                Clear
              </button>
            </form>
          </div>
        </div>
      </div>);
}

export default Listing;