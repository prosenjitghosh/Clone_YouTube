import React, { useEffect } from 'react'
import ChatMessages from './ChatMessages'
import { useDispatch,useSelector } from 'react-redux'
import { addMessages } from '../utils/chatSlice'
import store from '../utils/store'
import { randomNameGenerator, randomTextGenrator } from '../utils/helper'

const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store)=>store.chat.messages);
  console.log(messages);

  useEffect(()=>{
    const timer = setInterval(()=>{
      dispatch(addMessages({
        name:randomNameGenerator(),
        message:randomTextGenrator()
      }));
    },500)

    return ()=>{
      clearInterval(timer);
    }
  },[])

  return (
    <div className="border border-gray-900 mx-10 w-96 rounded-2xl  max-h-[500px] overflow-y-scroll flex flex-col-reverse">
      <div className="bg-slate-200  rounded-t-2xl px-10 py-2 h-10">Live chat</div> 
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