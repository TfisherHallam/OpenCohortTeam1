import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    telephone: {
        type: Number,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },
}, {timestamps: true});

const User = mongoose.model('username', userSchema); //This directs it to the table

export default User;