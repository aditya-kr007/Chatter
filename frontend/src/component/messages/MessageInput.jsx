import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../Hooks/useSendMessage';

const MessageInput = () => {
    const [message, setMessage] = useState("")
    const { loading, sendMessage } = useSendMessage()
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!message) return;
        await sendMessage(message)
        setMessage("")
    }
    return (
        <form onSubmit={handleSubmit} className='px-4 my-4'>
            <div className='w-full relative'>
                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}
                    className='border va text-md rounded-3xl block w-full p-2.5 bg-pink-500 border-pink-400 text-white placeholder:"Send a message'
                />
                <button type='submit' className='absolute inset-y-0 end-0 items-center pe-3'>
                    {loading ? <span className="loading loading-dots loading-lg"></span> : <IoSend className='text-white w-5 h-5' />}
                </button>
            </div>
        </form>
    )
}

export default MessageInput