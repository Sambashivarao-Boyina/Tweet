const User=require("../models/user");

module.exports.renderSignupPage=(req,res)=>{
    res.render("authentication/signup.ejs");
}

module.exports.signup=async (req,res,next)=>{
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
            return res.redirect("/posts");
        });
        
    }catch(err){
        req.flash("error",err.message);
        res.redirect("/authentication/signUp");
    }
}

module.exports.renderLoginPage=(req,res)=>{
    res.render("authentication/login.ejs");
}

module.exports.login=async (req,res)=>{
    req.flash("success","Welcome back to Tweet");
    res.redirect("/posts");
    
}

module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","Logged out successfully");
        res.redirect("/posts");
    });
    
}