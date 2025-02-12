import React from 'react'
import SectionTitle from '../Ui/SectionTitle/SectionTitle'
import Experience from './Experience'
import Education from './Education'




const Rusume = () => {
  return (
    <section className='my-[160px]'>
        <div className='w-container mx-auto'>
            <SectionTitle className= "!w-[550px]" subTitle="Resume" title = "Here's My Work Experience & Education "/>
            <div className='flex justify-between items-baseline mt-[60px]'>
           <Experience/>
           <Education/>

        </div>

        </div>
    </section>
  )
}

export default Rusume