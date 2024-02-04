const express=require("express");
const router=express.Router();

const { validateReview, isLoggedIn, isOwnerOfReview}=require("../middleware.js");
const wrapAsync=require("../util/wrapAsync");
const reviewController=require("../controllers/review.js");

router.post("/:id",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

router.delete("/:postID/:reviewID",isLoggedIn,isOwnerOfReview,wrapAsync(reviewController.deleteReview));

router.get("/edit/:postID/:reviewID",isLoggedIn,isOwnerOfReview,wrapAsync(reviewController.renderEditReviewPage));

router.put("/edit/:reviewID",isLoggedIn,isOwnerOfReview,validateReview,wrapAsync(reviewController.editReview));

module.exports=router;