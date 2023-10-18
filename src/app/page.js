import Hero from '@/components/home/Hero'
import { Step } from '@/components/home/Steps'
import CoreTeam from '@/components/home/coreteam'
import Faq from '@/components/home/faq'
import Projects from '@/components/home/projects'

import React from 'react'

const page = () => {
  return (
    <main>
      <Hero/>
      <Step/>
      <Projects/>
      <CoreTeam/>
      <Faq/>
    </main>
  )
}

export default page
