import React from 'react';
import { SideBar } from './SideBar';
import { Outlet } from 'react-router-dom';
import { Head } from './Head';

export const Body= () => {
  return (
    <div>
        <Head/>
        <div className='flex'>
            <div className="w-[18rem]">
                <SideBar/>
            </div>
            <Outlet/>
        </div>
    </div>
  )
}
