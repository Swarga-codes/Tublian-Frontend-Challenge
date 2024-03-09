'use client'
import React from 'react'
import {Circle} from 'lucide-react'
import GenderChart from './GenderChart'
import AgeGroup from './AgeGroup'
function AudienceDemography() {
  return (
    <div className='mt-10 px-4'>
        <h1 className='text-lg'>Audience Demography</h1>
        <div className='flex ml-auto w-fit mt-5'>
            <div className='flex'>
            <Circle className='bg-blue-900 rounded-full' stoke='blue' stroke='transparent'/>
            <p className='ml-4'>Male</p>
            </div>
            <div className='flex ml-5'>
            <Circle className='bg-green-500 rounded-full' stoke='green' stroke='transparent'/>
            <p className='ml-4'>Female</p>
            </div>
            <div className='flex ml-5'>
            <Circle className='bg-yellow-500 rounded-full' stoke='yellow' stroke='transparent'/>
            <p className='ml-4'>Other</p>
            </div>
        </div>
        <div className='flex'>
        <div className='w-1/4'>
            <GenderChart/>
        </div>
        <div className='w-3/4'>
        <AgeGroup/>
        </div>
       
        </div>
        
    </div>
  )
}

export default AudienceDemography