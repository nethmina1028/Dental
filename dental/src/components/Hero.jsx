import React from 'react'
import HeroImg from '../assets/Heroimg.png'
import Partner from '../assets/Partner.png'

function Hero() {
  return (
    <>
    <section className='flex flex-col gap-20 py-10 pb-32 max-container padding-container md:gap-28 lg:py-20 xl:flex-row '>
      
     
         
             <div className='relative z-20 flex flex-wrap items-center justify-center flex-1 xl:w-1/2 '>
             
             <div className='w-[880px] '>
                <h1 className='text-5xl font-bold lg:text-7xl sm:text-6xl text-[#843E71] '>Tooth Talk:<br></br><span className='font-cursive text-tertiary'>A Casual Meetup for Dental Professionals.</span></h1>
                <h2 className='text-sm text-black lg:text-lg sm:text-sm'>Please Register to be a part of the event.</h2>
                <button className='pl-4 mt-10 text-white btn-primary bg-primary hover:bg-primary '>Register Now</button>
            </div>

         
            <div className='flex '>
                <img src={HeroImg} alt='group'
                 className=''
                />
            </div>
            
            </div>
    
    </section>
            
    </>
  )
}

export default Hero