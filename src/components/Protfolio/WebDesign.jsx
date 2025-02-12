import React from 'react'
import webDesignProjectOne from "../../assets/webDesignProjectOne.png"
import applandingProject from "../../assets/webDesignApplanding.png"
import batlesProject from "../../assets/WebDesignbatlesProject.png"
import gamerProject from "../../assets/webDesigngamer.png"
import teaHoseProject from "../../assets/webDesignTeaHouse.png"
import fruitBrustProject from "../../assets/webDesignFruitBrust.png"
import inovateProject from "../../assets/webDesignInovate.png"
import finsweetProject from "../../assets/webDesignFinsweet.png"
import omahProject from "../../assets/webDesignOmahProject.png"
import queryProject from "../../assets/webDesignQuery.png"



import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoSass } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
const WebDesign = () => {
  return (
    <div className='flex justify-between flex-wrap gap-y-14'>
        {/* project card one */}
        <div className='rounded-lg  bg-[#3A2B71] w-fit  '>
        <figure className='w-[340px] h-[340px] overflow-hidden relative rounded-lg cursor-pointer '>
            <img className='absolute top-0 left-0 hover:-translate-y-[75%] transition-normal duration-[6s]' src={webDesignProjectOne} alt="webDesignProjectOne" />
        </figure>
       <figcaption className='font-popins text-secondary px-5 py-4 space-y-5'>
        <p className='text-xl font-semibold'>Valentina</p>
        <div className='flex justify-between text-3xl text-info'>
        <div className=' flex gap-x-2 '>
        <FaHtml5 title='Html' className='cursor-pointer hover:text-secondary  transition-all duration-300'/>
        <IoLogoCss3 title = "Css" className='cursor-pointer  hover:text-secondary transition-all duration-300' />
        <FaBootstrap title = "Bootstrapt" className='cursor-pointer  hover:text-secondary transition-all duration-300' />
        </div>
        <div className='flex gap-x-4'>
            <a href="https://imonrana.github.io/fast-project/" target='_blank' title='Live view' className='hover:text-secondary transition-all duration-300'>
                <FaEye  />
            </a>
            <a href="https://github.com/imonrana/fast-project" target='_blank' title='GitHub Repo' className=' hover:text-secondary  transition-all duration-300'>
            <FaGithub />
            </a>
        </div>
            
        </div>
       </figcaption>
        </div>

          {/* project card two */}
          <div className='rounded-lg  bg-[#3A2B71] w-fit  '>
        <figure className='w-[340px] h-[340px] overflow-hidden relative rounded-lg cursor-pointer '>
            <img className='absolute top-0 left-0 hover:-translate-y-[75%] transition-normal duration-[6s]' src={applandingProject} alt="webDesignProjectOne" />
        </figure>
       <figcaption className='font-popins text-secondary px-5 py-4 space-y-5'>
        <p className='text-xl font-semibold'>App Landing</p>
        <div className='flex justify-between text-3xl text-info'>
        <div className=' flex gap-x-4 '>
        <FaHtml5 title='Html' className='cursor-pointer hover:text-secondary  transition-all duration-300'/>
        <IoLogoSass title = "SASS" className='cursor-pointer  hover:text-secondary transition-all duration-300' />
        <FaBootstrap title = "Bootstrapt" className='cursor-pointer  hover:text-secondary transition-all duration-300' />
        </div>
        <div className='flex gap-x-4'>
            <a href="https://imonrana.github.io/app_landing_project/" target='_blank' title='Live view' className='hover:text-secondary transition-all duration-300'>
                <FaEye  />
            </a>
            <a href="https://github.com/imonrana/app_landing_project" target='_blank' title='GitHub Repo' className=' hover:text-secondary  transition-all duration-300'>
            <FaGithub />
            </a>
        </div>
            
        </div>
       </figcaption>
        </div>

          {/* project card three */}
          <div className='rounded-lg  bg-[#3A2B71] w-fit  '>
        <figure className='w-[340px] h-[340px] overflow-hidden relative rounded-lg cursor-pointer '>
            <img className='absolute top-0 left-0 hover:-translate-y-[59%] transition-normal duration-[6s]' src={batlesProject} alt="batlesProject" />
        </figure>
       <figcaption className='font-popins text-secondary px-5 py-4 space-y-5'>
        <p className='text-xl font-semibold'>Batles</p>
        <div className='flex justify-between text-3xl text-info'>
        <div className=' flex gap-x-2 '>
        <FaHtml5 title='Html' className='cursor-pointer hover:text-secondary  transition-all duration-300'/>
        <IoLogoCss3 title = "Css" className='cursor-pointer  hover:text-secondary transition-all duration-300' />
        </div>
        <div className='flex gap-x-4'>
            <a href="https://imonrana.github.io/fast-project/" target='_blank' title='Live view' className='hover:text-secondary transition-all duration-300'>
                <FaEye  />
            </a>
            <a href="https://github.com/imonrana/fast-project" target='_blank' title='GitHub Repo' className=' hover:text-secondary  transition-all duration-300'>
            <FaGithub />
            </a>
        </div>
            
        </div>
       </figcaption>
        </div>

          {/* project card four */}
          <div className='rounded-lg  bg-[#3A2B71] w-fit  '>
        <figure className='w-[340px] h-[340px] overflow-hidden relative rounded-lg cursor-pointer '>
            <img className='absolute top-0 left-0 hover:-translate-y-[59%] transition-normal duration-[6s]' src={gamerProject} alt="gamerProject" />
        </figure>
       <figcaption className='font-popins text-secondary px-5 py-4 space-y-5'>
        <p className='text-xl font-semibold'>Gamer</p>
        <div className='flex justify-between text-3xl text-info'>
        <div className=' flex gap-x-2 '>
        <FaHtml5 title='Html' className='cursor-pointer hover:text-secondary  transition-all duration-300'/>
        <IoLogoCss3 title = "Css" className='cursor-pointer  hover:text-secondary transition-all duration-300' />
        
        </div>
        <div className='flex gap-x-4'>
            <a href="https://imonrana.github.io/B8A2-Gamer-Zone/" target='_blank' title='Live view' className='hover:text-secondary transition-all duration-300'>
                <FaEye  />
            </a>
            <a href="https://github.com/imonrana/B8A2-Gamer-Zone" target='_blank' title='GitHub Repo' className=' hover:text-secondary  transition-all duration-300'>
            <FaGithub />
            </a>
        </div>
            
        </div>
       </figcaption>
        </div>

          {/* project card five */}
          <div className='rounded-lg  bg-[#3A2B71] w-fit  '>
        <figure className='w-[340px] h-[340px] overflow-hidden relative rounded-lg cursor-pointer '>
            <img className='absolute top-0 left-0 hover:-translate-y-[65%] transition-normal duration-[6s]' src={teaHoseProject} alt="TeaHoseProject" />
        </figure>
       <figcaption className='font-popins text-secondary px-5 py-4 space-y-5'>
        <p className='text-xl font-semibold'>Tea House</p>
        <div className='flex justify-between text-3xl text-info'>
        <div className=' flex gap-x-2 '>
        <FaHtml5 title='Html' className='cursor-pointer hover:text-secondary  transition-all duration-300'/>
        <IoLogoCss3 title = "Css" className='cursor-pointer  hover:text-secondary transition-all duration-300' />
        <RiTailwindCssFill title = "Tailwind" className='cursor-pointer  hover:text-secondary transition-all duration-300' />
        </div>
        <div className='flex gap-x-4'>
            <a href="https://imonrana.github.io/tea-house-with-daisy-ui/" target='_blank' title='Live view' className='hover:text-secondary transition-all duration-300'>
                <FaEye  />
            </a>
            <a href="https://github.com/imonrana/tea-house-with-daisy-ui" target='_blank' title='GitHub Repo' className=' hover:text-secondary  transition-all duration-300'>
            <FaGithub />
            </a>
        </div>
        </div>
       </figcaption>
        </div>

          {/* project card six */}
          <div className='rounded-lg  bg-[#3A2B71] w-fit  '>
        <figure className='w-[340px] h-[340px] overflow-hidden relative rounded-lg cursor-pointer '>
            <img className='absolute top-0 left-0 hover:-translate-y-[59%] transition-normal duration-[6s]' src={fruitBrustProject} alt="FruitBrustProject" />
        </figure>
       <figcaption className='font-popins text-secondary px-5 py-4 space-y-5'>
        <p className='text-xl font-semibold'>Friut Brust</p>
        <div className='flex justify-between text-3xl text-info'>
        <div className=' flex gap-x-2 '>
        <FaHtml5 title='Html' className='cursor-pointer hover:text-secondary  transition-all duration-300'/>
        <IoLogoCss3 title = "Css" className='cursor-pointer  hover:text-secondary transition-all duration-300' />
        <RiTailwindCssFill title = "Tailwind" className='cursor-pointer  hover:text-secondary transition-all duration-300' />
        </div>
        <div className='flex gap-x-4'>
            <a href="https://imonrana.github.io/B8A3-fruit-brust/" target='_blank' title='Live view' className='hover:text-secondary transition-all duration-300'>
                <FaEye  />
            </a>
            <a href="https://github.com/imonrana/B8A3-fruit-brust" target='_blank' title='GitHub Repo' className=' hover:text-secondary  transition-all duration-300'>
            <FaGithub />
            </a>
        </div>
        </div>
       </figcaption>
        </div>

          {/* project card seven */}
          <div className='rounded-lg  bg-[#3A2B71] w-fit  '>
        <figure className='w-[340px] h-[340px] overflow-hidden relative rounded-lg cursor-pointer '>
            <img className='absolute top-0 left-0 hover:-translate-y-[82%] transition-normal duration-[6s]' src={inovateProject} alt="FruitBrustProject" />
        </figure>
       <figcaption className='font-popins text-secondary px-5 py-4 space-y-5'>
        <p className='text-xl font-semibold'>Inovate</p>
        <div className='flex justify-between text-3xl text-info'>
        <div className=' flex gap-x-2 '>
        <FaHtml5 title='Html' className='cursor-pointer hover:text-secondary  transition-all duration-300'/>
        <IoLogoCss3 title = "Css" className='cursor-pointer  hover:text-secondary transition-all duration-300' />
        <FaBootstrap title = "Bootstrapt" className='cursor-pointer  hover:text-secondary transition-all duration-300' />
        </div>
        <div className='flex gap-x-4'>
            <a href="https://imonrana.github.io/innovate/" target='_blank' title='Live view' className='hover:text-secondary transition-all duration-300'>
                <FaEye  />
            </a>
            <a href="https://github.com/imonrana/innovate" target='_blank' title='GitHub Repo' className=' hover:text-secondary  transition-all duration-300'>
            <FaGithub />
            </a>
        </div>
        </div>
       </figcaption>
        </div>
          {/* project card Eight */}
          <div className='rounded-lg  bg-[#3A2B71] w-fit  '>
        <figure className='w-[340px] h-[340px] overflow-hidden relative rounded-lg cursor-pointer '>
            <img className='absolute top-0 left-0 hover:-translate-y-[80%] transition-normal duration-[6s]' src={finsweetProject} alt="finsweetProject" />
        </figure>
       <figcaption className='font-popins text-secondary px-5 py-4 space-y-5'>
        <p className='text-xl font-semibold'>Finsweet</p>
        <div className='flex justify-between text-3xl text-info'>
        <div className=' flex gap-x-2 '>
        <FaHtml5 title='Html' className='cursor-pointer hover:text-secondary  transition-all duration-300'/>
        <IoLogoCss3 title = "Css" className='cursor-pointer  hover:text-secondary transition-all duration-300' />
        <FaBootstrap title = "Bootstrapt" className='cursor-pointer  hover:text-secondary transition-all duration-300' />
        </div>
        <div className='flex gap-x-4'>
            <a href="https://imonrana.github.io/finsweet-stellar/" target='_blank' title='Live view' className='hover:text-secondary transition-all duration-300'>
                <FaEye  />
            </a>
            <a href="https://github.com/imonrana/finsweet-stellar" target='_blank' title='GitHub Repo' className=' hover:text-secondary  transition-all duration-300'>
            <FaGithub />
            </a>
        </div>
        </div>
       </figcaption>
        </div>
          {/* project card Nine */}
          <div className='rounded-lg  bg-[#3A2B71] w-fit  '>
        <figure className='w-[340px] h-[340px] overflow-hidden relative rounded-lg cursor-pointer '>
            <img className='absolute top-0 left-0 hover:-translate-y-[63%] transition-normal duration-[6s]' src={omahProject} alt="omahProject" />
        </figure>
       <figcaption className='font-popins text-secondary px-5 py-4 space-y-5'>
        <p className='text-xl font-semibold'>Omah</p>
        <div className='flex justify-between text-3xl text-info'>
        <div className=' flex gap-x-2 '>
        <FaHtml5 title='Html' className='cursor-pointer hover:text-secondary  transition-all duration-300'/>
        <IoLogoCss3 title = "Css" className='cursor-pointer  hover:text-secondary transition-all duration-300' />
        </div>
        <div className='flex gap-x-4'>
            <a href="https://imonrana.github.io/omah/" target='_blank' title='Live view' className='hover:text-secondary transition-all duration-300'>
                <FaEye  />
            </a>
            <a href="https://github.com/imonrana/omah" target='_blank' title='GitHub Repo' className=' hover:text-secondary  transition-all duration-300'>
            <FaGithub />
            </a>
        </div>
        </div>
       </figcaption>
        </div>

          {/* project card Ten */}
          <div className='rounded-lg  bg-[#3A2B71] w-fit  '>
        <figure className='w-[340px] h-[340px] overflow-hidden relative rounded-lg cursor-pointer '>
            <img className='absolute top-0 left-0 hover:-translate-y-[70%] transition-normal duration-[6s]' src={queryProject} alt="queryProject" />
        </figure>
       <figcaption className='font-popins text-secondary px-5 py-4 space-y-5'>
        <p className='text-xl font-semibold'>Query</p>
        <div className='flex justify-between text-3xl text-info'>
        <div className=' flex gap-x-2 '>
        <FaHtml5 title='Html' className='cursor-pointer hover:text-secondary  transition-all duration-300'/>
        <IoLogoCss3 title = "Css" className='cursor-pointer  hover:text-secondary transition-all duration-300' />
        </div>
        <div className='flex gap-x-4'>
            <a href="https://imonrana.github.io/qwery/" target='_blank' title='Live view' className='hover:text-secondary transition-all duration-300'>
                <FaEye  />
            </a>
            <a href="https://github.com/imonrana/qwery" target='_blank' title='GitHub Repo' className=' hover:text-secondary  transition-all duration-300'>
            <FaGithub />
            </a>
        </div>
        </div>
       </figcaption>
        </div>
    </div>
  )
}

export default WebDesign