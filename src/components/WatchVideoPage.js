import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {hideSidebar} from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';


export default function WatchVideoPage() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const video = "https://www.youtube.com/embed/"+videoId;

  useEffect(()=>{
    dispatch(hideSidebar());
  },[])

  return (
    <div className="mx-4 my-6 md:mx-16 ">
      <div className="flex flex-col sm:flex-row">
        <div className="basis-4/6">
          <div className="aspect-video">
            <iframe 
              className="h-full w-full"
              src={video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write;
              encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen></iframe>
            </div>
        </div>

        <div className="basis-2/6">
          <LiveChat/>
        </div>
      </div>

      <div className="py-5">
        <CommentsContainer/>
      </div>
    </div>
  )
}
