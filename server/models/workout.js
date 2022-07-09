const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  username: { type: String },
  workout:  { type:String }
})

const Workout = mongoose.model("Workout", workoutSchema);

async function createWorkout(username, workout) {
    const newWorkout = await Workout.create({
      username: username,
     workout: workout
    });
    return newWorkout;
}

  async function getWorkouts() {
    const workout = await Workout.find();
   return workout;
}

  async function deleteWorkouts(workout) {
    return await Workout.deleteMany({"workout": workout});
}

 async function updateWorkout(id, workout) {
  const user = await Workout.updateOne({"_id": id}, {$set: { workout: workout}});
  return user;
}

  module.exports = { 
    createWorkout, getWorkouts, deleteWorkouts, updateWorkout
};