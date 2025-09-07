const express=require('express')
const {sentMessage,getMessages}=require('../controllers/message')
const { protectRoute } = require('../middleware/protectRoute')
const router=express.Router()



//protectRoute is a middleware which checks if the user is logged in or not and fetch the userId
router.get('/:id',protectRoute, getMessages)
router.post('/sent/:id',protectRoute, sentMessage)
module.exports=router