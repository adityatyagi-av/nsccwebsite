
import CardBox from "@/components/card"
import CardImageBox from "@/components/card/image"
import Heading1 from "@/components/heading"
import Link from "next/link"

const Resources=[
  {
    id:1,
    imageLink:'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230710162842/DSA-Beginners.png',
    link:'dsa/beginner'
  },
  {
    id:2,
    imageLink:'https://cdn-media-1.freecodecamp.org/images/HjKZtf6JKxcrH8t51iRrId-4lTqjOlGtICip',
    link:'dsa/array'
  },
  {
    id:3,
    imageLink:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS08nCBMJE3TY1S7UPk8MecFPNqG_HE-1GPtQ&usqp=CAU',
    link:'dsa/linkedlist'
  },
  {
    id:4,
    imageLink:'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221219100314/stack.drawio2.png',
    link:'dsa/stack'
  },
  {
    id:5,
    imageLink:'https://miro.medium.com/v2/resize:fit:523/1*asgh4mx9ez5Ji8PmBayS8g.png',
    link:'dsa/stackandqueue'
  },
  {
    id:6,
    imageLink:'https://media.geeksforgeeks.org/wp-content/uploads/20230111154258/typoes1-768.png',
    link:'dsa/tree'
  },
  {
    id:7,
    imageLink:'https://www.shiksha.com/online-courses/articles/wp-content/uploads/sites/11/2021/09/Graph-Data-Structure.png',
    link:'dsa/graph'
  },
  {
    id:8,
    imageLink:'https://cdn.programiz.com/sites/tutorial2program/files/javascript-recursion.png',
    link:'dsa/recursion'
  },
  {
    id:9,
    imageLink:'https://i.ytimg.com/vi/jM2dhDPYMQM/mqdefault.jpg',
    link:'dsa/slidingwindow'
  },
  {
    id:10,
    imageLink:'https://d1m75rqqgidzqn.cloudfront.net/wp-data/2021/03/23180546/23-1024x332.png',
    link:'dsa/stl'
  },
  {
    id:11,
    imageLink:'https://i.ytimg.com/vi/aPQY__2H3tE/maxresdefault.jpg',
    link:'dsa/dynamicprogramming'
  },


]


const Page = () => {
  

  return (

    <>
    <title>DSA Resources NSCC KIET | Technical Club Of KIET</title>
    
    <section className="bg-white dark:bg-gray-900 mx-auto max-w-screen-xl">
    <div className="container px-6 mx-auto">
        <Heading1 title="DSA Resources"/>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4"> 
        {
          Resources.map((resource)=>{
            return(
              <Link key={resource.id} href={resource.link}>
        <CardImageBox link={resource.imageLink}/>
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
