const { model } = require("mongoose");
const User=require("../models/user");
const Message=require("../models/message");

module.exports.getChats=async (req,res)=>{
    let {id}=req.params;
    
    const user=await User.findById(id,{chats:true}).populate("chats");
    let chats=user.chats;
    res.render("user/userChats.ejs",{chats});
}

module.exports.getMessage=async (req,res)=>{
    let {id,recievID}=req.params
    let sendID=id;
    const receiver=await User.findById(recievID);

    let messagesOfSender=await Message.find({$and:[{sender:sendID},{receiver:recievID}]});
    let messagesOfReciver=await Message.find({$and:[{sender:recievID},{receiver:sendID}]});

    let messages=[...messagesOfSender,...messagesOfReciver];
    
    messages.sort((a,b)=>{
        return a.messagedDate-b.messagedDate;
    })

    res.render("user/chat.ejs",{messages,receiver});

}

module.exports.sendMessage=async (req,res)=>{
    let {id,receivID}=req.params;
    let senderID=id;
    let {message}=req.body;
    
    const newMessage=new Message(message);
    newMessage.sender=senderID;
    newMessage.receiver=receivID;

    await newMessage.save();  
    res.redirect("/chats/"+senderID+"/"+receivID+"/messages");
}