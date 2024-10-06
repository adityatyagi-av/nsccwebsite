
import CardBox from "@/components/card"
import Link from "next/link"

const Registration=[
  
  {
    id:1,
    playerLink:'https://lottie.host/4dd33555-6a1f-4f2c-bd61-4ee50e340dba/nHkggk8JnZ.json',
    link:'join/first',
    text:'First Year'
  },
  {
    id:2,
    playerLink:'https://lottie.host/4a7ba51d-cf35-4248-b63f-08317023873f/Quryv1f3au.json',
    link:'join/second',
    text:'Second Year'
  },
 


]


const Page = () => {
  

  return (

    <>
    <title>Join NSCC KIET | Technical Club Of KIET</title>
    <section className="bg-white dark:bg-gray-900 mx-auto max-w-screen-xl">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white"> Join NSCC KIET
        <div className="flex justify-center mx-auto mt-6">
                <span className="inline-block w-52 h-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-8 h-1 mx-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 bg-blue-500 rounded-full"></span>
            </div></h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2">
        {
          Registration.map((year)=>{
            return(
                
              <Link key={year.id} href={year.link} 
              className="flex flex-col items-center justify-center">
        <CardBox link={year.playerLink}/>
        <h1 className="text-xl mt-1 font-semibold text-center text-blue-800 capitalize dark:text-white">Click Here <br />{`(${year.text})`}</h1>
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
