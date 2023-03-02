import React from 'react'

export const ButtonList = () => {
  const buttons = ["All","Songs","Movie","Shorts","India","Cricket","Football","CI/CD","Shorts","Comedy","Concert","Badminton","Dance","Series","Robotics","AI","Hocky","Car,","Bikes","Games"]
  

  return (
    <div className='flex flex-row space-x-1.5 h-12 overflow-x-auto items-center w-[70vw] [&::-webkit-scrollbar]:hidden'>
        {buttons.map((button,index)=>{
          return <span  key={index} className="border-2 p-1 rounded-lg">{button}</span>
        })
    }
    </div>
  )
}
