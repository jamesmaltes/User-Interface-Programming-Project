const express = require("express");
const Workout = require('../models/workout');
const router = express.Router();

router

.get('/showWorkouts', async (req, res) => {
    try {
      const workout = await Workout.showWorkouts(req.body.workout);
      res.send(workout);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/createWorkout', async (req, res) => {
    try {
      const workout = await Workout.createWorkout(req.body.workout);
      res.send({...workout, workout: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message }); 
    }
  })
  .delete('/deleteWorkouts', async (req, res) => {
    try {
      await Workout.deleteWorkouts(req.body.workout);
      res.send({ success: "Workouts deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .put('/updateWorkout', async (req, res) => {
    try {
      const workout = await Workout.updateWorkout(req.body.id, req.body.workout);
      res.send({...workout, workout: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

module.exports = router;