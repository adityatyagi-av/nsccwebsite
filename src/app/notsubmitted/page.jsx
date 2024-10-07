import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='mx-auto mt-20 max-w-screen-xl'>
      <title>Form Succesfully Submitted NSCC KIET | Technical Club Of KIET</title>
      <h2 className=" mx-auto max-w-screen-xl items-center text-center mb-6 font-sans text-3xl  font-bold leading-none tracking-tight text-gray-900 sm:text-4xl ">
            <span className="relative inline-block">
            
              <span className="relative">FORM <span className='text-blue-700'> NOT </span>SUBMITTED</span>
            </span>{' '}
            <br />
            <Link href="/bootcamp" className='underline text-red-500 text-2xl py-20 italic' >Fill Form again</Link>
          </h2>
    </div>
  )
}

export default page
