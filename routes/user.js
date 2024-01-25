const express=require("express");
const router=express.Router();
const User=require("../models/user");
const Post=require("../models/post");
const { isLoggedIn } = require("../middleware");

router.get("/:id",async (req,res)=>{
    let {id} = req.params;
    const user=await User.findById(id);
    const posts=await Post.find({owner:user._id})
    res.render("user/userProfile.ejs",{user,posts});
});
        
router.put("/:id/follow",isLoggedIn,async (req,res)=>{
    let {id}=req.params;
    let {currUrl}=req.body;
    const follower=await User.findById(req.user._id);
    const following=await User.findById(id);
    if(!req.user._id.equals(id) && !follower.following.includes(id)&& !following.followers.includes(req.user._id)){
        follower.following.push(id);
        following.followers.push(req.user._id);

        await follower.save();
        await following.save();

        req.flash("success","You are following him");
    }
    res.redirect(currUrl);    
});

router.put("/:id/unfollow",isLoggedIn,async (req,res)=>{
    let {id}=req.params;
    let {currUrl}=req.body;
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
    res.redirect(currUrl);
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

router.get("/:id/myFollowing",async (req,res)=>{
    let {id}=req.params;
    let user=await User.findById(id,{following:true,_id:false}).populate("following");
    let users=user.following;
    res.render("home/users.ejs",{users,user});
});

router.get("/:id/myFollowers",async (req,res)=>{
    let {id}=req.params;
    let user=await User.findById(id,{following:true,_id:false}).populate("followers");
    let users=user.followers;
    res.render("home/users.ejs",{users,user});
});

router.put("/:id/startchat",isLoggedIn, async(req,res)=>{
    let {id}=req.params;

    let user1=await User.findById(id);
    let user2=await User.findById(req.user._id);

    if(!user1.chats.includes(req.user._id) && !user2.chats.includes(id)){
        user1.chats.push(req.user._id);
        user2.chats.push(id);
    }
    else{
        req.flash("error","You are already have a chat with him");
        return res.redirect("/user/"+id);
    }

    await user1.save();
    await user2.save();

    req.flash("success","you can start chats with him");
    res.redirect("/user/"+id);
    
});



module.exports=router;