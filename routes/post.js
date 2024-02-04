const express=require("express");
const router=express.Router();
const wrapAsync=require("../util/wrapAsync");
const {validatePost, isLoggedIn, isOwnerOfPost}=require("../middleware.js");
const multer  = require('multer')
const {storage}=require("../cloudConfig.js");
const postController=require("../controllers/post.js");
const upload = multer({ storage });

router
    .route("/")
    .get(wrapAsync(postController.home))
    .post(isLoggedIn,upload.single('post[image]'),validatePost,wrapAsync(postController.createPost));
        
router.get("/new",isLoggedIn,postController.renderHome);


router
    .route("/:id")
    .get(wrapAsync(postController.renderSinglePost))
    .delete(isLoggedIn,isOwnerOfPost,wrapAsync(postController.deleteSinglePost));

router
    .route("/edit/:id")
    .get(isLoggedIn,isOwnerOfPost,wrapAsync(postController.renderEditPage))
    .put(isLoggedIn,isOwnerOfPost,validatePost,wrapAsync(postController.editPost));

router.put("/:id/like",isLoggedIn,wrapAsync(postController.listPost));

router.put("/:id/dislike",isLoggedIn,wrapAsync(postController.dilikePost));

module.exports=router;  