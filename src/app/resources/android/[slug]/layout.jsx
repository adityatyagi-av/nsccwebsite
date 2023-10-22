"use client"
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import {Tabs, Tab} from "@nextui-org/react";

export default function Page({params}) {
    
    const router = useRouter();
    const pathName= usePathname();
    const pathParts = pathName.split('/');
    console.log(pathParts)
    const secondlastPart=pathParts[pathParts.length - 2];
    const lastPart = pathParts[pathParts.length - 1];
    const [selected, setSelected] = React.useState(lastPart);
    
    const handleTabChange =(newTab)=>{
      router.push(`${(secondlastPart==params.slug)?`${newTab}`:`${params.slug}/${newTab}`}`);
      setSelected(newTab);
      
    }
  return (
    <div className="flex mx-auto w-full mt-5 flex-col">
      <Tabs 
        aria-label="Options"
        className="mx-auto"        
        selectedKey={selected}
        onSelectionChange={handleTabChange}
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
