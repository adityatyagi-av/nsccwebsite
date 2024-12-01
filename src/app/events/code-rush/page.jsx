"use client"
// import {CircularProgress,Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
// import { createClient } from '@supabase/supabase-js';
// import {useState} from 'react'
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import Input from '@/components/input';
// import InputRadio from '@/components/inputRadio';
// import InputSelect from '@/components/inputSelect';
// import { useRouter } from "next/navigation";
// const page = () => {
//   const router=useRouter();
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const {isOpen, onOpen, onOpenChange} = useDisclosure();
// const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY );
//     const validationSchema = Yup.object({
//         name: Yup.string()
//         .max(25, 'Must be 25 characters or less')
//         .required('Required'),
        
//       email: Yup.string().email('Invalid email address').required('Required'),
//       id: Yup.string()
//         .max(19, 'Must be 19 characters or less')
//         .required('Required'),
//         whatsappNumber: Yup.string()
//         .matches(/^[0-9]{10}$/, '10 digit mobile number should be entered')
//         .required('Required'),
//           gender: Yup.string().required('Required'),
//           branch: Yup.string().required('Required'),  
//           residence: Yup.string().required('Required'),
//           laptop: Yup.string().required('Required'),  
         
         
//       });
//       const formik = useFormik({
//         initialValues: {
//           name: '',
//           whatsappNumber:'',
//           id:'',
//           email: '',
//           gender:'',
//           branch:'',
//           residence:'',
//           laptop:'',
          
//         },
//         validationSchema: validationSchema,
//         onSubmit: async (values) => {
//           onOpen();
//           try {
            
//             const { data, error } = await supabase
//               .from('bootcampregistration') 
//               .insert([
//                 {
//                   name: values.name,
//                   email: values.email,
//                   id: values.id,
//                   whatsappNumber: values.whatsappNumber,
//                   gender: values.gender,
//                   branch: values.branch,
//                   residence: values.residence,
//                   laptop:values.laptop,
//                 },
//               ]);
        
//             if (error) {
//               console.error('Error inserting data:', error);
//             } else {
//               console.log('Data inserted successfully:', data);
//               // Redirect to a success page or perform any other action
//               setFormSubmitted(true)
//               router.push('/succesfull')
//             }
//           } catch (error) {
//             console.error('An error occurred:', error);
//             router.push('/notsubmitted')
//           }
//         },
        
        
//       });
//      const generalOptions=[
//       {
//         label:'Yes',value:'yes'},
//         {label:'No',value:'no'}
//      ]
//       const genderOptions = [
//         { label: 'Male', value: 'male' },
//         { label: 'Female', value: 'female' }
//       ];
//       const residenceOptions = [
//         { label: 'Day Scholar', value: 'dayscholar' },
//         { label: 'Hosteller', value: 'hosteller' }
//       ];
//       const branchOptions = [
//         {label: 'Select Branch', value: 'select'},
//         { label: 'CSE', value: 'cse' },
//         { label: 'CS', value: 'cs' },
//         { label: 'IT', value: 'it' },
//         { label: 'CSIT', value: 'csit' },
//         { label: 'CSAI', value: 'csai' },
//         { label: 'CSE (AI/ML)', value: 'cseaiml' },
//         { label: 'ECE', value: 'ece' },
//         { label: 'ME', value: 'me' },
//         { label: 'EEE', value: 'eee' },
//       ];
     
    
    
//   return (
//     <>
//     <title>Apply for Android Development Bootcamp of NSCC KIET | Technical Club Of KIET</title>
    
//     <div className='max-w-screen-sm mx-auto my-5'>
//     <h2 className="max-w-lg  mx-3 mb-6 font-sans text-3xl  font-bold leading-none tracking-tight text-gray-900 sm:text-4xl ">
//             <span className="relative inline-block">
            
//               <span className="relative"><span className='text-blue-700'>Dev 101</span> Bootcamp Registration</span>
//             </span>{' '}
            
