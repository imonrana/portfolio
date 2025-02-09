import React from 'react'
import SectionTitle from '../Ui/SectionTitle/SectionTitle'
import ServicesCard from '../Ui/card/servicesCard'

import Icon from '@mdi/react';
import { mdiMonitorShimmer } from '@mdi/js';
import { mdiDeveloperBoard } from '@mdi/js';
import { FaFigma } from "react-icons/fa";



const Services = () => {
  return (
    <section className='my-[50px]'>
        <div className='w-container mx-auto'>
            <SectionTitle subTitle="Services" title= "What I Do for My Clients"/>

            <div className='flex justify-between mt-[90px] '>
                {/* card one */}
                <ServicesCard 
                icon = {<Icon path={mdiMonitorShimmer}   className=' w-[60px] h-[60px] text-[#00C0FF] absolute -top-[10px] -left-[20px] group-hover:top-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2  group-hover:-translate-y-1/2 group-hover:w-[50px] group-hover:h-[50px] transition-all duration-300'/>}
                title = "Responsive Web Design"
                pera= "Build a strong online presence with a complete website design solution. average 1000's of design features, customizable templates and the power of AI."
                />

                {/* card two */}
                <ServicesCard 
                icon = {<Icon path={mdiDeveloperBoard}   className=' w-[60px] h-[60px] text-[#00C0FF] absolute -top-[10px] -left-[20px] group-hover:top-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2  group-hover:-translate-y-1/2 group-hover:w-[50px] group-hover:h-[50px] transition-all duration-300'/>}
                title = "Frontend Development"
                pera= "Having a positive attitude can help you build a more uplifting work environment. Dedicated employees are excited to start the workday, seeing all the potential possibilities of their hard work."
                />

                {/* card three */}
                <ServicesCard 
                icon = {<FaFigma className='text-[3.75rem] text-[#00C0FF] absolute -top-[10px] -left-[20px] group-hover:top-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2  group-hover:-translate-y-1/2 group-hover:text-[3.125rem] transition-all duration-300' />}
                title = "Figma Design"
                pera= "As a Figma Designer I create user-friendly web and mobile app designs. I will do creating wireframes, UI elements and interactive prototype designs using Figma's amazing collaborative interface design tool."
                />
             
            </div>
        </div>
    </section>
  )
}

export default Services