const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const messageSchema=new Schema({
    sender:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    receiver:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    text:{
        type:String,
        required:true,
    },
    messagedDate:{
        type:Date,
        default:Date.now
    }
})

const Message=mongoose.model("Message",messageSchema);
module.exports=Message;