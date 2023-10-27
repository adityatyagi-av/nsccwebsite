import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white mt-20 mx-auto max-w-screen-xl">
        <hr />
    <div className="container p-6 mx-auto">
        <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
                <div className="px-6">
                    <a href="#">
                        <h1>Newton School Coding Club KIET</h1>
                    </a>

                    <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">Join 100+ other tech enthusiast and make best connections in KIET GROUP OF INSTITUTIONS</p>

                   
                </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:flex-1">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">About</h3>
                        <Link href="/about" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Message</Link>
                        <Link href="/team" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Team</Link>
                        <Link href="/about" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Functioning</Link>
                    </div>

                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">Projects</h3>
                        <Link href="/projects" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Web / Android</Link>
                        <Link href="/projects" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">AI/ML</Link>
                        <Link href="/projects" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">AR/VR</Link>
                    </div>

                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">Resources</h3>
                        <Link href="/resources/dsa" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">DSA</Link>
                        <Link href="/resources/webdev" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Web Development</Link>
                        <Link href="/resources/android" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Android</Link>
                    </div>

                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
                        <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+91 8057226016</span>
                        <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">nscckiet@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700"/>

        <div>
            <p className="text-center text-gray-500 dark:text-gray-400">Developed with ❤️ by <a href='https://www.linkedin.com/in/adityatyagiav/' className='text-blue-900 underline font-medium'> Aditya Tyagi</a> and <a href='https://www.linkedin.com/in/abhinav-chaudhary-62349a22b/' className='text-blue-900 underline font-medium'> Abhinav Chaudhary</a></p>
        </div>
    </div>
</footer>
  )
}

export default Footer
