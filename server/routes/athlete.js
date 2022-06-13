// 1. import any needed libraries
const express = require("express");
const Athlete = require('../models/athlete'); //accesses functions in athlete model file
const router = express.Router();

// 2. create all routes to access database
router
  .post('/login', async (req, res) => {
    try {
      const athlete = await Athlete.login(req.body.athletename, req.body.password);
      res.send({...athlete, password: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .post('/register', async (req, res) => {
    try {
      const athlete = await Athlete.register(req.body.athletename, req.body.password);
      res.send({...athlete, password: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message }); 
    }
  })

  .put('/update', async (req, res) => {
    try {
      const athlete = await Athlete.updatePassword(req.body.id, req.body.password);
      res.send({...athlete, password: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      await Athlete.deleteAthlete(req.body.id);
      res.send({ success: "Account deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

// 3. export router for use in index.js
module.exports = router;