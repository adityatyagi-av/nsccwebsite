import PlayerAnimation from '@/components/player'
import React from 'react'

const Domains = () => {
    const domains=[
        {
            id:0,
            name:'DSA & CP',
            animationLink: 'https://lottie.host/1164016c-616d-4d8b-b9f1-a5bed1e4beeb/FkicVGCA7e.json',
        },
        {
            id:1,
            name:'UI/UX',
            animationLink: 'https://lottie.host/5f5fe598-7fa7-4151-b2ec-40764bc1b3cc/ruoJAeHvFE.json',
        },
        {
            id:2,
            name:'Web Development',
            animationLink: 'https://lottie.host/a6064f6e-e8e0-4ffc-8cef-b6ee9b910368/NeJCxISROu.json',
        },
        {
            id:3,
            name:'Android Development',
            animationLink: 'https://lottie.host/f32acb1a-3639-4d55-a49b-2f9b1baf3638/gdOqpmTAi4.json',
        },
        {
            id:4,
            name:'AR / VR',
            animationLink: 'https://lottie.host/80024351-caca-4118-b3fc-6ce6e7731808/1xfloRrxVU.json',
        },
        {
            id:5,
            name:'AI/ML',
            animationLink: 'https://lottie.host/fbe7cb74-800b-4b82-84fa-e5c600f30da3/jnKlg0DBqa.json',
        },
        {
            id:6,
            name:'Graphic Designing',
            animationLink: 'https://lottie.host/df38f827-75f7-48cf-9ccc-ccf3be135361/GxPzVpOCYm.json',
        },
        {
            id:7,
            name:'Content Writing',
            animationLink: 'https://lottie.host/381e07df-d415-4d3e-b266-98b2015f6930/noXH4QSDFN.json',
        },
        {
            id:8,
            name:'Personality Development',
            animationLink: 'https://lottie.host/aadb5aa0-c106-4329-b34a-77510c95d9ac/FFtNb0kWyC.json',
        }
    ]
  return (
    <section className="bg-white  max-w-screen-xl mt-2 md:mt-10 mx-auto">
        <h1 className="text-2xl text-center font-semibold text-gray-800 mx-auto lg:text-4xl ">Our Domains
        <div className="flex justify-center mx-auto mt-6">
                <span className="inline-block w-44 h-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-6 h-1 mx-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-2 h-1 bg-blue-500 rounded-full"></span>
            </div></h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-10 md:grid-cols-2 xl:grid-cols-3">
            {domains.map((domain)=>{
                return(
                    <div key={domain.id} className="flex flex-col items-center p-4 border sm:p-6 rounded-xl ">
                        <div className="object-cover w-full rounded-md aspect-square">
                        <PlayerAnimation link={domain.animationLink}/>
                        </div>
                
                <h1 className="text-2xl font-semibold text-blue-700 capitalize ">{domain.name}</h1>                
            </div>
                )
            })}
            </div>
          
    
   
</section>
  )
}

export default Domains
