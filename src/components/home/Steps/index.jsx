"use client"
import { Player } from '@lottiefiles/react-lottie-player';

export const Step = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="f51618fb-0edb-4bcb-b35a-ffc770941286"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#f51618fb-0edb-4bcb-b35a-ffc770941286)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">JOURNEY AT  <span className='text-blue-700'>NSCC KIET</span></span>
            </span>{' '}
            
          </h2>
         
        </div>
        <div className="grid gap-3 md:gap-8 row-gap-0 lg:grid-cols-3">
          <div className="relative text-center">
          <div className="flex items-center justify-center w-60 h-60 mx-auto mb-4 ">
            <Player
                        autoplay
                        controls
                        loop
                        mode="normal"
                        src="https://lottie.host/748ab283-04bb-40b1-9739-c76a85ac04be/ISDwFguRF3.json"
                    ></Player>
            </div>
            <h6 className="mb-2 text-2xl font-extrabold">Learn</h6>
            <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
              Learn tech stack of your domain along with DSA and get the best resources.
            </p>
            
            <div className=" top-32 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
              <svg
                className="w-8  text-gray-700 transform rotate-90 lg:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
          </div>
          <div className="relative text-center">
          <div className="flex items-center justify-center w-60 h-60 mx-auto mb-4 ">
            <Player
                        autoplay
                        controls
                        loop
                        mode="normal"
                        src="https://lottie.host/0e864b5b-1e0c-4454-8c2f-e856437e8b70/o5scXjqfAm.json"
                    ></Player>
            </div>
            <h6 className="mb-2 text-2xl font-extrabold">Develop</h6>
            <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
              Develop applications by applying the knowledge taught to you.
            </p>
            
            <div className="top-32 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
              <svg
                className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
          </div>
          <div className="relative text-center">
            <div className="flex items-center justify-center w-60 h-60 mx-auto mb-4 ">
            <Player
                        autoplay
                        controls
                        loop
                        mode="normal"
                        src="https://lottie.host/08039b28-34d9-4c94-a086-44d7606c7b31/ekOrvgWE0L.json"
                    ></Player>
            </div>
            <h6 className="mb-2 text-2xl font-extrabold">Project</h6>
            <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
              Work on live projects and showcase your portfolio to the world.
            </p>
            
          </div>
        </div>
      </div>
    );
  };