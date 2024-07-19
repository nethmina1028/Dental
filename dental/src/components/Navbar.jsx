import React from 'react'
import Logo from '../assets/Logo.png'

function Navbar() {

    const navItems = [
        { label: "Home", href: "#" },
        { label: "About", href: "#" },
        
      ];

  return (
    <nav className=' mx-2 px-1 mt-4 bg-transparent'>
      

    <div className='flex flex-row items-center justify-around space-x-2'>
         
    <a href="#" className='' >
           <img src={Logo} alt="logo" className=" w-18" />
       </a>
       
       <div className='items-center hidden gap-8 lg:flex text-black'>
       <ul className='items-center hidden gap-4 p-2 space-x-8 text-md  lg:flex ml-14 '>
        {navItems.map((item,index) =>(
                       <li key={index}>
                        <a href={item.href} className='hover:text-white '>{item.label}</a>
                       </li> 
                    ))}
       </ul>
       
       </div>


           <div className='space-x-6 hidden lg:flex '>
              <button className='btn-primary bg-slate-50 text-black hover:bg-primary'>
                Login
              </button>
              <button className='btn-primary bg-primary  hover:bg-pink-800'>
                Register
              </button>

           </div>

    </div>
    
    </nav>
  )
}

export default Navbar