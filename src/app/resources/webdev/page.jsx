
import CardBox from "@/components/card"
import Heading1 from "@/components/heading"
import Link from "next/link"

const Resources=[
  {
    id:1,
    playerLink:'https://lottie.host/f264a429-e390-46d7-8b08-be6d36c5c20d/hOtqkgkz53.json',
    link:'webdev/html'
  },
  {
    id:2,
    playerLink:'https://lottie.host/ffc39d2e-2503-44df-853f-3a0582513533/LzpWxYlXT0.json',
    link:'webdev/css'
  },
  {
    id:3,
    playerLink:'https://lottie.host/7ce477ee-9707-4929-8814-02fb1f3c9c80/XX9Gp3NQXv.json',
    link:'webdev/js'
  },
  {
    id:4,
    playerLink:'https://lottie.host/7d3f84bc-2623-42a6-ab5f-ba96b0c0300c/qk0UYGOD4i.json',
    link:'webdev/react'
  },


]


const Page = () => {
  

  return (

    <>
    <title>Web Development Resources NSCC KIET | Technical Club Of KIET</title>
    <section className="bg-white dark:bg-gray-900 mx-auto max-w-screen-xl">
    <div className="container px-6 mx-auto">
        <Heading1 title="Web Resources"/>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4"> 
        {
          Resources.map((resource)=>{
            return(
              <Link key={resource.id} href={resource.link}>
        <CardBox link={resource.playerLink}/>
        </Link>
            )
          })
        }
        
           </div>                       
    </div>
</section>
</>
  )
}

export default Page
