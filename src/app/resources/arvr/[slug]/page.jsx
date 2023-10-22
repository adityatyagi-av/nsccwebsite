import React from 'react'

const page = ({params}) => {
    console.log(params.slug)
  return (
    <>
    
     <h1>{params.slug}</h1> 
    </>
  )
}

export default page
