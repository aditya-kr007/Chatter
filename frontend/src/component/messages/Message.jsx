import React from 'react'
import { useAuthContext } from "../../../context/AuthContext"
import useConversation from '../../zustand/useConversation'
import { extractTime } from '../../utils/extractTime'

function Message({message}) {
    const {authUser,setAuthUser}=useAuthContext()
    const {selectedConversation}=useConversation()
    const fromMe= message.senderId===authUser._id
    const chatClassName=fromMe?"chat-end":"chat-start"
    const formattedTime=extractTime(message.createdAt)
    const profilePic=fromMe?authUser.profilePic:selectedConversation?.profilePic
    const bubbleBg=fromMe?"bg-pink-500":""
    const shakeClass=message.shouldShake?"shake":""
    
    return (
        <>
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src={profilePic} />
                </div>
            </div>
            

            <div className={`chat-bubble bg-blue text-white ${bubbleBg} ${shakeClass}`}>{message.message}</div>
            <div className="text-xs opacity-50">{formattedTime}</div>

        </div>
        </>
        
    )
}

export default Message