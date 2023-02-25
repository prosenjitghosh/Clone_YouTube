import React from 'react'

export const ButtonList = () => {
  const buttons = ["All","Songs","Movie","Shorts","India","Cricket","Football","Dev Ops","Shorts","Comedy","Concert","Badminton","Stand Up","Web Series","Robotics"]
  

  return (
    <div className='flex flex-row h-12 truncate items-center w-[70vw]'>
        {buttons.map((button,index)=>{
          return <span  key={index} className="border-2 p-1 m-2 rounded-lg">{button}</span>
        })
    }
    </div>
  )
}
