// 1. import mongoose
const mongoose = require("mongoose");
const bcrypt = require('bcrypt.js');

// 2. create schema for entity
const athleteSchema = new mongoose.Schema({
  athletename: { type: String, unique: true, required: true},
  password: { type: String, required: true},
  followers: [String],
  following: [String]
})

// 3. create model of schema
const Athlete = mongoose.model("Athlete", athleteSchema);

// 4. create CRUD functions on model
//CREATE a athlete
async function register(athletename, password) {
  const athlete = await getAthlete(athletename);
  if(athlete) throw Error('Athletename already in use');

  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);

  const newAthlete = await Athlete.create({
    athletename: athletename,
    password: hashed
  });

  return newAthlete;
}

// READ a athlete
async function login(athletename, password) {
  const athlete = await getAthlete(athletename);
  if(!athlete) throw Error('Athlete not found');
  if(athlete.password != password) throw Error('Wrong Password');

  return athlete;
}

// UPDATE
async function updatePassword(id, password) {
  const athlete = await Athlete.updateOne({"_id": id}, {$set: { password: password}});
  return athlete;
}

//DELETE
async function deleteAthlete(id) {
  await Athlete.deleteOne({"_id": id});
};

// utility functions
async function getAthlete(athletename) {
  return await Athlete.findOne({ "athletename": athletename});
}

// 5. export all functions we want to access in route files
module.exports = { 
  register, login, updatePassword, deleteAthlete 
};