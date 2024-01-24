const {postSchema, reviewSchema, userSchema}=require("./schema.js");
const ExpressError=require("./util/ExpressError.js");
const Post=require("./models/post.js");
const Review=require("./models/review.js");

module.exports.validatePost= (req,res,next)=>{
    let {error}= postSchema.validate(req.body);

    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg); 
    }else{
        next();
    }
}

module.exports.validateReview=(req,res,next)=>{
    let {error}= reviewSchema.validate(req.body);

    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg); 
    }else{
        next();
    }
}

module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","You must login/signup before useing");
        return res.redirect("/authentication/login");
    }else{
        next();
    }
}

module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}

module.exports.isOwnerOfPost=async (req,res,next)=>{
    let {id}=req.params;
    let post=await Post.findById(id).populate("owner");
    if(!post.owner._id.equals(res.locals.currUser._id)){
        req.flash("error","You are not the created of this post");
        return res.redirect("/posts");
    }
    next();
}


module.exports.isOwnerOfReview=async (req,res,next)=>{
    let {postID,reviewID}=req.params;
    let review=await Review.findById(reviewID).populate("owner");
    
    if(!review.owner._id.equals(res.locals.currUser._id)){
        req.flash("error","you are not the owner of the review");
        return res.redirect("/posts/"+postID);
    }
    next();
}