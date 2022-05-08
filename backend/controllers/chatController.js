const asynchandler = require("express-async-handler");
const Chat = require("../models/chatModel")



const accesschat =  asynchandler(async (req,res)=>{
      
    const {userId} = req.body 
    
    if(!userId){
        console.log("UserId param not there")
       return res.status(401).json({"error":"error"})
    }
     

    var chat = Chat.find({
        isGroupChat:false,
        $and:[
              {users:{}}  
        ]
    })

})