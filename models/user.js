const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose");

const userSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    gender:{
        type:String,
        enum:["Male","Female","Others"]
    },
    profileImage:{
        url:String,
        filename:String
    },
    following:[
        {
            type:Schema.Types.ObjectId,
            ref:"User",
        }
    ],
    followers:[
        {
            type:Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    chats:[
        {
            type:Schema.Types.ObjectId,
            ref:"User"
        }
    ]
});

userSchema.plugin(passportLocalMongoose);

const User=mongoose.model("User",userSchema);

module.exports=User;