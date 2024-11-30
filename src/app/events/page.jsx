import React from 'react'
import EventsTable from './eventsTable'

function page() {
  return (
    
    <div>
    <h1 className='text-center text-4xl font-bold mt-8'>Events at <span className='bold text-blue-600'>NSCC</span></h1>
    <EventsTable/>

</div>

    
  )
}

export default page