"use client"
import FetchVideo from '@/components/fetchVideo';
import React, { useEffect, useState } from 'react'

const page = ({params}) => {
    
const [data, setData] = useState();
    const getVideo=async()=>{
        const result=await FetchVideo(params.id); 
        setData(result)
        
    }
    useEffect( () => {
        getVideo();
      }, []); 
  
  return (
    <div className='max-w-screen-xl mx-auto my-10'>
        <h1>

        </h1>
        <iframe id="ytplayer" className='w-full h-[200px] md:h-[400px] lg:h-[600px]' type="text/html"  height="360"
  src={`https://www.youtube.com/embed/${params.id}?autoplay=1`}
  frameBorder="0"></iframe>

    </div>
  )
}

export default page
