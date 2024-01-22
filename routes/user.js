const express=require("express");
const router=express.Router();
const User=require("../models/user");


router.get("/:id",async (req,res)=>{
    let {id} = req.params;
    const user=await User.findById(id);
    res.render("user/userProfile.ejs",{user});
});

module.exports=router;