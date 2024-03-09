import React from 'react'
import Navbar from './Navbar'
import PerformanceMetrics from './PerformanceMetrics'
import EngagementRates from './EngagementRates'

function Body() {
  return (
    <div className='w-full'>
        <Navbar/>
        <PerformanceMetrics/>
        <EngagementRates/>
    </div>
  )
}

export default Body