//           </h2>
//           <div className="flex flex-col lg:flex-row md:flex-row gap-20 justify-center items-center">
//   <div className="content-center justify-center w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
//     <img
//       className="object-cover w-full h-72"
//       src='/bootcamp/androidBootcamp.png'
//       alt="avatar"
//     />
//     <div className="py-5 text-center">
//       <a href="https://lu.ma/hxnvasst" target="_blank">
//       <button className="animate-bounce px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
//         Join Android Dev Bootcamp
//       </button>
//       </a>
//     </div>
//   </div>

//   <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
//     <img
//       className="object-cover w-full h-72"
//       src='/bootcamp/webBootcamp.png'
//       alt="avatar"
//     />
//     <div className="py-5 text-center">
//     <a href="https://lu.ma/340obol9" target="_blank">
//       <button className="animate-bounce px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
//         Join Web Dev Bootcamp
//       </button>
//       </a>
//     </div>
//   </div>
// </div>

// <section class="bg-white dark:bg-gray-900 mt-5">
//     <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
//         <h2 class="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
//         Join the <span class="text-blue-500">NSCC KIET</span> Community.
//         </h2>

//         <p class="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">🚀 Join Our <strong> WhatsApp Community! </strong>
// Stay updated with the latest announcements, resources, and tips throughout the "Dev 101" bootcamp. Click the link below to join our WhatsApp group and connect with fellow participants!


//         </p>

//         <div class="inline-flex w-full mt-6 sm:w-auto">
//             <a href="https://chat.whatsapp.com/KllPLlFaOjzIGvEAlrOGil" class="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
//                 Join Community
//             </a>
//         </div>
//     </div>
// </section>


//       {/* <form onSubmit={formik.handleSubmit} className='mx-2'>
      
//         <Input className="mt-4" value="name" label="Enter your Name" placeHolder="Aditya Tyagi" formikTouched={formik.touched.name} formikError={formik.errors.name} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.name} type="text" />
      
//         <Input value="email" label="Your Email" placeHolder="dhruv.2125cs1130@kiet.edu" formikTouched={formik.touched.email} formikError={formik.errors.email} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.email} type="email"/>

//         <Input className="mt-4" value="id" label="Enter your Library ID" placeHolder="2125cs1130" formikTouched={formik.touched.id} formikError={formik.errors.id} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.id} type="text" />
    
//         <Input value="whatsappNumber" label="Whatsapp Number" placeHolder="8088088088" formikTouched={formik.touched.whatsappNumber} formikError={formik.errors.whatsappNumber} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.whatsappNumber} type="tel"/>
             
//         <InputRadio value="gender" label="Gender" options={genderOptions} formikTouched={formik.touched.gender} formikError={formik.errors.gender} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

  
//         <InputSelect value="branch" label="Select your Branch" options={branchOptions} formikTouched={formik.touched.branch} formikError={formik.errors.branch} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

//         <InputRadio value="laptop" label="Do you have Laptop" options={generalOptions} formikTouched={formik.touched.laptop} formikError={formik.errors.laptop} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

//         <InputRadio value="residence" label="Day Scholar or Hosteller" options={residenceOptions} formikTouched={formik.touched.residence} formikError={formik.errors.residence} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
        
       

//         <Button color='primary' type='submit'>Register</Button>



      
//       <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} className="mx-auto">
//         <ModalContent>
//           {(onClose) => (
//             <>
//               <ModalHeader className="flex flex-col gap-1">Bootcamp Registration Status</ModalHeader>
//               <ModalBody>
//                 {!formSubmitted?<CircularProgress size="lg" aria-label="Loading..." label="Submitting Form"/>:<><CircularProgress
//       label="SuccesFully Submitted"
//       size="lg"
//       value={100}
//       color="success"
      
//       showValueLabel={true}
//     /></>
//     }
//               </ModalBody>
              
//             </>
//           )}
//         </ModalContent>
//       </Modal>

//       </form> */}
//     </div>
//     </>
//   )
// }

// export default page












import React, { useState, useEffect } from "react";
import Link from 'next/link';
// import { useRouter } from 'next/router';
import { FaArrowDown } from "react-icons/fa";
import BubbleBackground from "./BubblesBg"; 
// import RegistrationForm from "../registeration/page";
import AOS from "aos";
import "aos/dist/aos.css";

