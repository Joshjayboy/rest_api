const express = require("express");

const app = express();

const mongoose = require("mongoose");

const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');


// Middlewares
app.use(cors());

app.use(bodyParser.json());

// Middlewares
// app.use('/posts', () => {
//     console.log('This is a middleware running');
// });

// import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

// Routes
app.get("/", (req, res) => {
  res.send("We are on home");
});


// connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  () => console.log("connected to DB")
);

// How do we listen to the server
app.listen(3000);
