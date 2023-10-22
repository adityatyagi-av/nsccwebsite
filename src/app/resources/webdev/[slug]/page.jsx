"use client"
import React from "react"
import {useEffect,useState} from 'react'
import axios from 'axios'
import {Tabs, Tab} from "@nextui-org/react";
import PlayListItems from "@/components/playlistData";

export default function Page({params}) {
  const [videos, setVideos] = useState('')
  console.log(params.slug)
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
    console.log(videos)
   
  return (
    <div className="flex mx-auto w-full mt-5 flex-col">
      <Tabs 
        aria-label="Options"
        className="mx-auto"        
        selectedKey={React.key}
        size="lg"
        variant="light"
        
        
        >
        <Tab key="videos" title="VIDEOS">
          
             
        </Tab>
        <Tab key="docs" title="DOCS">
          
        </Tab>
        
      </Tabs>
    </div>  
  );
}
