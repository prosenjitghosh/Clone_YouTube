import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {hideSidebar} from './utils/appSlice';
import CommentsContainer from './components/CommentsContainer';


export default function WatchVideoPage() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const video = "https://www.youtube.com/embed/"+videoId;

  useEffect(()=>{
    dispatch(hideSidebar());
  },[])

  return (
    <div className="p-2">
      <iframe 
      width="1200" 
      height="600" 
      src={video}
      title="YouTube video player"
      frameborder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      <div className="py-5">
        <CommentsContainer/>
      </div>
    </div>
  )
}
