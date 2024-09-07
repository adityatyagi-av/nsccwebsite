import PlayerAnimation from "@/components/player";
import Head from "next/head";

const page = () => {
  const Activities=[
    {
      id:1,
      details:'DSA guidance including regular bootcamps.',
    },
    {
      id:2,
      details:'Sessions about must-knows for an engineer.',
    },
    {
      id:3,
      details:'Collaboration with other colleges which are a part of NSCC community.',
    },
    {
      id:4,
      details:'Classes twice a week (one day for competitive programming and one day for discussions and guidance).',
    },
    {
      id:5,
      details:'Extended sessions for various tech domains.',
    },
    {
      id:6,
      details:'Free courses on NS Launchpad.',
    }
  ]
  return (
    <>
    
    <title>About NSCC KIET | Technical Club Of KIET</title>
    

    
    <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              About {' '}
              <br className="hidden md:block" />
              Newton School Coding Club
              <span className="inline-block text-deep-purple-accent-400">
              
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            Founded by Nishant Chandra and Siddharth Maheshwari in 2019, Newton School is an ed-tech platform that is building a futuristic online university to provide a highly immersive and interactive learning path to millions of students and enable them to tap into new-age tech opportunities.
            </p>
          </div>
          <div>
            
          </div>
        </div>
        
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="https://www.kiet.edu/uploads/media/club_gallery_image/702479.jpg"
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="https://www.kiet.edu/uploads/media/club_gallery_image/8659117.jpg"
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="https://www.kiet.edu/uploads/media/club_gallery_image/4000202.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
        
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
           
            <span className="relative">Activities by NSCC KIET</span>
          </span>{' '}
          
        </h2>
        
      </div>
      <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
      
    
        {Activities.map((item)=>{
          return(
            <div key={item.id} className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <h6 className="mb-2 font-semibold leading-5">{item.details}</h6>
          </div>
          )
           
          })
        } 
      </div>
      
    </div>
    <div className=" py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
          <div className="flex flex-col max-w-screen-xl overflow-hidden bg-white  rounded  lg:flex-row-reverse sm:mx-auto">
            <div className="relative lg:w-1/2">
              <PlayerAnimation link="https://lottie.host/710c4fdc-c585-4e44-989b-90177c87eb89/r7IaXOc2SK.json"/>
              
            </div>
            <div className="flex flex-col justify-center ml-2 py-8 bg-white lg:p-20 mx-auto lg:w-1/2">
              
              <h5 className="mb-3 text-3xl mx-auto font-extrabold leading-none sm:text-4xl">
               OBJECTIVE
              </h5>
              <p className="mb-5 text-gray-800 mx-auto tracking-wider">
              The club aims to train engineers from all branches to work on different aspects of their technical as well as soft skills to develop a wider skill set. We further aim to encourage students to work towards project-based learning while developing their consistency in programming to make them industry ready.
                
              </p>
             
              
            </div>
          </div>
        </div>
    
        <div className="  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  ">
          <div className="flex flex-col max-w-screen-xl overflow-hidden bg-white  rounded  lg:flex-row sm:mx-auto">
            <div className="relative lg:w-1/2">
              <PlayerAnimation link="https://lottie.host/d5bc1370-8ab0-4ef5-bf3a-959ecc822c26/m6AZI6yeP2.json"/>
              
            </div>
            <div className="flex flex-col justify-center py-8 bg-white lg:p-20  lg:w-1/2">
              
              
              <p className="mb-5 text-gray-800 text-xl ml-2 tracking-wide">
                 Working on establishing a system of <span className="font-bold">technical</span>  as well as<span className="font-bold"> competitive</span>  practices in the college to set up a healthy coding environment for the students.
              </p>
             
              
            </div>
          </div>
        </div>
     
   
  
     </>
  );
};
export default page