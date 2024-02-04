const express=require("express");
const router=express.Router();

const wrapAsync=require("../util/wrapAsync");
const allusersControllers=require("../controllers/allusers");


router.get("/",wrapAsync(allusersControllers.usersPage));

router.get("/searchUser",wrapAsync(allusersControllers.searchUser));

module.exports=router;