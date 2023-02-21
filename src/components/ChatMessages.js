import React from 'react';
import user from "../utils/user.png";

const ChatMessages = ({name, message}) => {
  return (
    <div className="flex p-1">
        <img alt="user" className='h-6' 
            src={user}
        />
        <p className="px-1 text-gray-400">{name}</p>
        <p className="px-1">{message}</p>
    </div>
  )
}

export default ChatMessages