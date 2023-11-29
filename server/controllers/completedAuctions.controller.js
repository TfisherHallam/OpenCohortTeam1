import CompletedAuction from '../models/CompletedAuction.model.js';

// Get all CompletedAuctions from Mongo
const getAllCompletedAuctions = async (req, res, next) => {
  try {
    const CompletedAuctions = await CompletedAuction.find();
    res.status(200).json(CompletedAuctions);
  } catch (error) {
    next(error);
  }
}

//get a single CompletedAuction
const getCompletedAuction = async (req, res, next) => {
  try {
    const CompletedAuction = await CompletedAuction.findById(req.params.id);
    res.status(200).json(CompletedAuction);
  } catch (error) {
    next(error);
  }
}

//create a CompletedAuction
const createCompletedAuction = async (req, res, next) => {
  const {
    seller,
    buyer,
    eventName,
    eventDate,
    eventTime,
    eventType,
    image,

  } = req.body;
  const newCompletedAuction = new CompletedAuction({
    seller,
    buyer,
    eventName,
    eventDate,
    eventTime,
    eventType,
    image,

  });
  try {
    await newCompletedAuction.save();
    res.status(201).json('CompletedAuction created');
  } catch (error) {
    next(error);

  }
}

//update a CompletedAuction
const updateCompletedAuction = async (req, res, next) => {
  const {
    seller,
    buyer,
    eventName,
    eventDate,
    eventTime,
    eventType,
    image,

  } = req.body;

  const updatedCompletedAuction = {
    seller,
    buyer,
    eventName,
    eventDate,
    eventTime,
    eventType,
    image,
  };

  const updateObject = {};
  Object.keys(updatedCompletedAuction).forEach((key) => {
    if (updatedCompletedAuction[key] !== undefined) {
      updateObject[key] = updatedCompletedAuction[key];
    }
  });

  try {
    await CompletedAuction.findByIdAndUpdate(req.params.id, updateObject);
    res.status(200).json('CompletedAuction updated');
  } catch (error) {
    next(error);
  }
};

const deleteCompletedAuction = async (req, res, next) => {
  try {
    await CompletedAuction.findByIdAndDelete(req.params.id);
    res.status(200).json('CompletedAuction deleted');
  } catch (error) {
    next(error);
  }
}

export {
  getAllCompletedAuctions,
  getCompletedAuction,
  createCompletedAuction,
  updateCompletedAuction,
  deleteCompletedAuction
};