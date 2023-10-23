import Link from 'next/link'
import React from 'react'

const VideoCard = ({topic,imageLink,title,desc,videoId}) => {
  return (
    <>
      
<div className="max-w-sm min-h-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link href={`${topic}/${videoId}`}>
        <img className="rounded-t-lg" src={imageLink} alt="" />
    </Link>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
      
    </div>
</div>

    </>
  )
}

export default VideoCard
