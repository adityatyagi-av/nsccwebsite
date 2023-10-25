import { Avatar } from "@nextui-org/react"

const ProjectCard = ({title,projectImage,imageUrl,developer,profileLink,projectLink}) => {
  return (
    
      
<div className="w-full max-w-[20rem]  bg-white border border-gray-200 rounded-lg shadow ">
<a href={projectLink}>
        <img className="object-cover max-h-52 h-48 rounded-t-lg" src={projectImage} alt={title} />
        </a>
    <div className="px-5 pb-5 flex flex-col justify-end">
        
            <h5 className="text-xl pointer font-semibold tracking-tight text-gray-900 ">{title}</h5>
        
        <div className="flex items-center mt-2.5 mb-5">
        
        <Avatar src={imageUrl} className="w-6 h-6 text-tiny"  />
        <a href={profileLink}>
           <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ml-3">{developer}</span>
           </a>
        </div>
        
    </div>
   
</div>

    
  )
}

export default ProjectCard
