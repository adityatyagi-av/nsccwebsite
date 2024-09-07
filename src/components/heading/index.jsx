import React from 'react'

const Heading1 = ({title}) => {
  return (
    
      
        <div className="max-w-xl mb-10 mt-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white"> {title}
        <div className="flex justify-center mx-auto mt-3">
                <span className="inline-block w-2 h-1 bg-gray-700 rounded-full"></span>
                <span className="inline-block w-52 h-1 mx-1 bg-gray-700 rounded-full"></span>
                <span className="inline-block w-2 h-1 bg-gray-700 rounded-full"></span>
            </div>
        </h1>
          
        </div>
        
   
  )
}

export default Heading1
