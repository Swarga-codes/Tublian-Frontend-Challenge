import React from 'react'
import Image from 'next/image'
function Navbar() {
  return (
    <div className='flex py-10 px-4 items-center'>
        <h1>Metrics looking good, Snow!</h1>
    <div className='m-auto'>
       
    <input
    class="flex h-10 w-72 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type="text"
    placeholder="Search"
  />
  </div>
  <div className='flex ml-auto'>
  
  <Image
    className="inline-block rounded-full"
  
    src="https://avatars.githubusercontent.com/u/810438?v=4"
    alt="avatar"
    height={30}
    width={50}
  />
  <div className='ml-5'>
    <p className='font-semibold text-lg'>John Doe</p>
    <p className='text-md text-gray-500'>john@gmail.com</p>
  </div>
  </div>
    
    </div>
  )
}

export default Navbar