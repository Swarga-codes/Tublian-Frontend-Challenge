import React from 'react'
import PerformanceMetricsCard from './PerformanceMetricsCard'

const performanceMetricsData=[
    {heading:'Followers',data:'92.3k',percentage:'0.8%'},
    {heading:'Likes',data:'400k',percentage:'1.21%'},
    {heading:'Comments',data:'289.1k',percentage:'2.7%'},
]

function PerformanceMetrics() {
  return (
    <div className='px-4'>
        <div className='flex items-center'>
        <h1 className='text-xl font-semibold'>Performance Metrics</h1>
        <p className='ml-auto underline text-green-600'>Download Summary</p>
        </div>
        <div className='flex'>
            {performanceMetricsData.map((performancemetric,idx)=>(
            <PerformanceMetricsCard key={idx} heading={performancemetric.heading} data={performancemetric.data} percentage={performancemetric.percentage}/>
            ))
            }
        </div>
    </div>
  )
}

export default PerformanceMetrics