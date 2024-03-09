import React from 'react'
import BarChart from './BarChart'

function EngagementRates() {
  return (
    <div className='mt-10 px-4'>
        <div className='flex'>
        <h1 className='text-lg'>Engagement Rates</h1>
        <select name="select" id="select" className='ml-auto bg-green-100 rounded-md'>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
        </select>
        </div>
        <div>
         <BarChart/>
        </div>
       
    </div>
  )
}

export default EngagementRates