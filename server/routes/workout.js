const express = require("express");
const Workout = require('../models/workout');
const router = express.Router();

router

.get('/get', async (req, res) => {
    try {
      const workout = await Workout.getWorkouts(req.body.workout, req.body.username);
      res.send(workout);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/create', async (req, res) => {
    try {
      const workout = await Workout.createWorkout(req.body.workout);
      res.send({...workout, workout: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message }); 
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      await Workout.deleteWorkouts(req.body.workout);
      res.send({ success: "Workouts deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .put('/update', async (req, res) => {
    try {
      const workout = await Workout.updateWorkout(req.body.id, req.body.workout);
      res.send({...workout, workout: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

module.exports = router;