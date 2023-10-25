"use client"
import React from "react"
import {useEffect,useState} from 'react'

import {Tabs, Tab} from "@nextui-org/react";
import PlayListItems from "@/components/playlistData";
import VideoCard from "@/components/videoCard";

export default function Page({params}) {
  const [videos, setVideos] = useState()
 
  const setData=async ()=>{
    let playListID='';
  switch (params.slug) {
    case 'html':
      playListID='PLu71SKxNbfoDBNF5s-WH6aLbthSEIMhMI'
      break; 
    case 'css':
      playListID='PLhzIaPMgkbxBk9-drEC0MBPqEOXpVlwY4'
      break;
    case 'js':
      playListID='PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37'
      break;
    case 'react':
      playListID='PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige'
    default:
      break;
  }
  const result= await PlayListItems(playListID)
  setVideos(result)
  }
useEffect( () => {
  setData();
}, []);
    
   
  return (
    <div className="flex mx-auto w-full mt-5 flex-col">
      <title>Wev Development Resources NSCC KIET | Technical Club Of KIET</title>
      <Tabs 
        aria-label="Options"
        className="mx-auto"        
        selectedKey={React.key}
        size="lg"
        variant="light"
        >
        <Tab key="videos" title="VIDEOS">
        <div className="grid gap-10 max-w-screen-xl mx-auto sm:grid-cols-2 lg:grid-cols-4">
         
          {videos?.map((video)=>{
          
            
            return(
              <VideoCard key={video.id} 
              topic={params.slug}
              imageLink={video.snippet.thumbnails.high.url}
              videoId={video.snippet.resourceId.videoId}
              title={video.snippet.title}
              desc={video.snippet.channelTitle}
              />
            )
          })}
          </div>   
        </Tab>
        <Tab key="docs" title="DOCS">
        <h1>randoom</h1>
        </Tab>
        
      </Tabs>
    </div>  
  );
}
