import React from 'react'

export const ButtonList = () => {
  const buttons = ["All","Songs","Movie","Shorts","India","Cricket","Football","Dev Ops","Shorts","Comedy","Concert","Badminton","Stand Up","Web Series","Robotics"]
  

  return (
    <div className='flex flex-row'>
        {buttons.map((button,index)=>{
          return <button className="border-2 p-1 m-2 rounded-lg">{button}</button>
        })
    }
    </div>
  )
}
