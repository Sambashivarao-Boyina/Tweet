const express=require("express");
const router=express.Router();
const { saveRedirectUrl}=require("../middleware.js");
const wrapAsync=require("../util/wrapAsync.js");
const passport=require("passport");

const multer  = require('multer')
const {storage}=require("../cloudConfig.js");

const upload = multer({ storage });
const authenticateController=require("../controllers/authentication.js")

//user
router
    .route("/signUp")
    .get(authenticateController.renderSignupPage)
    .post(upload.single('user[profileImage]'),wrapAsync( authenticateController.signup));


router
    .route("/login")
    .get(authenticateController.renderLoginPage)
    .post(saveRedirectUrl ,passport.authenticate("local",{failureRedirect:"/authentication/login",failureFlash:true}),authenticateController.login);

router.get("/logout",authenticateController.logout);
   
module.exports=router;

    