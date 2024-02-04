const Post=require("../models/post.js");
const Review=require("../models/review.js");

module.exports.createReview=async (req,res)=>{
    let {id}=req.params;
    
    const post=await Post.findById(id);
    const createReview=new Review(req.body.review);
    createReview.owner=req.user._id;
    const newReview=await createReview.save();
    
    post.reviews.push(newReview);
    await post.save();

    req.flash("success","Review is Added!");
    
    res.redirect("/posts/"+id);
}

module.exports.deleteReview=async(req,res)=>{
    let {postID,reviewID}=req.params;

    await Post.findByIdAndUpdate(postID,{$pull:{reviews:reviewID}});
    await Review.findByIdAndDelete(reviewID);

    req.flash("success","Review is Deleted");
    res.redirect("/posts/"+postID);
    
}

module.exports.renderEditReviewPage=async (req,res)=>{
    let {reviewID}=req.params;
    const review=await Review.findById(reviewID).populate("owner");
    res.render("home/editreview.ejs",{review});
}

module.exports.editReview=async (req,res)=>{
    let {reviewID}= req.params;
    await Review.findByIdAndUpdate(reviewID,{...req.body.review});
    req.flash("succsess","Review is edited successfully");
    res.redirect("/posts");
}