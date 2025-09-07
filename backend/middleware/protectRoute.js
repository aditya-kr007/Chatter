const jwt = require("jsonwebtoken")
const User = require("../model/user")
const cookieParser=require('cookie-parser')
const express=require("express")
const app=express()
app.use(cookieParser())
const protectRoute=async(req,res,next)=>{
    try {
        const token=req.cookies.token
        if(!token){
            return res.status(401).json({error:"No token, authorization denied"})
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)
        if(!decoded){
            return res.status(401).json({error:"Token is not valid"})
        }
        const user= await User.findById(decoded.userId).select("-password")
        if(!user){
            return res.status(401).json({error:"User not found"})
        }
        req.user=user
        next()
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Internal server error"})
    }
}

module.exports={protectRoute}