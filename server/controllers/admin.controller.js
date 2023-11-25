import User from "../models/user.model";

// Get all users from Mongo
const getAllUsers = async (req, res, next) => {
  try {
    const User = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
}

//get a single user
const getuser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

const updateUser = async (req, res, next) => {
    const {
      userStateCode
    } = req.body;
  
    const updatedUser = {
        userStateCode
    };
  
    const updateObject = {};
    Object.keys(updatedUser).forEach((key) => {
      if (updatedUser[key] !== undefined) {
        updateObject[key] = updatedUser[key];
      }
    });
  
    try {
      await User.findByIdAndUpdate(req.params.id, updateObject);
      res.status(200).json('User updated');
    } catch (error) {
      next(error);
    }
  };