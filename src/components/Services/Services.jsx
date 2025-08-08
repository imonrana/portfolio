import React from 'react'
import SectionTitle from '../Ui/SectionTitle/SectionTitle'
import Tilt from "react-parallax-tilt"

import Icon from '@mdi/react';
import { mdiMonitorShimmer } from '@mdi/js';
import { mdiDeveloperBoard } from '@mdi/js';
import { FaFigma } from "react-icons/fa";



const Services = () => {
  return (
    <section >
        <div className='p-5 lg:px-5 xl:p-0 xl:w-container mx-auto'>
            <SectionTitle subTitle="Services" title= "What I Do for My Clients"/>

            <div className='flex flex-col gap-y-10  lg:gap-y-0 md:flex-wrap md:w-[650px]  md:flex-row md:gap-x-2 lg:gap-x-0 lg:w-auto  justify-between space-x-0 mt-[90px] '>
                {/* 
                ===========card one==========
                 */}
               
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                  <div className="bg-[#3A2B71] md:w-[320px] rounded-[30px]  py-[55px] px-7 h-full   group ">
                    <div className='bg-[#432D92] group-hover:bg-primary  w-20 h-20 rounded-full mx-auto relative transition-all duration-300 '>
                    <Icon path={mdiMonitorShimmer}   className=' w-[60px] h-[60px] text-[#00C0FF] group-hover:text-secondary absolute -top-[10px] -left-[20px] group-hover:top-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2  group-hover:-translate-y-1/2 group-hover:w-[50px] group-hover:h-[50px] transition-all duration-300'/>
                    </div>
                    <div className='font-popins text-secondary text-center mt-5'>
                      <h4 className='font-semibold text-[21px]'>
                      Responsive Web Design
                      </h4>
                      <p className='font-normal text-base text-justify mt-10 text-info'>
                      Build a strong online presence with a complete website design solution. average 1000's of design features, customizable templates and the power of AI.
                      </p>
                    </div>
                  </div>
                  </Tilt>

                {/* 
                =============card two ===============
                */}
               
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                  <div className="bg-[#3A2B71] md:w-[320px] rounded-[30px]  py-[55px] px-7 h-full   group">
                    <div className='bg-[#432D92] group-hover:bg-primary w-20 h-20 rounded-full mx-auto relative transition-all duration-300'>
                    <Icon path={mdiDeveloperBoard}   className=' w-[60px] h-[60px] text-[#00C0FF] group-hover:text-secondary absolute -top-[10px] -left-[20px] group-hover:top-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2  group-hover:-translate-y-1/2 group-hover:w-[50px] group-hover:h-[50px] transition-all duration-300'/>
                    </div>
                    <div className='font-popins text-secondary text-center mt-5'>
                      <h4 className='font-semibold text-[21px]'>
                      Frontend Development
                      </h4>
                      <p className='font-normal text-base text-justify mt-10 text-info'>
                      Having a positive attitude can help you build a more uplifting work environment. Dedicated employees are excited to start the workday, seeing all the potential possibilities of their hard work.
                      </p>
                    </div>
                  </div>
                  </Tilt>

                {/* 
                ==============card three============
                 */}
            
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                  <div className="bg-[#3A2B71] md:w-[320px] rounded-[30px]  py-[55px] px-7 h-full   group">
                    <div className='bg-[#432D92] group-hover:bg-primary w-20 h-20 rounded-full mx-auto relative transition-all duration-300'>
                    <FaFigma className='text-[3.75rem] text-[#00C0FF] group-hover:text-secondary absolute -top-[10px] -left-[20px] group-hover:top-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2  group-hover:-translate-y-1/2 group-hover:text-[3.125rem] transition-all duration-300' />
                    </div>
                    <div className='font-popins text-secondary text-center mt-5'>
                      <h4 className='font-semibold text-[21px]'>
                      Figma Design
                      </h4>
                      <p className='font-normal text-base text-justify mt-10 text-info'>
                      As a Figma Designer I create user-friendly web and mobile app designs. I will do creating wireframes, UI elements and interactive prototype designs using Figma's amazing collaborative interface design tool.
                      </p>
                    </div>
                  </div>
                  </Tilt>
             
            </div>
        </div>
    </section>
  )
}

export default Services