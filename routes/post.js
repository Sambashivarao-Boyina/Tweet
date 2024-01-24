const express=require("express");
const router=express.Router();
const wrapAsync=require("../util/wrapAsync");
const Post=require("../models/post");
const {validatePost, isLoggedIn, isOwnerOfPost}=require("../middleware.js");


router.get("/",wrapAsync(
            async (req,res)=>{
                const posts=await Post.find().populate("owner");
                posts.sort((a,b)=>{
                    return b.createdDate-a.createdDate;
                })
                res.render("home/show.ejs",{posts});
            }
        ))
        .post("/",isLoggedIn,validatePost,async (req,res,next)=>{
            const newPost=req.body.post;
            const createPost=new Post(newPost);
            createPost.owner=req.user._id;
            await createPost.save();
            req.flash("success","New Post is Created!");
            res.redirect("/posts");
        });
        
router.get("/new",isLoggedIn,(req,res)=>{
            res.render("home/new.ejs");
        });


router.get("/:id",async(req,res)=>{
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
            
        })
        .delete("/:id",isLoggedIn,isOwnerOfPost,async (req,res)=>{
            let {id}=req.params;
        
            await Post.findByIdAndDelete(id);
        
            req.flash("success","Post is Deleted Successfully!");
            res.redirect("/posts");
        });

router.get("/edit/:id",isLoggedIn,isOwnerOfPost,async (req,res)=>{
            let {id}=req.params;
            const post=await Post.findById(id);
            res.render("home/editpost.ejs",{post});
        })
        .put("/edit/:id",isLoggedIn,isOwnerOfPost,validatePost,async (req,res)=>{
            let {id}=req.params;
            const {post}=req.body;
            await Post.findByIdAndUpdate(id,post,{runValidators:true});
            req.flash("success","Post is updated Successfully");
            res.redirect("/posts/"+id);
        });

router.put("/:id/like",isLoggedIn,async (req,res)=>{
            let {id}=req.params;
            let {currUrl}=req.body;
            const post=await Post.findById(id);
            if(!post.likedIDs.includes(req.user._id)){
                post.likedIDs.push(req.user._id);
                await post.save();
            }
            res.redirect(currUrl);
        });

router.put("/:id/dislike",isLoggedIn,async (req,res)=>{
            let {id}=req.params;
            let {currUrl}=req.body;
            const post=await Post.findById(id);
            if(post.likedIDs.includes(req.user._id)){
                let idx=post.likedIDs.indexOf(req.user._id);
                post.likedIDs.splice(idx,1);
                await post.save();
            }
            res.redirect(currUrl);
        });

module.exports=router;  