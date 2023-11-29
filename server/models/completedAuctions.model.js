import mongoose from "mongoose";

const completedAuctionsSchema = new mongoose.Schema({
  seller: {
    type: String, required: true
  },
  buyer: {
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
  image: {
    type: String,
    required: true,
  },

}, {timestamps: true});

const completedAuction = mongoose.model('completedAuctions', completedAuctionSchema);

export default completedAuction;