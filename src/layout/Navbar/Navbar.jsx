import React, { useEffect, useState } from 'react'
import logo from "../../assets/Logo.png"

// icons
import { RxCross2 } from "react-icons/rx";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const [navbg, setNavbg] = useState(false);
  const [show, setShow] = useState(false);

  const changeNavbg = ()=>{
  window.scrollY >40 ? setNavbg(true) : setNavbg(false)
 }
 
 useEffect(() => {
   window.addEventListener("scroll", changeNavbg);
 
   return () => {
    window.removeEventListener("scroll", changeNavbg);
   }
 }, [])
 
  return (
    <nav className={`${navbg && "bg-[#1E1344]"} sticky top-0 z-20`}>
        <div className=' px-5 lg:px-10 xl:px-0  xl:w-container mx-auto flex flex-col md:flex-row md:justify-between md:items-center py-8'>
        {/* logo */}
       <div className='w-full md:w-1/5 flex md:block justify-between items-center'>
       <Link  to="/">
            <img src={logo} alt="logo"/>
       </Link>
            {
              show ?
            <RxCross2 className='text-blue-500 cursor-pointer text-2xl md:hidden'
            onClick={()=>setShow(!show)}
            />
            :
            <TiThMenu className='text-blue-500 cursor-pointer text-2xl md:hidden'
            onClick={()=>setShow(!show)}
            />
            }
        </div>
       

        {/* menu */}
     
        <div  className= { show ? "block text-secondary lg:flex  items-center gap-x-[38px]" : "hidden text-secondary md:flex  items-center gap-x-[38px] "}    >
            <ul className='  flex flex-col md:flex-row gap-x-[22px] font-inter font-normal text-base relative after:contents-[""] after:absolute after:bg-[#FCFCFC] after:w-[1px] after:h-[20px] after:top-1/2 after:-right-5 after:-translate-y-1/2 space-y-2 md:space-y-0 my-5' >
                <li className='hover:text-[#00C0FF] transition-all duration-500'>
                  <NavLink to="/" className={({ isActive }) =>isActive ? "text-[#00C0FF] font-bold" : ""}>
                  Home
                  </NavLink>
                </li>
                <li className='hover:text-[#00C0FF] transition-all duration-500'>
                  <NavLink to ="/about" className={({isActive})=> isActive ? "text-[#00C0FF] font-bold":""}>

                  About
                  </NavLink>
                  </li>
                <li className='hover:text-[#00C0FF] transition-all duration-500'>
                  <NavLink to="/service" className={({isActive})=> isActive && "text-[#00C0FF] font-bold"}>
                  Service
                  </NavLink>
                  </li>
                <li className='hover:text-[#00C0FF] transition-all duration-500'>
                  <NavLink to="/portfolio" className={({isActive})=> isActive && "text-[#00C0FF] font-bold"}>Portfolio</NavLink>
                  </li>
                <li className='hover:text-[#00C0FF] transition-all duration-500'>
                  <NavLink to="/contact" className={({isActive})=> isActive && "text-[#00C0FF] font-bold"}>Contact</NavLink>
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