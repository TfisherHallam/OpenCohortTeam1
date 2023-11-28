import Listing from '../models/listing.model.js';

// Get all Listings from Mongo
const getAllListings = async (req, res, next) => {
  try {
    const listings = await Listing.find();
    res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
}

//get a single listing
const getListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);
    res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
}

//create a listing
const createListing = async (req, res, next) => {
  const {
    username,
    eventName,
    eventDate,
    eventTime,
    bidder,
    startingBid,
    auctionEndDate,
    auctionEndTime,
    currentBid,
    eventType,
    description,
    image,
  } = req.body;
  const newListing = new Listing({
    username,
    eventName,
    eventDate,
    eventTime,
    bidder,
    startingBid,
    eventType,
    auctionEndDate,
    auctionEndTime,
    currentBid,
    description,
    image,
  });
  try {
    await newListing.save();
    res.status(201).json('Listing created');
  } catch (error) {
    next(error);

  }
}

//update a listing
const updateListing = async (req, res, next) => {
  const {
    username,
    eventName,
    eventDate,
    eventTime,
    eventType,
    bidder,
    startingBid,
    auctionEndDate,
    auctionEndTime,
    currentBid,
    description,
    image,
  } = req.body;

  const updatedListing = {
    username,
    eventName,
    eventDate,
    eventTime,
    bidder,
    startingBid,
    auctionEndDate,
    eventType,
    auctionEndTime,
    currentBid,
    description,
    image,
  };

  const updateObject = {};
  Object.keys(updatedListing).forEach((key) => {
    if (updatedListing[key] !== undefined) {
      updateObject[key] = updatedListing[key];
    }
  });

  try {
    await Listing.findByIdAndUpdate(req.params.id, updateObject);
    res.status(200).json('Listing updated');
  } catch (error) {
    next(error);
  }
};

const deleteListing = async (req, res, next) => {
  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json('Listing deleted');
  } catch (error) {
    next(error);
  }
}

export {
  getAllListings,
  getListing,
  createListing,
  updateListing,
  deleteListing
};