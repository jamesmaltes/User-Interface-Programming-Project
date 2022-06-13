const express = require("express");
const Review = require('../models/review');
const router = express.Router();

router

.get('/showReviews', async (req, res) => {
    try {
      const review = await Review.showReviews(req.body.review);
      res.send(review);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .review('/createReview', async (req, res) => {
    try {
      const review = await Review.createReview(req.body.review);
      res.send({...review, review: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message }); 
    }
  })
  .delete('/dReviews', async (req, res) => {
    try {
      await Review.dReviews(req.body.review);
      res.send({ success: "Reviews deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .put('/updateReview', async (req, res) => {
    try {
      const review = await Review.updateReview(req.body.id, req.body.review);
      res.send({...review, review: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

module.exports = router;