import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 15
    },

    firstname: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 15
    },

    lastname: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 15
    },

    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 15
    },

    mobile: {
        type: Number,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 11
    },

    password: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 15
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;