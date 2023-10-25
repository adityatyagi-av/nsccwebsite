
import Heading from '@/components/heading'
import { aimlprojects,androidprojects,arvrprojects,webprojects,uiuxprojects} from './data'
import CardMapping from '@/components/cardMap'


const page = () => {
  return (
    
    <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
    <title>Projects Of NSCC KIET | Technical Club Of KIET</title>
    <Heading title="AI/ML Projects"/>
    <CardMapping data={aimlprojects}/>
    <Heading title="UI/UX Projects"/>
    <CardMapping data={uiuxprojects}/>
    <Heading title="Web Projects"/>
    <CardMapping data={webprojects}/>
    <Heading title="AR/VR Projects"/>
    <CardMapping data={arvrprojects}/>
    <Heading title="Android Projects"/>
    <CardMapping data={androidprojects}/>
      </div>
  
  )
}

export default page
