const User = require("../model/user")

const getUsersForSidebar=async(req,res)=>{
    try {
        const loggedInUser=req.user._id
        const filteredUsers= await User.find({_id:{$ne:loggedInUser} }).select("-password") //this simply returns all the user expect the currentUser
        
        res.json(filteredUsers)
    } catch (error) {
        console.log("Error in getUserSideBar:",error)
        res.status(500).json({error:"Internal server error"})
    }
}
module.exports={getUsersForSidebar}