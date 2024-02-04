const express=require("express");
const router=express.Router();

const { isLoggedIn, isOwner } = require("../middleware");

const multer  = require('multer')
const {storage}=require("../cloudConfig.js");
const upload = multer({ storage });
const wrapAsync=require("../util/wrapAsync");
const userController=require("../controllers/user.js");


router.get("/:id",wrapAsync(userController.renderUserProfilePage));
        
router.put("/:id/follow",isLoggedIn,wrapAsync(userController.follow));

router.put("/:id/unfollow",isLoggedIn,wrapAsync(userController.unfollow));


router.get("/:id/myfollowingsPosts",isLoggedIn,wrapAsync(userController.myFollowingPostPage));

router.get("/:id/myFollowing",wrapAsync(userController.myFollowing));

router.get("/:id/myFollowers",wrapAsync(userController.myFollowers));

router.put("/:id/startchat",isLoggedIn, wrapAsync(userController.startChat));


router.put("/:id/changeProfile",isLoggedIn,isOwner,upload.single('profileImage'),wrapAsync(userController.changeProfile));

router.put("/:id/deleteProfile",isLoggedIn,isOwner,wrapAsync(userController.deleteProfile));



module.exports=router;