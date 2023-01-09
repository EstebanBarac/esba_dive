import React from 'react'
import ImageSlider1 from './ImageSlider1'
import ImageSlider2 from './ImageSlider2'
import ImageSlider3 from './ImageSlider3'
import ImageSlider4 from './ImageSlider4'
import ImageSlider5 from './ImageSlider5'

export default function Experiencias() {
  return (
    <div className="text-center mb-12">
            <div id='experiencias'>
                <h2 className="text-4xl md:text-6xl text-gray-700 font-semibold mt-30 w-full"><b className='font-bold'>Experiencias</b></h2>
            </div>
            <div className='mt-20'>
                <h3 className='text-3xl md:text-5xl text-gray-700 font-semibold mt-30 w-full'>Galápagos</h3>
            </div>
            <div>
                <ImageSlider1 />
            </div>

            <div className='mt-20'>
                <h3 className='text-3xl md:text-5xl text-gray-700 font-semibold mt-30 w-full'>México</h3>
            </div>
            <div>
                <ImageSlider2 />
            </div>

            <div className='mt-20'>
                <h3 className='text-3xl md:text-5xl text-gray-700 font-semibold mt-30 w-full'>Panamá</h3>
            </div>
            <div>
                <ImageSlider3 />
            </div>

            <div className='mt-20'>
                <h3 className='text-3xl md:text-5xl text-gray-700 font-semibold mt-30 w-full'>Sudáfrica y Mozambique</h3>
            </div>
            <div>
                <ImageSlider4 />
            </div>

            <div className='mt-20'>
                <h3 className='text-3xl md:text-5xl text-gray-700 font-semibold mt-30 w-full'>Argentina, Neuquén</h3>
            </div>
            <div>
                <ImageSlider5 />
            </div>
    </div>
  )
}
