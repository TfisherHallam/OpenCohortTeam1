const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes/routes.js');

app.use('/', routes);


app.listen(port, () => console.log(`Listening on port ${port}`));

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());

  // DB Config
  // Bring the db url from env file. - M
  const {db_url} = require("./.env");
  // Connect to MongoDB
  // Just added a couple of things to the monggose connect below - M
  mongoose.connect(
      db_url, {useMongoClient: true}, 
      { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB connection successful"))
    .catch(err => console.log(err));
  app.listen(port, () => console.log(`Server up and running on port ${port} !`));