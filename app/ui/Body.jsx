import React from 'react'
import Navbar from './Navbar'
import PerformanceMetrics from './PerformanceMetrics'
import EngagementRates from './EngagementRates'
import PostActivity from './PostActivity'
import AudienceDemography from './AudienceDemography'
import TopLocations from './TopLocations'

function Body() {
  return (
    <div className='w-fit ml-52'>
        <Navbar/>
        <PerformanceMetrics/>
        <div className='flex'>
            <div className='w-1/2'>
        <EngagementRates/>
        <PostActivity/>
        </div>
        <div className='w-1/2 mb-5'>
    <AudienceDemography/>
    <TopLocations/>
        </div>
        </div>
    </div>
  )
}

export default Body