const express=require('express')
const {logOut,login,signUp}=require('../controllers/route')

const router=express.Router()
router.post('/login',login)
router.post('/signup',signUp)
router.post('/logout',logOut)


module.exports=router