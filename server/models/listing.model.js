import mongoose from "mongoose";
import DatePicker from "react-date-picker";

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        unique: true
    },

    username: {
        type: String,
        required: true
    },

    eventname: {
        type: String,
        required: true,
        unique: true
    },

    eventdate: {
        type: Date,
        required: true,
        unique: true
    },

    eventtime: {
        type: Time,
        required: true,
        unique: true
    },
    startingbid: {
        type: Number,
        required: true
    },

    reserve: {
        type: Number,
        required: true,
        unique: true
    },

    description: {
        type: String,
        required: true
    },

    image: {
        type: File,
        required: true,
        unique: true
    },

}, {timestamps: true});

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;