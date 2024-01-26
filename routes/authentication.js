const express=require("express");
const router=express.Router();
const { saveRedirectUrl}=require("../middleware.js");
const wrapAsync=require("../util/wrapAsync.js");
const passport=require("passport");
const User=require("../models/user.js");
const multer  = require('multer')
const {storage}=require("../cloudConfig.js");

const upload = multer({ storage });


//user
router.get("/signUp",(req,res)=>{
        res.render("authentication/signup.ejs");
    })
    .post("/signUp",upload.single('user[profileImage]'),wrapAsync( async (req,res,next)=>{
        try{
            let {user,password}=req.body;
            const newUser=new User(user);
            if(req.file){
                let url=req.file.path;
                let filename=req.file.filename;
                newUser.profileImage={url,filename};
            }
            const registerUser= await User.register(newUser,password);
            req.login(registerUser,(err)=>{
                if(err){
                    return next(err);
                }
                req.flash("success","sign-up is successfull,welcome to Tweet");
                res.redirect("/posts");
            });
            
        }catch(err){
            req.flash("error",err.message);
            res.redirect("/authentication/signUp");
        }
    }));


router.get("/login",(req,res)=>{
        res.render("authentication/login.ejs");
    })
    .post("/login",saveRedirectUrl ,passport.authenticate("local",{failureRedirect:"/authentication/login",failureFlash:true}),async (req,res)=>{
        req.flash("success","Welcome back to Tweet");
        if(!res.locals.redirectUrl){
            return res.redirect("/posts");
        }
        res.redirect(res.locals.redirectUrl);
    });

router.get("/logout",(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","Logged out successfully");
        res.redirect("/posts");
    });
    
});
   
module.exports=router;

    