const express=require("express");
const app=express();


const ejsMate=require("ejs-mate");
const path=require("path");
const port=8080;
const User=require("./models/user.js");
const methodOverride=require("method-override");
const mongoose=require("mongoose");
const ExpressError = require("./util/ExpressError.js");
const session=require("express-session");
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");

const posts=require("./routes/post.js");
const review=require("./routes/review.js");
const authentication=require("./routes/authentication.js");
const user=require("./routes/user.js");
const allUsers=require("./routes/allusers.js");
const chats=require("./routes/chats.js");

app.engine("ejs",ejsMate);
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"/public")));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));

const dbURL='mongodb://127.0.0.1:27017/tweet';

async function main() {
  await mongoose.connect(dbURL);
}


main()
    .then((res)=>{
        console.log("Connected to database");
    }).catch((err)=>{
        console.log(err);
    });

//middlewares
const sessionOptions={
    secret:"sambatweet",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true,
    },
}

app.use(session(sessionOptions));
app.use(flash()); 

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user;
    res.locals.currUrl=req.originalUrl;
    next();
});



app.get("/",(req,res)=>{
    res.redirect("/posts");
});



//routes

app.use("/posts",posts);
app.use("/review",review);
app.use("/authentication",authentication);
app.use("/user",user);
app.use("/allUsers",allUsers);
app.use("/chats",chats);

app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"page not found"));
})

app.use((err,req,res,next)=>{
    let {status=500,message="some err"}=err;
    res.status(status).render("home/error.ejs",{status,message});
});


app.listen(port,()=>{
    console.log("server is listening on port 8080");
});