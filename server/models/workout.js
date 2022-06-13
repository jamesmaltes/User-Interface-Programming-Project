const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  workout:  {type:String }
})

const Workout = mongoose.model("Workout", workoutSchema);

async function createWorkout( workout) {
    const newWorkout = await Workout.create({
     workout: workout
    });
    return newWorkout;
}

  async function showWorkouts() {
    const workout = await Workout.find();
   return workout;
}

  async function deleteWorkouts(workout) {
    return await Workout.deleteMany({"workout": workout});
}

 async function updateWorkout(id, workout) {
  const trainer = await Workout.updateOne({"_id": id}, {$set: { workout: workout}});
  return trainer;
}

  module.exports = { 
    createWorkout, showWorkouts, deleteWorkouts, updateWorkout
};