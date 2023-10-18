import Hero from '@/components/home/Hero'
import { Step } from '@/components/home/Steps'
import Faq from '@/components/home/faq'
import Projects from '@/components/projects'

import React from 'react'

const page = () => {
  return (
    <main>
      <Hero/>
      <Step/>
      
      <Projects/>
      <Faq/>
    </main>
  )
}

export default page
