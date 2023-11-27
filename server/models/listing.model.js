import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
  username: {
    type: String, required: true
  },

  eventName: {
    type: String, required: true,
  },

  eventDate: {
    type: Date, required: true,
  },

  eventTime: {
    type: String, required: true,
  },

  eventType: {
    type: String, required: true,
  },
  
  startingBid: {
    type: Number, required: true
  },

  currentBid: {
    type: Number
  },

  auctionEndDate: {
    type: Date
  },

  auctionEndTime: {
    type: String
  },

  description: {
    type: String, required: true
  },

  image: {
    type: String, //store the url/file path as a string
    required: true,
  },

}, {timestamps: true});

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;