function Page() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHoveringText, setIsHoveringText] = useState(false); 

 
  function calculateTimeLeft() {
    const eventDate = new Date("2024-11-30T00:00:00");
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    return {
      Days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
      Hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
      Minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
      Seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSchedule = () => {
    const scheduleSection = document.getElementById("schedule");
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative bg-transparent min-h-screen text-gray-800 font-sans">
      <BubbleBackground />
 
      <div
        className="fixed top-0 left-0 z-50 pointer-events-none"
        style={{
          width: isHoveringText ? "50px" : "0",
          height: isHoveringText ? "50px" : "0",
          backgroundColor: "rgba(0, 123, 255, 0.3)",
          borderRadius: "50%",
          transform: `translate(${cursorPosition.x - 25}px, ${
            cursorPosition.y - 25
          }px)`,
          transition: "width 0.2s, height 0.2s, transform 0.1s",
          filter: "blur(8px)",
        }}
      ></div>
 
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="group">
          <h1
            className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-blue-500 font-bold mb-6 text-center cursor-pointer group tracking-wide"
            onMouseEnter={() => setIsHoveringText(true)}
            onMouseLeave={() => setIsHoveringText(false)}
          >
            {"CODERUSH 2.0".split("").map((char, index) => (
              <span
                key={index}
                className="inline-block relative transition-transform duration-300 group-hover:text-blue-500 hover:text-blue-500 hover:scale-150"
              >
                {char}
              </span>
            ))}
          </h1>
        </div>

        <p className="lg:text-lg text-sm mb-8 text-gray-600 md:w-1/2 w-full mx-12 sm:mx-8 text-center">
          Get ready to code{" "}
          <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold">
            NSCC KIET
          </span>{" "}
          is back with CodeRush 2.0! Unleash your coding potential, compete with
          the best, and win exciting prizes.
        </p>
 
        <div className="flex gap-2 md:gap-6 mb-10">
  {Object.entries(timeLeft).map(([unit, value]) => (
    <div
      key={unit}
      className="flex flex-col items-center justify-center  sm:w-16 sm:h-20 w-12 h-14 bg-blue-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <span className="text-sm sm:text-3xl font-bold">{value}</span>
      <span className="text-xs sm:text-sm font-medium">{unit}</span>
    </div>
  ))}
</div>

<Link href="/registrationClosed">
<button className="flex items-center px-4 py-2 sm:px-6 sm:py-3 text-white bg-blue-600 rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-blue-700 md:mb-8 mb-2"
>
  Register Now
</button>
</Link>

 
        <div
          className="animate-bounce cursor-pointer text-blue-500 border-2 rounded-full p-2 bg-slate-200 hover:bg-slate-300 mt-12"
          onClick={scrollToSchedule}
        >
          <FaArrowDown size={30} />
        </div>
      </div>
 
      <div id="schedule" className="bg-transparent py-12 px-1 md:px-4 flex flex-col items-center">
        <h2 className="sm:text-4xl text-3xl font-bold text-blue-600 mb-8">Schedule</h2>
 
        <div className="relative w-full">
          <div className="absolute w-1 md:w-2 bg-blue-500 left-1/2 transform -translate-x-1/2 h-full"></div>
 
          <div className="flex items-center justify-center mb-12" data-aos="fade-up">
            <div className="sm:w-1/2 xl:w-1/3 w-full pr-2 sm:pr-4 md:pr-8 text-right">
              <p className="font-bold text-xs md:text-lg">Registration Starts</p>
              <p className="text-gray-600 text-xs md:text-sm">25th November</p>
            </div>
            <div className="md:w-8 md:h-8 w-4 h-4 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
          </div>
 
          <div className="flex items-center justify-center mb-12" data-aos="fade-up">
            <div className="md:w-8 md:h-8 w-4 h-4 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
            <div className="sm:w-1/2 xl:w-1/3 w-full pl-2 sm:pl-4 md:pl-8 text-left">
              <p className="font-bold text-xs md:text-lg">Registration Ends</p>
              <p className="text-gray-600 text-xs md:text-sm">29th November</p>
            </div>
          </div>
 
          <div className="flex items-center justify-center mb-12" data-aos="fade-up">
            <div className="sm:w-1/2 xl:w-1/3 w-full pr-2 sm:pr-4 md:pr-8 text-right">
              <p className="font-bold text-xs md:text-lg">Contest Date</p>
              <p className="text-gray-600 text-xs md:text-sm">1st December</p>
              <p className="text-gray-600 text-xs md:text-sm font-semibold">9pm - 12pm</p>
            </div>
            <div className="md:w-8 md:h-8 w-4 h-4 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
          </div>
 
          <div className="flex items-center justify-center mb-12" data-aos="fade-up">
            <div className="md:w-8 md:h-8 w-4 h-4 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
            <div className="sm:w-1/2 xl:w-1/3 w-full pl-2 sm:pl-4 md:pl-8 text-left">
              <p className="font-bold text-xs md:text-lg">Result Date</p>
              <p className="text-gray-600 text-xs md:text-sm">TBD</p>
            </div>
          </div>
        </div>
      </div>
 
 <div className="bg-transparent py-12 px-4 flex flex-col items-center">
  <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-8">Tracks</h2>
  <div className="flex flex-wrap justify-center gap-8">
    <div
      className="w-full sm:w-3/4 md:w-1/3 p-6 border-2 border-blue-500 bg-blue-50 rounded-lg shadow-lg"
      data-aos="fade-up"
    >
      <h3 className=" text-xl font-bold text-blue-500">First Year Track</h3>
      <p className="text-gray-600 text-sm sm:text-md">Top 3 winners will be announced from this track</p>
    </div>
    <div
      className="w-full sm:w-3/4 md:w-1/3 p-6 border-2 border-blue-500 bg-blue-50 rounded-lg shadow-lg"
      data-aos="fade-up"
    >
      <h3 className="text-xl font-bold text-blue-500">2nd & 3rd Track</h3>
      <p className="text-gray-600 text-sm sm:text-md">Top 3 winners will be announced from this track</p>
    </div>
  </div>
</div>

 
      <div className="bg-transparent py-12 px-4 flex flex-col items-center">
  <h2 className="text-4xl font-bold text-blue-600 mb-8" data-aos="fade-up">
    Prizes
  </h2>
  <div className="w-full max-w-3xl">
    <div
      className="bg-blue-400 p-6 rounded-lg text-white mb-6"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <h3 className="text-xl font-bold">Track 1 - Top 3 Winners</h3>
      <div className="flex gap-6 mt-4 md:flex-row flex-col">
        <div className="flex items-center">
          <span className="text-yellow-400 text-3xl">🥇</span>
          <p className="ml-2 text-gray-200">Winner Name</p>
        </div>
        <div className="flex items-center">
          <span className="text-gray-400 text-3xl">🥈</span>
          <p className="ml-2 text-gray-200">2nd Place Name</p>
        </div>
        <div className="flex items-center">
          <span className="text-orange-600 text-3xl">🥉</span>
          <p className="ml-2 text-gray-200">3rd Place Name</p>
        </div>
      </div>
    </div>
    <div
      className="bg-blue-400 p-6 rounded-lg text-white mb-6"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <h3 className="text-xl font-bold">Track 2 - Top 3 Winners</h3>
      <div className="flex gap-6 mt-4 md:flex-row flex-col">
        <div className="flex items-center">
          <span className="text-yellow-400 text-3xl">🥇</span>
          <p className="ml-2 text-gray-200">Winner Name</p>
        </div>
        <div className="flex items-center">
          <span className="text-gray-400 text-3xl">🥈</span>
          <p className="ml-2 text-gray-200">2nd Place Name</p>
        </div>
        <div className="flex items-center">
          <span className="text-orange-600 text-3xl">🥉</span>
          <p className="ml-2 text-gray-200">3rd Place Name</p>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <RegistrationForm/> */}
    </div>
  );
}

export default Page;











