import { errorHandler } from '../helpers/error.js';
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
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

export const signin = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const validUser = await User.findOne({ username })
        if (!validUser) return next(errorHandler(404, 'User does not exist'));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(400, 'Username or password incorrect'));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        res.cookie('jwebtoken', token, { httpOnly: true, expires: new Date(Date.now() + 24 * 60 * 60) }
            .status(200)
            .json(validUser));
    } catch (error) {
        next(error);
    }
}
