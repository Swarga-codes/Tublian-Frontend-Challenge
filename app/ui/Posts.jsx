'use client'
import React from 'react'
import Image from 'next/image'
import {Eye,Ellipsis} from 'lucide-react'
function Posts({image,caption,date,views}) {
  return (
   
    
        <div className='flex items-center mt-5'>
        <Image
    className="inline-block rounded-md"
  
    src={image}
    alt="avatar"
    height={30}
    width={50}
  />
        
        
            <p className='ml-2 max-w-72'>{caption}</p>
        
       
           <p className='ml-5 font-semibold'>{date}</p>
        
        <div className='flex ml-10'>
        <Eye className='bg-green-500 rounded-full' stroke='white'/>
        <p className='ml-2 font-semibold'>{views}</p>
        
        </div>
        <Ellipsis className='ml-auto'/>
        
            
        </div>
   
  )
}

export default Posts