import Link from 'next/link'
import React from 'react'

const CTA = () => {
  return (
    <>
      
<section className="bg-indigo-800 mx-auto max-w-screen-xl my-8 md:my-20">
    <div className="container grid grid-cols-2 gap-8 py-8 mx-auto text-center md:grid-cols-4">
        <div>
            <h5 className="text-5xl font-bold text-white">
                <span className="inline text-white">
                    100
                </span>
                <span className="text-indigo-200">
                    +
                </span>
            </h5>
            <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
                Members
            </p>
        </div>
        <div>
            <h5 className="text-5xl font-bold text-white">
                <span className="inline text-white">
                    15
                </span>
                <span className="text-indigo-200">
                    +
                </span>
            </h5>
            <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
                Ongoing Projects
            </p>
        </div>
        <div>
            <h5 className="text-5xl font-bold text-white">
                <span className="inline text-white">
                    30
                </span>
                <span className="text-indigo-200">
                    +
                </span>
            </h5>
            <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
                Finished projects
            </p>
        </div>
        <div>
            <h5 className="text-5xl font-bold text-white">
                <span className="inline text-white">
                    8
                </span>
                <span className="text-indigo-200">
                    +
                </span>
            </h5>
            <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
                Collobrators
            </p>
        </div>
    </div>
    <div className="flex p-4 mx-auto mt-4 w-52">
        <Link href="/register" className="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            Register Now
        </Link>
    </div>
</section>

    </>
  )
}

export default CTA
