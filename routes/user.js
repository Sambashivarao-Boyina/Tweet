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
    const user=await User.findById(req.user._id);
    if(!user.following.includes(id)){
        user.following.push(id);
        await user.save();
        req.flash("success","You are following him");
    }
    res.redirect("/user/"+id);    
});

router.put("/:id/unfollow",isLoggedIn,async (req,res)=>{
    let {id}=req.params;
    const user=await User.findById(req.user._id);
    if(user.following.includes(id)){
        let idx=user.following.indexOf(id);
        user.following.splice(idx,1);
        await user.save();
        req.flash("success","You are following him");
    }
    res.redirect("/user/"+id);
})

module.exports=router;