// 1. import any needed libraries
const express = require("express");
const Trainer = require('../models/trainer'); //accesses functions in trainer model file
const router = express.Router();

// 2. create all routes to access database
router
  .post('/login', async (req, res) => {
    try {
      const trainer = await Trainer.login(req.body.trainername, req.body.password);
      res.send({...trainer, password: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .post('/register', async (req, res) => {
    try {
      const trainer = await Trainer.register(req.body.trainername, req.body.password);
      res.send({...trainer, password: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message }); 
    }
  })

  .put('/update', async (req, res) => {
    try {
      const trainer = await Trainer.updatePassword(req.body.id, req.body.password);
      res.send({...trainer, password: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      await Trainer.deleteTrainer(req.body.id);
      res.send({ success: "Account deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

// 3. export router for use in index.js
module.exports = router;