
const User=require("../models/user");

module.exports.usersPage=async (req,res)=>{
    const users=await User.find();
    res.render("home/users.ejs",{users});
}

module.exports.searchUser=async (req,res)=>{
    let {username}=req.query;
    username=username.trim();
    
    const regex = new RegExp(username, 'i');

    const users = await User.find({ username: { $regex: regex } });
    res.render("home/users.ejs",{users});
}