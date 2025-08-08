import React from 'react'
import SectionTitle from '../Ui/SectionTitle/SectionTitle'
import Address from './Address'
import ContactFrom from './ContactFrom'



const Contact = () => {
  return (
    <section>
        <div className='p-5 lg:px-10 xl:px-0 xl:p-0 xl:w-container mx-auto'>
            <SectionTitle subTitle="Contact" title="I Want to Hear from You"/>
            <div className='flex sm:flex-row flex-col space-y-14 sm:space-x-14 md:space-x-5 sm:space-y-0  justify-between mt-24'>
           <Address/>
           <ContactFrom/>
            </div>
        </div>
    </section>
  )
}

export default Contact