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
    case 'beginner':
      playListID='PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU'
      break; 
    case 'array':
      playListID='PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB'
      break;
    case 'linkedlist':
      playListID='PLKZaSt2df1gz775Mz-2gLpY9sld5wH8We'
      break;
    case 'stack':
      playListID='PL_z_8CaSLPWdeOezg68SKkeLN4-T_jNHd'
      break;
    case 'stackandqueue':
      playListID='PLzjZaW71kMwRTtDWYVPvkJypUpKWbuT7_'
      break;
    case 'tree':
      playListID='PLkjdNRgDmcc0Pom5erUBU4ZayeU9AyRRu'
      break;  
    case 'graph':
      playListID='PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn'
      break;
    case 'recursion':
        playListID='PL_z_8CaSLPWeT1ffjiImo0sYTcnLzo-wY'
        break;
    case 'slidingwindow':
      playListID='PLw3E7GGpk4-BeiU9991UdBagSq8UlJPFs'
      break;
    case 'stl':
      playListID='PLauivoElc3gh3RCiQA82MDI-gJfXQQVnn'
      break;
    case 'dynamicprogramming':
      playListID='PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY'
      break;
    default:
      break;
  }
  const result= await PlayListItems(playListID)
  setVideos(result)
  }
useEffect( () => {
  setData();
}, []);
    
   const titles=params.slug
  return (
    
    <div className="flex mx-auto w-full mt-5 flex-col">
      <title>DSA Resources NSCC KIET | Technical Club Of KIET</title>
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
