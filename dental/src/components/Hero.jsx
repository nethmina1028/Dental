import React from 'react'
import HeroImg from '../assets/Heroimg.png'

function Hero() {
  return (
    <div className=' min-h-[550px] sm:min-h-[600px]  text-white  flex justify-center items-center'>
         <div className='container pb-8 xs:pt-12 '>
             <div className='grid flex-wrap items-center grid-cols-1 sm:grid-cols-2'>

             <div>
                <h1 className='text-5xl font-bold lg:text-7xl sm:text-6xl '>We serve the richest <span className='font-cursive text-primary'>Coffee</span> in the city</h1>
                <button className='w-40 h-12 mt-6 border rounded-full hover:bg-black '>Coffee And Code</button>
            </div>

            <div className='min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative '>
                <img src={HeroImg} alt='coffee'
                 className='w-[330px] sm:w-[450px]
                 sm:scale-110 mx-auto spin'
                />
            </div>
        
             </div>
         </div>
    </div>
  )
}

export default Hero