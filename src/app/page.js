import Hero from '@/components/home/Hero'
import { Step } from '@/components/home/Steps'
import Faq from '@/components/home/faq'

import React from 'react'

const page = () => {
  return (
    <main>
      <Hero/>
      <Step/>

      <Faq/>
    </main>
  )
}

export default page
