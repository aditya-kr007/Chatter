const mongoose=require('mongoose')

const messageSchema=new mongoose.Schema({
    message:{
        type:String,
        required:true
    },
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        red:"user",
        required:true
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        red:"user",
        required:true
    },

},{timestamps:true})

const Message=mongoose.model("Message",messageSchema)

module.exports=Message