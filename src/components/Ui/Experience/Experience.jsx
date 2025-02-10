import React from 'react'
import { FaBriefcase } from "react-icons/fa6";


const Experience = () => {
  return (
    <div className='font-popins text-secondary h-full'>
    <h3 className='font-semibold text-[2.5rem]'>Experience</h3>
    <div className='mt-10 space-y-12 relative after:absolute after:contents-[""] after:h-full after:w-[1px] after:bg-info after:top-0 after:left-7 z-[1] after:z-[-1]'>
    {/* item - one */}
    <article className='flex gap-x-[25px]'>
      <div className='relative w-[60px] h-[60px] rounded-full bg-primary self-start '>
      <FaBriefcase  className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl  '/>
      </div>
      <div className='space-y-3.5'>
        <h4 className='font-semibold text-2xl'>IT Officer <span className='text-sm text-info'> (Mar 2023 - Apr 2024)</span></h4>
        <h5 className='font-semibold text-base '>Echo cotton Mill’s Ltd, Gazipur.</h5>
        <p className='font-normal text-sm text-info w-[370px]'>Network Support, ERP software , CCTV support, It equipment maintains, It support , HR. Management ect.</p>
      </div>
    </article>

    {/* item - two */}
    <article className='flex gap-x-[25px]'>
      <div className='relative w-[60px] h-[60px] rounded-full bg-primary self-start '>
      <FaBriefcase  className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl  '/>
      </div>
      <div className='space-y-3.5'>
        <h4 className='font-semibold text-2xl'>Computer Operator <span className='text-sm text-info'>(May 2021 - May 2022)</span></h4>
        <h5 className='font-semibold text-base '>Babu Computer, Sirajganj.</h5>
        <p className='font-normal text-sm text-info w-[370px]'>Data Entry, Computer Compose, Online application submit ect.</p>
      </div>
    </article>
    </div>
   </div>
  )
}

export default Experience