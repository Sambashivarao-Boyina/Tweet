const User=require("../models/user");
const Post=require("../models/post");

module.exports.renderUserProfilePage=async (req,res)=>{
    let {id} = req.params;
    const user=await User.findById(id);
    const posts=await Post.find({owner:user._id})
    res.render("user/userProfile.ejs",{user,posts});
}

module.exports.follow=async (req,res)=>{
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
}

module.exports.unfollow=async (req,res)=>{
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
}

module.exports.myFollowingPostPage=async(req,res)=>{
    let {id}=req.params;
    let user=await User.findById(id);
    let posts=await Post.find({owner:{$in:user.following}}).populate("owner");
    posts.sort((a,b)=>{
        return b.createdDate-a.createdDate;
    })
    res.render("home/show.ejs",{posts});
}

module.exports.myFollowing=async (req,res)=>{
    let {id}=req.params;
    let user=await User.findById(id,{following:true,_id:false}).populate("following");
    let users=user.following;
    res.render("home/users.ejs",{users,user});
}

module.exports.myFollowers=async (req,res)=>{
    let {id}=req.params;
    let user=await User.findById(id,{following:true,_id:false}).populate("followers");
    let users=user.followers;
    res.render("home/users.ejs",{users,user});
}

module.exports.startChat=async(req,res)=>{
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
    
}

module.exports.changeProfile=async (req,res)=>{
    let {id}=req.params;
    const user =await User.findById(id);
    if(req.file){
        let url=req.file.path;
        let filename=req.file.filename;
        user.profileImage={url,filename};
        await User.findByIdAndUpdate(id,{...user});
        req.flash("success","Profile Image is Updated");
    }
    res.redirect("/user/"+id);           
}

module.exports.deleteProfile=async (req,res)=>{
    let {id}=req.params;
    const user =await User.findById(id);
    user.profileImage={url:"",filename:""};
    await User.findByIdAndUpdate(id,{...user});
    req.flash("success","Profile Image is Deleted");
    
    res.redirect("/user/"+id);           
}