import React from 'react'
import SectionTitle from '../Ui/SectionTitle/SectionTitle'
import Experience from './Experience'
import Education from './Education'




const Rusume = () => {
  return (
    <section className='my-[60px] md:my-[160px] '>
        <div className='p-5 lg:px-10 xl:p-0 xl:w-container mx-auto'>
            <SectionTitle className= "md:!w-[550px]" subTitle="Resume" title = "Here's My Work Experience & Education "/>
            <div className='flex flex-col lg:flex-row justify-between items-baseline space-y-[60px] mt-[60px]'>
           <Experience/>
           <Education/>

        </div>

        </div>
    </section>
  )
}

export default Rusume