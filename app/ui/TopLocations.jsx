import React from 'react'
import CountryCards from './CountryCards'

const locationsData=[
    {countryName:'Nigeria',visitors:'5,430',rateOfIncrease:'2.2%'},
    {countryName:'Germany',visitors:'2,610',rateOfIncrease:'1.12%'},
    {countryName:'Switzerland',visitors:'1,925',rateOfIncrease:'1.1%'},
    {countryName:'Iraq',visitors:'1,571',rateOfIncrease:'0.8%'},

]

function TopLocations() {
  return (
    <div className='mt-10 px-10'>
        <div className='flex'>
        <h1 className='text-lg'>Top Locations</h1>
        <button
        type="button"
        className="rounded-md ml-auto border border-green-600 px-3 py-2 text-sm font-semibold text-green-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        See More
      </button>
      </div>
      <div className='flex mt-2'>
        <p className='text-md text-gray-500'>Country</p>
        <p className='ml-auto text-md text-gray-500'>Visitors</p>
      </div>
      
      <hr />
      {locationsData.map((location,idx)=>(
 <CountryCards key={idx} country={location.countryName} visitors={location.visitors} rateOfIncrease={location.rateOfIncrease}/>
      ))
     
}
    </div>
  )
}

export default TopLocations