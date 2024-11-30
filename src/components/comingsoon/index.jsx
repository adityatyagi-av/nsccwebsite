import React from 'react'

const ComingSoon = () => {
  return (
   
      <section x-data="{ isOpen: false }" className="w-full my-10 bg-white">
    <div className="container relative flex flex-col  px-6 py-8 mx-auto">
        
        <section className="flex items-center flex-1">
            <div className="flex flex-col w-full ">
                <h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
                    <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 ">
                        Coming
                    </span>

                    <span className="text-transparent bg-gradient-to-tr bg-clip-text from-yellow-500 via-pink-500 to-red-500 ">
                        Soon...
                    </span>
                </h1>

                

                <p className="mt-8 text-center text-gray-700  text-md md:text-xl">We are working to live this page as soon as possible :)</p>
            </div>
        </section>

        
    </div>
</section>
   
  )
}

export default ComingSoon
