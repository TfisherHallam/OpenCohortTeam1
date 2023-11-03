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
  const db = require("./config/keys").mongoURI;
  // Connect to MongoDB
  mongoose
    .connect(
      db,
      { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB connection successful"))
    .catch(err => console.log(err));
  app.listen(port, () => console.log(`Server up and running on port ${port} !`));