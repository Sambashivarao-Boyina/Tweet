const express=require("express");
const router=express.Router();
const User=require("../models/user");
const Post=require("../models/post");
const { use } = require("passport");
const { isLoggedIn } = require("../middleware");

router.get("/:id",async (req,res)=>{
    let {id} = req.params;
    const user=await User.findById(id);
    const posts=await Post.find({owner:user._id})
    res.render("user/userProfile.ejs",{user,posts});
});
        
router.put("/:id/follow",isLoggedIn,async (req,res)=>{
    let {id}=req.params;
    const follower=await User.findById(req.user._id);
    const following=await User.findById(id);
    if(!req.user._id.equals(id) && !follower.following.includes(id)&& !following.followers.includes(req.user._id)){
        follower.following.push(id);
        following.followers.push(req.user._id);

        await follower.save();
        await following.save();

        req.flash("success","You are following him");
    }
    res.redirect("/user/"+id);    
});

router.put("/:id/unfollow",isLoggedIn,async (req,res)=>{
    let {id}=req.params;
    const follower=await User.findById(req.user._id);
    const following=await User.findById(id);
    if(!req.user._id.equals(id) && follower.following.includes(id) && following.followers.includes(req.user._id)){
        let idx1=follower.following.indexOf(id);
        let idx2=following.followers.indexOf(req.user._id);
        
        follower.following.splice(idx1,1);
        following.followers.splice(idx2,1);

        await follower.save();
        await following.save();

        req.flash("success","You are unfollowing him");
    }
    res.redirect("/user/"+id);
});


router.get("/:id/myfollowingsPosts",isLoggedIn,async(req,res)=>{
    let {id}=req.params;
    let user=await User.findById(id);
    let posts=await Post.find({owner:{$in:user.following}}).populate("owner");
    posts.sort((a,b)=>{
        return b.createdDate-a.createdDate;
    })
    res.render("home/show.ejs",{posts});
});

module.exports=router;