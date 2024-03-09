import React from 'react'
import {ArrowUp} from 'lucide-react'
function CountryCards({country,visitors,rateOfIncrease}) {
  return (
    <div className='flex items-center mt-2'>
        <h1 className='text-lg'>{country}</h1>
        <div className='ml-auto'>
            <p className='text-lg'>{visitors}</p>
            <div className='flex items-center'>
            <ArrowUp className='h-4 w-4' stroke='green'/>
          

            <p className='text-green-600'>{rateOfIncrease}</p>
            </div>
        </div>
    </div>
  )
}

export default CountryCards