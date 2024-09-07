
import CardBox from "@/components/card"
import Heading1 from "@/components/heading"
import Link from "next/link"

const Resources=[
  {
    id:1,
    playerLink:'https://lottie.host/f8bd7394-db05-43d1-813a-98c76d88101b/QuIC27CPb9.json',
    link:'uiux/figma'
  },
  


]


const Page = () => {
  

  return (

    <>
    <title>UI/UX Resources NSCC KIET | Technical Club Of KIET</title>
    <section className="bg-white dark:bg-gray-900 mx-auto max-w-screen-xl">
    <div className="container px-6 mx-auto">
        <Heading1 title="UX / UI Resources"/>

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
