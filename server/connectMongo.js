import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
const envPath = path.resolve('.env');
dotenv.config({ path: envPath });
const mongoURI = process.env.MONGO;

const connectDatabase = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export { connectDatabase };
