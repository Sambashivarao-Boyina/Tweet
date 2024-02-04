const express =require("express");
const router=express.Router();

const { isLoggedIn, isOwner, validateMessage } = require("../middleware");
const wrapAsync=require("../util/wrapAsync");

const chatsController=require("../controllers/chats");

router.get("/:id/myChats",isLoggedIn,isOwner,wrapAsync(chatsController.getChats));

router.get("/:id/:recievID/messages",isLoggedIn,isOwner,wrapAsync(chatsController.getMessage));

router.post("/:id/:receivID/message",isLoggedIn,isOwner,validateMessage,wrapAsync(chatsController.sendMessage));

module.exports=router;