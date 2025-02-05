import React from 'react'
import logo from "../../assets/Logo.png"

// icons
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <nav>
        <div className='w-container mx-auto flex justify-between items-center py-8'>
        {/* logo */}
        <div className='w-1/5'>
            <img src={logo} alt="logo"/>
        </div>

        {/* menu */}

        <div  className='text-[#FFFFFF] flex items-center gap-x-[38px]'>
            <ul className='flex gap-x-[22px] font-inter font-normal text-base relative after:contents-[""] after:absolute after:bg-[#FCFCFC] after:w-[1px] after:h-[20px] after:top-1/2 after:-right-5 after:-translate-y-1/2' >
                <li className='hover:text-[#00C0FF] transition-all duration-500'>
                  <NavLink to="/" className={({ isActive }) =>isActive ? "text-[#00C0FF] font-bold" : ""}>
                  Home
                  </NavLink>
                </li>
                <li className='hover:text-[#00C0FF] transition-all duration-500'>
                  About
                  </li>
                <li className='hover:text-[#00C0FF] transition-all duration-500'>
                  Service 
                  </li>
                <li className='hover:text-[#00C0FF] transition-all duration-500'>
                  Portfolio
                  </li>
                <li className='hover:text-[#00C0FF] transition-all duration-500'>
                  Blog
                  </li>
                <li className='hover:text-[#00C0FF] transition-all duration-500'>
                  Contact
                  </li>
            </ul>
            {/*social icons */}
            <div className='text-base flex gap-x-5'>
              <a target='_blank' title='Facebook' href="https://www.facebook.com/imonrana.raj" className='hover:text-[#00C0FF] transition-all duration-500'>
              <FaFacebookF />
              </a>
            <a target='_blank' title='Linkein' href="https://linkedin.com/in/md-imon-rana-4047a4240" className='hover:text-[#00C0FF] transition-all duration-500'>
            <FaLinkedinIn /></a>
            <a target='_blank' title='Github' href="https://github.com/imonrana" className='hover:text-[#00C0FF] transition-all duration-500'>
            <IoLogoGithub /></a>
            </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar