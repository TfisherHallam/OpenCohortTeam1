import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
  username: {
    type: String, required: true
  },

  eventName: {
    type: String, required: true, unique: true
  },

  eventDate: {
    type: Date, required: true, unique: true
  },

  eventTime: {
    type: Date, required: true, unique: true
  }, startingBid: {
    type: Number, required: true
  },

  reserve: {
    type: Number, required: true, unique: true
  },

  description: {
    type: String, required: true
  },

  image: {
    type: String, //store the url/file path as a string
    required: true, unique: true
  },

}, {timestamps: true});

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;