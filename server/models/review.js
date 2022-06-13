const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  review:  {type:String }
})

const Review = mongoose.model("Review", reviewSchema);

async function createReview( review) {
    const newReview = await Review.create({
     review: review
    });
    return newReview;
}

  async function showReviews() {
    const review = await Review.find();
   return review;
}

  async function deleteReviews(review) {
    return await Review.deleteMany({"review": review});
}

 async function updateReview(id, review) {
  const athlete = await Review.updateOne({"_id": id}, {$set: { review: review}});
  return athlete;
}

  module.exports = { 
    createReview, showReviews, deleteReviews, updateReview
};