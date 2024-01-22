const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Review=require("./review.js");
const User = require("./user.js");

const postSchema=new Schema({
    title:{
        type:String,
        trim:true,
        required:true,
    },
    description:{
        type:String,
        required:true,
        trim:true,
        max:200,
    },
    likedIDs:[
        {
            type:Schema.Types.ObjectId,
            ref:"User"
        }
    ],        
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review",
        }
    ],
    createdDate:{
        type:Date,
        default:Date.now
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    }
});

postSchema.post("findOneAndDelete",async(post)=>{
    if(post){
        await Review.deleteMany({_id:{$in:post.reviews}});
    }
});

const Post=mongoose.model("Post",postSchema);

module.exports =Post;