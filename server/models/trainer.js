// 1. import mongoose
const mongoose = require("mongoose");
const bcrypt = require('bcrypt.js');

// 2. create schema for entity
const trainerSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true},
  password: { type: String, required: true},
  followers: [String],
  following: [String]
})

// 3. create model of schema
const Trainer = mongoose.model("Trainer", trainerSchema);

// 4. create CRUD functions on model
//CREATE a trainer
async function register(username, password) {
  const trainer = await getTrainer(username);
  if(trainer) throw Error('Trainername already in use');

  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);

  const newTrainer = await Trainer.create({
    username: username,
    password: hashed
  });

  return newTrainer;
}

// READ a trainer
async function login(username, password) {
  const trainer = await getTrainer(username);
  if(!trainer) throw Error('Trainer not found');

  const isMatch = await bcrypt.compare(password, trainer.password);

  if(!isMatch) throw Error('Wrong Password');

  return trainer._doc;
}

// UPDATE
async function updatePassword(id, password) {
  const trainer = await Trainer.updateOne({"_id": id}, {$set: { password: password}});
  return trainer;
}

//DELETE
async function deleteTrainer(id) {
  await Trainer.deleteOne({"_id": id});
};

// utility functions
async function getTrainer(username) {
  return await Trainer.findOne({ "username": username});
}

// 5. export all functions we want to access in route files
module.exports = { 
  register, login, updatePassword, deleteTrainer 
};