import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import home from "../utils/home.png"
import subscription from "../utils/subscription.png"
import liked from "../utils/liked.png"
import download from "../utils/download.jpg"
import history from "../utils/history.png"
import videos from "../utils/videos.png"
import library from "../utils/library.png"
import treanding from "../utils/treanding.png"
import music from "../utils/music.png"
import news from "../utils/news.png"
import gaming from "../utils/gaming.png"
import watchletter from "../utils/watchlater.png"
import live from "../utils/live.png"
import youtubeshorts from "../utils/youtubeshorts.png"


export const SideBar = () => {
const isSideMenurOpen = useSelector((store)=>store.app.isSideBarOpen);

  if(!isSideMenurOpen) return null;

  return (
    <div className="shadow-xl border-2 py-4">
        <ul className="space-y-1 py-6 border-b-2">
            <Link to="/"><li className='px-4'><img alt="home" className='h-4 inline px-2 pr-4'src={home}/>Home</li></Link>
            <li className='px-4 py-1'><img alt="youtubeshorts" className='h-4 inline px-2 pr-4'src={youtubeshorts}/>Shorts</li>
            <li className='px-1'><img alt="subscription" className='h-10 inline px-2'src={subscription}/>Subscriptions</li>
            <li className='px-2'><img alt="videos" className='h-8 inline px-2'src={videos}/>Original</li>
            <li className='px-3'><img alt="origins" className='h-6 inline px-2'src={music}/>  Youtube Music</li>
        </ul>
        <ul className="space-y-1 my-8">
            <Link to="/"><li className='px-4'> <img alt="library" className='h-8 inline pr-3'src={library}/>Library</li></Link>
            <li className='px-4 py-1'><img alt="history" className='h-4 inline px-2 pr-4'src={history}/>History</li>
            <li className='px-1'><img alt="subscription" className='h-10 inline pl-2 pr-1'src={subscription}/>Your videos</li>
            <li className='px-2'><img alt="download" className='h-8 inline px-2 pr-3'src={download}/>Download</li>
            <li className='px-3'><img alt="watchletter" className='h-6 inline px-2 pr-3'src={watchletter}/>Watch later</li>
            <li className='px-3 py-1'><img alt="liked" className='h-4 inline px-2 pr-5'src={liked}/>Most Liked</li>
        </ul>
        <ul className="space-y-1 py-6 border border-t-2">
            <Link to="/"><li className='px-2'><img alt="treanding" className='h-8 inline pr-1'src={treanding}/>Trending</li></Link>
            <li className='px-4 py-1'><img alt="music" className='h-4 inline px-2 pr-2'src={music}/>Music</li>
            <li className='px-1'><img alt="gaming" className='h-10 inline px-2'src={gaming}/>Gaming</li>
            <li className='px-2'><img alt="news" className='h-8 inline px-2'src={news}/>news</li>
            <li className='px-3'><img alt="live" className='h-6 inline px-2'src={live}/>live</li>
        </ul>
    </div>
  )
}
