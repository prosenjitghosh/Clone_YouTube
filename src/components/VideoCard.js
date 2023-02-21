import React from 'react'

export default function VideoCard({info}) {
    const {snippet,statistics,} = info;
    const {thumbnails} = snippet;
  return (
    <div className="m-2 w-72">
        <div >
            <img
            className="rounded-xl" 
            alt='thumbnail' 
            src={thumbnails.medium.url}/>
        </div>
        <div className="px-2 text-ellipsis">
            <div className="font-bold py-2">{snippet.title}</div>
            <div>{snippet.channelTitle}</div>
            <div>{statistics.viewCount} views</div>
        </div>

    </div>
  )
}
