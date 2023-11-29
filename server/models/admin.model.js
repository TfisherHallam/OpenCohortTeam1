import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userStateCode: {
    type: String, 
  }
  }, {timestamps: true});

const User = mongoose.model('username', userSchema); //This directs it to the table

export default User;