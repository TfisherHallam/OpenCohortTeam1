import { errorHandler } from '../helpers/error.js';
import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res, next) => {

    const { username, firstname, lastname, email, telephone, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 15);
    const newUser = new User({
        username,
        firstname,
        lastname,
        email,
        telephone,
        password: hashedPassword
    });
    try {
        await newUser.save();
        res.status(201).json("User created");
    } catch (error) {
        next(error);
    }
};
