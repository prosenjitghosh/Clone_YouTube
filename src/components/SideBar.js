import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const SideBar = () => {
const isSideMenurOpen = useSelector((store)=>store.app.isSideBarOpen);

  if(!isSideMenurOpen) return null;

  return (
    <div className="shadow-xl border-2 p-6">
        <ul>
            <Link to="/"><li >Home</li></Link>
            <li>Shorts</li>
            <li>Subscriptions</li>
            <li>Original</li>
            <li>Youtube Music</li>
        </ul>
        <ul className='pt-4'>
            <li>Library</li>
            <li>History</li>
            <li>Your videos</li>
            <li>Download</li>
            <li>Watch later</li>
        </ul>
    </div>
  )
}
