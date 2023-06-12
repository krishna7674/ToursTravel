import React from 'react'
import Resort from "../assets/resorts.jpg"
import Ship from "../assets/ship.jpg"
import Goa from "../assets/goa.jpg"

const Activites = () => {
    return (
        <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
        
            <div  className='relative p-4' >
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold bg-black/70 '> Resorts</h3>
                <img src={Resort} alt="Resort for booking"  
                className='w-full h-full object-cover  relative border-4 border-white shadow-lg'
                />
            </div>

            <div className='relative p-4' >
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold bg-black/70'>Resorts</h3>
                <img src={Ship} alt="Resort for booking" 
              className='w-full h-full object-cover  relative border-4 border-white shadow-lg '
                />
            </div>

            <div className='relative p-4' >
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold bg-black/70 '>Resorts</h3>
                <img src={Goa} alt="Resort for booking"
                className='w-full h-full object-cover  relative border-4 border-white shadow-lg'
                />
            </div>

        </div>
    )
}

export default Activites
