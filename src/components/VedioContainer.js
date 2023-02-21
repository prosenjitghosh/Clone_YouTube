import React, { useEffect, useState } from 'react';
import {Youtube_Popular_Video_Url} from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showSidebar } from '../utils/appSlice';

export const VideoContainer = () => {
    const [videos,setVideos] = useState([]);
    const dispatch = useDispatch();

    const getAllVideos = async() =>{
        const data = await fetch(Youtube_Popular_Video_Url);
        const json = await data.json();
        setVideos(json.items);
    }

    useEffect(()=>{
        dispatch(showSidebar());
        getAllVideos();
    },[]);

  return (
    <div className="flex flex-wrap">
         {videos.map((video) => (
          <Link to={"/watch?v="+video.id}>
            <VideoCard key={video.id} info={video} />
          </Link>
          ))}
        </div>
  )
}
