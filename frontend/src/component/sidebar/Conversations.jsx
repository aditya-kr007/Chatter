import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../Hooks/useGetConversation'
import { getRandomEmoji } from '../../utils/emojis'

const Conversations = () => {
    const {loading,conversations}=useGetConversation()
return (
    <div className='py-2 flex-col overflow-auto'>
        {conversations.map((conversation,idx)=>{
            return <Conversation key={conversation._id} conversation={conversation} lastIdx={idx===conversations.length-1} emoji={getRandomEmoji()} />
        })}
    {loading?<span className="loading loading-dots loading-lg"></span>:null}
    </div>
)
}

export default Conversations