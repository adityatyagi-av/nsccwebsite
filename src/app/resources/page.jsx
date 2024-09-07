import ComingSoon from '@/components/comingsoon'
import Heading1 from '@/components/heading'
import PlayerAnimation from '@/components/player'
import Link from 'next/link'
const domains=[
  {
      id:0,
      name:'DSA & CP',
      animationLink: 'https://lottie.host/1164016c-616d-4d8b-b9f1-a5bed1e4beeb/FkicVGCA7e.json',
      link:'/resources/dsa'
  },
  {
      id:1,
      name:'UI/UX',
      animationLink: 'https://lottie.host/5f5fe598-7fa7-4151-b2ec-40764bc1b3cc/ruoJAeHvFE.json',
      link:'/resources/uiux'
  },
  {
      id:2,
      name:'Web Development',
      animationLink: 'https://lottie.host/a6064f6e-e8e0-4ffc-8cef-b6ee9b910368/NeJCxISROu.json',
      link:'/resources/webdev'
  },
  {
      id:3,
      name:'Android Development',
      animationLink: 'https://lottie.host/f32acb1a-3639-4d55-a49b-2f9b1baf3638/gdOqpmTAi4.json',
      link:'/resources/android'
  },
  {
      id:4,
      name:'AR / VR',
      animationLink: 'https://lottie.host/80024351-caca-4118-b3fc-6ce6e7731808/1xfloRrxVU.json',
      link:'/resources/arvr'
  },
  {
      id:5,
      name:'AI/ML',
      animationLink: 'https://lottie.host/fbe7cb74-800b-4b82-84fa-e5c600f30da3/jnKlg0DBqa.json',
      link:'/resources/aiml'
  },
  
]

const page = () => {
  return (
    
    
    <section className="bg-white ">
      <title>Resources provided by NSCC KIET | Technical Club Of KIET</title>
  <div className="container px-6 py-10 mx-auto">
  <Heading1 title="Resources"/>
    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
      
          {domains.map((domain)=>{
                return(
                  <Link href={domain.link} key={domain.id}>
                    <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl ">
                        <div className="object-cover w-full rounded-md aspect-square">
                        <PlayerAnimation link={domain.animationLink}/>
                        </div>
                
                <h1 className="text-2xl font-semibold text-blue-700 capitalize ">{domain.name}</h1>                
            </div>
            </Link>
                )
            })}
    
      
      
      


    </div>
  </div>
</section>

  
  
  )
}

export default page
