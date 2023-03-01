import React from 'react';
import { SideBar } from './SideBar';
import { Outlet } from 'react-router-dom';
import { Head } from './Head';
 import { useSelector } from 'react-redux';

export const Body= () => {
   const isSideBarOpen = useSelector((store)=>store.app.isSideBarOpen)
  return (
    <div>
        <Head/>
        <div className='flex'>
            <div className={ isSideBarOpen ? "basis-1/6" : "basis-0"}>
                <SideBar/>
            </div>
            <div className="basis-full">
              <Outlet/>
            </div>
            
        </div>
    </div>
  )
}
