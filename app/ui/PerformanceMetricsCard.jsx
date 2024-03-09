import React from 'react'
import {MoveUpRight,ArrowUp,BarChart2} from 'lucide-react'
function PerformanceMetricsCard({heading,data,percentage}) {
  return (
    <div className='mt-5 w-96 mx-5'>
        <div className='flex'>
            <p className='text-gray-600'>{heading}</p>
            <MoveUpRight className='ml-auto' stroke="gray"/>
           
        </div>
        <p className='font-bold text-4xl mt-5'>{data}</p>
        <div className='flex mt-5'>
        <ArrowUp stroke="green"/>
        <p className='text-gray-600'><span className='text-green-600'>{percentage}</span> in the last 7 days</p>
        <BarChart2 stroke='green' className='ml-auto'/>
        </div>
    </div>
  )
}

export default PerformanceMetricsCard