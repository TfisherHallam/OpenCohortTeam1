import express from "express";
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://c3060912:cultsolveallbeckham@scalperdb.fgvbnpd.mongodb.net/?retryWrites=true&w=majority")

const app = express();

app.listen(3000, () => {
    console.log('Running on 3001');
}
)