"use client"
import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <main className="container max-w-screen-xl px-6 py-10 mx-auto">
        <main className="items-center lg:flex">
            <main className="w-full lg:w-1/2">
                <main className="lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-6xl">NSCC <span className="text-blue-700 ">KIET</span></h1>
                    <h2 className="mt-3 text-1xl font-semibold text-gray-900 dark:text-white lg:text-4xl">Technical Club Of KIET</h2>
                    <h2 className="mt-3 text-1xl font-semibold text-blue-900 dark:text-white lg:text-4xl">
                        <TypeAnimation
                            sequence={[
                                'Work on Live Projects',
                                1500,
                                'Learn DSA',
                                1500,
                                'Web Development', 
                                1500, 
                                'Android Development', 
                                1500,
                                'Machine Learning',
                                1500,
                                'AR / VR',
                                1500,
                                'UI/UX',
                                
                                
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            
                            />
                            </h2>
                    
                    <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">View Projects</button>
                </main>
            </main>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <Player
                        autoplay
                        controls
                        loop
                        mode="normal"
                        src="https://lottie.host/d64d6a5f-65c7-40f7-8fb8-b3dcbc2ab559/XJUQmtiO0h.json"
                    ></Player>
           </div>
        </main>
    </main>
  )
}

export default Hero
