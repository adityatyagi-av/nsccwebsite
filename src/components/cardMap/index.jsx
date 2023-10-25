import React from 'react'
import ProjectCard from '../projectcard'

const CardMapping = ({data}) => {
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
    {data.map((project)=>{
        return(
          <ProjectCard key={project.id} title={project.title} developer={project.developer} projectImage={project.projectImage} imageUrl={project.imageUrl} profileLink={project.profileLink} projectLink={project.projectLink}/>
        )
      })}
    </div>
  )
}

export default CardMapping
