import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String, required: true, unique: true,
  },

  firstname: {
    type: String, required: true
  },

  lastname: {
    type: String, required: true
  },

  email: {
    type: String, required: true, unique: true,
  },

  telephone: {
    type: String, required: true, unique: true
  },

  userStateCode: {
    type: String, 
    default: "1"
  },

  password: {
    type: String, required: true,
  }, 
  
  avatar: {
    type: String,
    default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  },
}, {timestamps: true});

const User = mongoose.model('username', userSchema); //This directs it to the table

export default User;