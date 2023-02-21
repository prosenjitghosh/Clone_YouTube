import React from 'react';
import { SideBar } from './SideBar';
import { Outlet } from 'react-router-dom';
import { Head } from './Head';

export const Body= () => {
  return (
    <div>
        <Head/>
        <div className='flex'>
            <div className="basis-6">
                <SideBar/>
            </div>
            <Outlet/>
        </div>
    </div>
  )
}
