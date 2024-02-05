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

    // let newPosts=[];
    // for(let i=0;i<posts.length;i++){
    //     if(i%2==0){
    //         newPosts.push({...posts[i],owner:"65c10e12d29775d53ab8d5cf"});
    //     }else{
    //         newPosts.push({...posts[i],owner:"65c10e75d29775d53ab8d5e1"});
    //     }
    // }

    await Post.insertMany(newPosts);
    console.log("DataBase is reinitialized");
}

initDB();