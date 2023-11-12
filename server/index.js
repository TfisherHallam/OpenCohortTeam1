import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('Successfully connected to MongoDB');
}).catch((err) => {
    console.log(err);
});

const app = express();


app.listen(3000, () => {
    console.log('Running on 3000');
}
)