import PlayerAnimation from '@/components/player'
import React from 'react'

const Domains = () => {
    const domains=[
        {
            id:0,
            name:'DSA & CP',
            animationLink: 'https://lottie.host/d64d6a5f-65c7-40f7-8fb8-b3dcbc2ab559/XJUQmtiO0h.json',
        },
        {
            id:1,
            name:'UI/UX',
            animationLink: 'https://lottie.host/d64d6a5f-65c7-40f7-8fb8-b3dcbc2ab559/XJUQmtiO0h.json',
        },
        {
            id:2,
            name:'Web Development',
            animationLink: 'https://lottie.host/d64d6a5f-65c7-40f7-8fb8-b3dcbc2ab559/XJUQmtiO0h.json',
        },
        {
            id:3,
            name:'Android Development',
            animationLink: 'https://lottie.host/d64d6a5f-65c7-40f7-8fb8-b3dcbc2ab559/XJUQmtiO0h.json',
        },
        {
            id:4,
            name:'AR / VR',
            animationLink: 'https://lottie.host/d64d6a5f-65c7-40f7-8fb8-b3dcbc2ab559/XJUQmtiO0h.json',
        },
        {
            id:5,
            name:'AI/ML',
            animationLink: 'https://lottie.host/d64d6a5f-65c7-40f7-8fb8-b3dcbc2ab559/XJUQmtiO0h.json',
        },
        {
            id:6,
            name:'Graphic Designing',
            animationLink: 'https://lottie.host/d64d6a5f-65c7-40f7-8fb8-b3dcbc2ab559/XJUQmtiO0h.json',
        }
    ]
  return (
    <section className="bg-white dark:bg-gray-900 max-w-screen-xl mt-2 md:mt-10 mx-auto">
        <h1 className="text-2xl text-center font-semibold text-gray-800 mx-auto lg:text-4xl dark:text-white">Our Domains
        <div class="flex justify-center mx-auto mt-6">
                <span class="inline-block w-44 h-1 bg-blue-500 rounded-full"></span>
                <span class="inline-block w-6 h-1 mx-1 bg-blue-500 rounded-full"></span>
                <span class="inline-block w-2 h-1 bg-blue-500 rounded-full"></span>
            </div></h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-10 md:grid-cols-2 xl:grid-cols-3">
            {domains.map((domain)=>{
                return(
                    <div key={domain.id} className="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
                <PlayerAnimation link={domain.animationLink}/>
                <h1 className="mt-4 text-2xl font-semibold text-blue-700 capitalize dark:text-white">{domain.name}</h1>                
            </div>
                )
            })}
            </div>
          
    
   
</section>
  )
}

export default Domains
