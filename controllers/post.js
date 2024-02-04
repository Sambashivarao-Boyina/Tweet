const Post=require("../models/post");

module.exports.home=async (req,res)=>{
    const posts=await Post.find().populate("owner");
    posts.sort((a,b)=>{
        return b.createdDate-a.createdDate;
    })
    res.render("home/show.ejs",{posts});
};

module.exports.createPost=async (req,res,next)=>{
    let url=req.file.path;
    let filename=req.file.filename;
    const newPost=new Post(req.body.post);
    newPost.owner=req.user._id;
    newPost.image={url,filename};
    await newPost.save();
    req.flash("success","Post is created successfully");
    res.redirect("/posts");
}


module.exports.renderHome=(req,res)=>{
    res.render("home/new.ejs");
}

module.exports.renderSinglePost=async(req,res)=>{
    const {id}=req.params;
    const post=await Post.findById(id).populate("owner")
                                        .populate({
                                            path:"reviews",
                                            populate:{
                                                path:"owner",
                                            }
                                        });
    if(!post){
        req.flash("error","Post is not found");
    }
    res.render("home/singlepost.ejs",{post});
    
}

module.exports.deleteSinglePost=async (req,res)=>{
    let {id}=req.params;

    await Post.findByIdAndDelete(id);

    req.flash("success","Post is Deleted Successfully!");
    res.redirect("/posts");
}

module.exports.renderEditPage=async (req,res)=>{
    let {id}=req.params;
    const post=await Post.findById(id);
    res.render("home/editpost.ejs",{post});
}

module.exports.editPost=async (req,res)=>{
    let {id}=req.params;
    const {post}=req.body;
    await Post.findByIdAndUpdate(id,post,{runValidators:true});
    req.flash("success","Post is updated Successfully");
    res.redirect("/posts/"+id);
}

module.exports.listPost=async (req,res)=>{
    let {id}=req.params;
    let {currUrl}=req.body;
    const post=await Post.findById(id);
    if(!post.likedIDs.includes(req.user._id)){
        post.likedIDs.push(req.user._id);
        await post.save();
    }
    res.redirect(currUrl);
}

module.exports.dilikePost=async (req,res)=>{
    let {id}=req.params;
    let {currUrl}=req.body;
    const post=await Post.findById(id);
    if(post.likedIDs.includes(req.user._id)){
        let idx=post.likedIDs.indexOf(req.user._id);
        post.likedIDs.splice(idx,1);
        await post.save();
    }
    res.redirect(currUrl);
}