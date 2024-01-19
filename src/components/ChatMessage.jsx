import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex gap-2 items-center bg-gray-50 p-2 mt-3 rounded-md'>
        <button className="p-1 border-2 border-black rounded-3xl">
          <img
            src="https://cdn-icons-png.flaticon.com/512/709/709722.png"
            alt="user icon"
            className="h-3"
          />
        </button>

        <p className="font-bold">{name}</p>
        <p>{message}</p>
    </div>
  )
}

export default ChatMessage