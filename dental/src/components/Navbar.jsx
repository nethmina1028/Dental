import React from 'react'
import Logo from '../assets/Logo.png'
import{Menu,X} from "lucide-react";
import { useState } from 'react';

function Navbar() {

  const[mobileDrawerOpen,setMobileDrawerOpen]=useState(false);

   const toggleNavbar=() =>{
    setMobileDrawerOpen(!mobileDrawerOpen);
   };
   
    const navItems = [
        { label: "Home", href: "#" },
        { label: "About", href: "#" },
        
      ];

  return (
    <nav className='relative z-30 flex flex-row items-center justify-between px-20 py-5 max-container padding-container '>   
         
      <a href="#" className='' >
           <img src={Logo} alt="logo" className="w-16 " />
      </a>

       
       <ul className='hidden h-full gap-16 lg:flex'>
        {navItems.map((item,index) =>(
                       <li key={index}>
                        <a href={item.href} className='hover:text-white '>{item.label}</a>
                       </li> 
                    ))}
       </ul>
       
      


           <div className='hidden space-x-6 lg:flex '>
              <button className='text-black btn-primary bg-slate-50 hover:bg-primary'>
                Login
              </button>
              <button className='btn-primary bg-primary hover:bg-pink-800'>
                Register
              </button>

    
          
              
           </div>
    
         {/*nAVBAR toggle */}
         <div className="flex-col justify-end lg:hidden md:flex">
                <button onClick={toggleNavbar}>
                    {mobileDrawerOpen ? <X/>:<Menu/>}
                </button>
         </div>

         {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 flex flex-col items-center justify-center w-full p-12 mt-10 bg-tertiary lg-hidden">
                    <ul>
                    {navItems.map((item,index) =>(
                       <li key={index} className='py-1'>
                        <a href={item.href}>{item.label}</a>
                       </li> 
                    ))}
                    </ul>
                    
            <div className="flex space-x-6">
                <a href='#' className='px-3 py-2 border rounded-md'>Sign In</a>

                <a href='#' className='px-3 py-2 border rounded-md '>Create an account</a>
            </div>


                </div>
            )}

              

    </nav>
  )
}

export default Navbar