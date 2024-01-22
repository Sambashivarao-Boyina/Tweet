const mongoose=require("mongoose");
const Post=require("../models/post");
const Review=require("../models/review");
const User=require("../models/user");
const {posts}=require("../init/data");

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

const initDB = async ()=>{
    await Post.deleteMany({});
    await Review.deleteMany({});
    newPosts=posts.map((obj)=>({...obj,owner:"65abadffcfd234282a783e3c"}));
    await Post.insertMany(newPosts);
    console.log("DataBase is reinitialized");
}

initDB();