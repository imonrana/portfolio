import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
const Education = () => {
  return (
     <div className='font-popins text-secondary h-full'>
        <h3 className='font-semibold text-[2.5rem]'>Education</h3>
        <div className='mt-10 space-y-[87px] relative after:absolute after:contents-[""] after:h-full after:w-[1px] after:bg-info after:top-0 after:left-7 z-[1] after:z-[-1]'>
        {/* item - one */}
        <article className='flex gap-x-[25px]'>
          <div className='relative w-[60px] h-[60px] rounded-full bg-primary self-start  '>
          <FaGraduationCap  className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl  '/>
          </div>
          <div className='space-y-3.5'>
            <h4 className='font-semibold text-2xl'>Diploma in computer <span className='text-sm text-info'> (Aug 2018 - Mar 2023)</span></h4>
            <h5 className='font-semibold text-base '>Classic Engineering Institute Of Technology, Sirajganj.</h5>
            <p className='font-normal text-sm text-info w-[370px]'>Learn Computer Technology </p>
          </div>
        </article>
    
        {/* item - two */}
        <article className='flex gap-x-[25px]'>
          <div className='relative w-[60px] h-[60px] rounded-full bg-primary  self-start '>
          <FaGraduationCap  className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl  '/>
          </div>
          <div className='space-y-3.5'>
            <h4 className='font-semibold text-2xl'>Secondary School <span className='text-sm text-info'> (Jan  2011 -  Feb 2018)</span></h4>
            <h5 className='font-semibold text-base '>Goalbathan High School , Sirajganj.</h5>
            <p className='font-normal text-sm text-info w-[370px]'>Foundation of my knowledge. </p>
          </div>
        </article>
        </div>
       </div>
  )
}

export default Education