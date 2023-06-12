import React from 'react'

const Hero = () => {
  return (
    <div id='home' className='w-full h-[90vh] '>
     <img src="https://www.pcclean.io/wp-content/uploads/2020/4/faEBZf.jpg" alt="" 
     className='w-full h-full object-cover '
     />


<div className=' bg-black max-w-[1140px] m-auto '>
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4 '>
          <h1 className='font-bold text-4xl bg-black/50'>Find Your Special Trip</h1>
          <h2 className='text-4xl py-4 italic bg-black/50'>With Weekaway</h2>
          <p className='bg-black/50 '>
          Discover your next unforgettable adventure with Weekaway. Immerse yourself in breathtaking landscapes, experience vibrant
           cultures, and create lifelong memories. Whether you're seeking a
           relaxing beach getaway, an exhilarating mountain expedition, or a cultural exploration, we have the perfect trip for you.
          </p>
        </div>
      </div>
    </div>
    
  )
}

export default Hero
