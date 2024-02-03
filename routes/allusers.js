const express=require("express");
const router=express.Router();
const User=require("../models/user");

router.get("/",async (req,res)=>{
    const users=await User.find();
    res.render("home/users.ejs",{users});
});
router.get("/searchUser",async (req,res)=>{
    let {username}=req.query;
    username=username.trim();
    
    const regex = new RegExp(username, 'i');

    const users = await User.find({ username: { $regex: regex } });
    res.render("home/users.ejs",{users});
})
module.exports=router;