import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
  username: {
    type: String, required: true
  },

  eventName: {
    type: String, required: true,
  },
  bidder: {
    type: String
  },

  eventDate: {
    type: Date, required: true,
  },
  currentBidder: {
    type: String
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
    type: String,
    required: true,
  },

}, {timestamps: true});

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;