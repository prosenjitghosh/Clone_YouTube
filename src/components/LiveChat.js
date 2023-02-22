import React, { useEffect, useState } from 'react'
import ChatMessages from './ChatMessages'
import { useDispatch,useSelector } from 'react-redux'
import { addMessages } from '../utils/chatSlice'
import store from '../utils/store'
import { randomNameGenerator, randomTextGenrator } from '../utils/helper'

const LiveChat = () => {
  const [liveMessage,setLiveMessage] = useState();
  const dispatch = useDispatch();
  const messages = useSelector((store)=>store.chat.messages);

  useEffect(()=>{
    const timer = setInterval(()=>{
      dispatch(addMessages({
        name:randomNameGenerator(),
        message:randomTextGenrator()
      }));
    },800)

    return ()=>{
      clearInterval(timer);
    }
  },[])

  return (
    <div className="border border-gray-900 mx-10 w-96 rounded-2xl  max-h-[500px] overflow-y-scroll flex flex-col-reverse">
      <div className="px-2">
        <form onSubmit={(e)=>{
          e.preventDefault();
          dispatch(addMessages({
            name:"Prosenjit",
            message:liveMessage
          }))
          setLiveMessage("");
        }}>
          <input
          className='border border-y border-slate-800 m-2 w-9/12 rounded-2xl'
          placeholder='Say somthing...'
            value={liveMessage}
            onChange={(e)=>{
              setLiveMessage(e.target.value)
            }}
            type="text"></input>
          <button className="px-2 bg-slate-400 rounded-2xl">send</button>
        </form>
      </div>
      <div className="p-2">
        {
          messages.map((message,index)=>{
            return (<ChatMessages key={index}
              name={message.name}
              message={message.message}
            />)
          })
        }

      </div>
       
    </div>
  )
}

export default LiveChat