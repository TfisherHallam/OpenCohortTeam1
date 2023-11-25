import User from '../models/user.model.js';
import { errorHandler } from '../helpers/error.js';

// Get all users from Mongo
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

//get a single user
const getUser = async (req, res, next) => {
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

//delete a user 
const deleteUser = async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return next(errorHandler(404, 'User not found'));
    }

    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User deleted');
    } catch (error) {
        next(error);
    }
}

export {
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
};
