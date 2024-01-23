const express=require("express");
const router=express.Router();
const User=require("../models/user");
const Post=require("../models/post");

router.get("/:id",async (req,res)=>{
            let {id} = req.params;
            const user=await User.findById(id);
            const posts=await Post.find({owner:user._id})
            res.render("user/userProfile.ejs",{user,posts});
        });

module.exports=router;