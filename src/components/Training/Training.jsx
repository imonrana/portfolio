import React from 'react'
import SectionTitle from '../Ui/SectionTitle/SectionTitle'
import { HiOutlineLightBulb } from "react-icons/hi";
const Training = () => {
  return (
    <section>
        <div className='p-5 lg:px-10 xl:p-0 xl:w-container mx-auto'>
            <SectionTitle className="space-y-5" subTitle="Professional Training" title= "Professional IT training form reputed IT centers"/>
        <div className='font-popins text-secondary h-full mt-[60px]'>
            <div className='space-y-12 relative after:absolute after:contents-[""] after:h-full after:w-[1px] after:bg-info after:top-0 after:left-7 z-[1] after:z-[-1]'>
            {/* item - one */}
            <article className='flex gap-x-[25px] '>
              <div className='relative w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full bg-primary self-start '>
              <HiOutlineLightBulb  className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl  '/>
              </div>
              <div className='space-y-3.5  w-[200px] md:w-auto '>
                <h4 className='font-semibold text-lg md:text-2xl'>MERN STACK Development  <span className='text-sm text-info'> (May 2024- Present)</span></h4>
                <h5 className='font-semibold text-lg md:text-base '>Creative IT Institute, Dhanmondi-04 </h5>
                <p className='font-normal text-sm text-info md:w-[370px]'>Learning Web Development, & App Development.</p>
              </div>
            </article>
        
            {/* item - two */}
            <article className='flex gap-x-[25px]'>
              <div className='relative w-[50px] h-[50px] md:w-[60px] md:h-[60px]  rounded-full bg-primary self-start '>
              <HiOutlineLightBulb  className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl  '/>
              </div>
              <div className='space-y-3.5 w-[200px] md:w-auto  '>
                <h4 className='font-semibold text-2xl'> Professional Web Design<span className='text-sm text-info'>  (Oct 2022 - Dec 2022)</span></h4>
                <h5 className='font-semibold text-base '>Creative IT Institute, Dhanmondi-04</h5>
                <p className='font-normal text-sm text-info md:w-[370px]'>Learn Responsive Professional web design.  </p>
              </div>
            </article>

            {/* item - three */}
            <article className='flex gap-x-[25px]'>
              <div className='relative w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full bg-primary self-start '>
              <HiOutlineLightBulb  className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl  '/>
              </div>
              <div className='space-y-3.5 w-[200px] md:w-auto  '>
                <h4 className='font-semibold text-2xl'> Basic Computer Training<span className='text-sm text-info'>  (April 2017 - July 2017)</span></h4>
                <h5 className='font-semibold text-base '>Reliable Computer Institute & Training Center (RCITC), Mirpur-11</h5>
                <p className='font-normal text-sm text-info md:w-[370px]'>Learn Microsoft Office Application & Bijoy Keyboard Typing.  </p>
              </div>
            </article>

            </div>
           </div>
        </div>
    </section>
  )
}

export default Training