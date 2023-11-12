import { errorHelper } from '../helpers/error.js';
import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const register = async (req, res, next) => {
    const { username, firstname, lastname, email, telephone, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 15);
    const hashedfirstname = bcryptjs.hashSync(firstname, 10);
    const hashedlastname = bcryptjs.hashSync(lastname, 10);
    const hashedtel = bcryptjs.hashSync(telephone, 10);
    const newUser = new User(
        {username,
        firstname: hashedfirstname,
        lastname: hashedlastname,
        telephone: hashedtel,
        email, 
        password: hashedPassword });
    try {
        await newUser.save();
        res.status(201).json('User created')
    }
    catch (error) {
        next(error);
    }
}