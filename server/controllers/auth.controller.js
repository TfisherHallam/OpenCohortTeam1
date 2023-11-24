import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../helpers/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
  const { username, firstname, lastname, email, telephone, password } = req.body;
  const userStateCodeState = "1";
  const hashedPassword = bcryptjs.hashSync(password, 15);
  const newUser = new User({
    username,
    firstname,
    lastname,
    email,
    telephone,
    password: hashedPassword,
    userStateCode: userStateCodeState
  });
  try {
    await newUser.save();
    res.status(201).json('User created');
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, 'User does not exist'));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(
        errorHandler(401, 'Username or password incorrect'));
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie('access_token', token,
        { httpOnly: true, expires: new Date(Date.now() + 24 * 60 * 60) })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const signOut = async (req, res, next) => {
  try {
    res.clearCookie('access_token');
    res.status(200).json('Logged out');
  } catch (error) {
    next(error);
  }
};