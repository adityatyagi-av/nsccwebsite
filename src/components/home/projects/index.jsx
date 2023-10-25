"use client"
import React, { useState } from "react"; // Import React
import { topaimlprojects,topandroidprojects,toparvrprojects,topuiuxprojects,topwebprojects } from "./data";

import CardMapping2 from "@/components/cardMap/index2";

const Projects = () => {
  const [tab, setTab] = useState(4)
  function changeProjectTab(e){
    setTab(e)

  }

    return (
      <section className="bg-white max-w-screen-xl mx-auto">
    <div className="container px-6 py-8 mx-auto">
    <h1 className="text-2xl text-center font-semibold text-gray-800 mx-auto lg:text-4xl ">Projects
    <div className="flex justify-center mx-auto mt-6">
                <span className="inline-block w-44 h-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-6 h-1 mx-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-2 h-1 bg-blue-500 rounded-full"></span>
            </div></h1>

        <div className="mt-8 xl:mt-16 md:flex gap-2 lg:-mx-12">
            <div className="lg:mx-12">

                <div className="mt-4 hidden md:block space-y-4 lg:mt-8">
                <button onClick={()=>changeProjectTab(1)} className={`block min-w-[15rem] px-5 py-2   text-sm tracking-wider  uppercase transition-colors duration-300 transform ${tab==1?'bg-blue-500 text-white':'text-gray-600 border-2 border-gray-300 border-solid'} hover:text-white rounded-lg lg:w-auto hover:border-blue-500 hover:bg-blue-500 focus:outline-none focus:bg-blue-500`}>UI/UX</button>
                    <button onClick={()=>changeProjectTab(2)} className={`block min-w-[15rem] px-5 py-2   text-sm tracking-wider  uppercase transition-colors duration-300 transform ${tab==2?'bg-blue-500 text-white':'text-gray-600 border-2 border-gray-300 border-solid'} hover:text-white rounded-lg lg:w-auto hover:border-blue-500 hover:bg-blue-500 focus:outline-none focus:bg-blue-500`}>WEB DEVELOPMENT</button>
                    <button onClick={()=>changeProjectTab(3)} className={`block min-w-[15rem] px-5 py-2   text-sm tracking-wider  uppercase transition-colors duration-300 transform ${tab==3?'bg-blue-500 text-white':'text-gray-600 border-2 border-gray-300 border-solid'} hover:text-white rounded-lg lg:w-auto hover:border-blue-500 hover:bg-blue-500 focus:outline-none focus:bg-blue-500`}>ANDROID DEVELOPMENT</button>
                    <button onClick={()=>changeProjectTab(4)} className={`block min-w-[15rem] px-5 py-2   text-sm tracking-wider  uppercase transition-colors duration-300 transform ${tab==4?'bg-blue-500 text-white':'text-gray-600 border-2 border-gray-300 border-solid'} hover:text-white rounded-lg lg:w-auto hover:border-blue-500 hover:bg-blue-500 focus:outline-none focus:bg-blue-500`}>AI / ML</button>
                    <button onClick={()=>changeProjectTab(5)} className={`block min-w-[15rem] px-5 py-2   text-sm tracking-wider  uppercase transition-colors duration-300 transform ${tab==5?'bg-blue-500 text-white':'text-gray-600 border-2 border-gray-300 border-solid'} hover:text-white rounded-lg lg:w-auto hover:border-blue-500 hover:bg-blue-500 focus:outline-none focus:bg-blue-500`}>AR / VR</button>
                </div>
            </div>

            <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
                

                    {(tab==1)&&(
                        <CardMapping2  data={topuiuxprojects}/>
                    )}
                    {(tab==2)&&(
                        <CardMapping2 data={topwebprojects}/>
                    )}
                    {(tab==3)&&(
                        <CardMapping2 data={topandroidprojects}/>
                    )}
                    {(tab==4)&&(
                        <CardMapping2 data={topaimlprojects}/>
                    )}
                    {(tab==5)&&(
                        <CardMapping2 data={toparvrprojects}/>
                    )}

                    
                    
                
            </div>
        </div>
    </div>
</section>
    
  )
}

export default Projects
