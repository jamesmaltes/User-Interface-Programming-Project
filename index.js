require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require('path');

//users
const trainerRoutes = require('./server/routes/trainer');
const athleteRoutes = require('./server/routes/athlete');

//posts
const workoutRoutes = require('./server/routes/workout');
const reviewRoutes = require('./server/routes/review');

//enabling use of mongoose DB
mongoose.connect(process.env.dbURL)
  .then(console.log("DB Connected!!"))
  .catch(error => console.log(error));

app.use(express.json());

app.use(express.static(__dirname + "/client/build"));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/client/build', 'index.html')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin,X-Requested-Width,Content-Type,Accept,Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
  next();
});

//using routes
app.use('/trainer', trainerRoutes);
app.use('/athlete', athleteRoutes);
app.use('/workout', workoutRoutes);
app.use('/review', reviewRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));