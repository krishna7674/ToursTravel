import React from 'react'
import First from "../assets/first.jpg"
import Second from "../assets/second.jpg"
import Third from "../assets/third.jpg"
import Forth from "../assets/forth.jpg"
import Fifth from "../assets/fifth.jpg"

const Gallery = () => {
    return (
        <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
            <h2 className='text-center text-gray-700 t p-4 '>Gallery</h2>
            <div className='grid sm:grid-cols-5 gap-4'>
                <div className='sm:col-span-3 col-span-2 row-span-2'>
                    <img className='w-full h-full object-cover' src={First} alt="" />
                </div>

                <div>
                    <img className='w-full h-full object-cover' src={Second} alt="" />
                </div>

                <div>
                    <img className='w-full h-full object-cover' src={Third} alt="" />
                </div>

                <div>
                    <img className='w-full h-full object-cover' src={Forth} alt="" />
                </div>

                <div>
                    <img className='w-full h-full object-cover' src={Fifth} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Gallery
