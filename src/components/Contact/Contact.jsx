import React from 'react'
import SectionTitle from '../Ui/SectionTitle/SectionTitle'
import Address from './Address'
import ContactFrom from './ContactFrom'



const Contact = () => {
  return (
    <section>
        <div className='p-5 lg:p-0 lg:w-container mx-auto'>
            <SectionTitle subTitle="Contact" title="I Want to Hear from You"/>
            <div className='flex md:flex-row flex-col space-y-14 md:space-x-5 md:space-y-0  justify-between mt-24'>
           <Address/>
           <ContactFrom/>
            </div>
        </div>
    </section>
  )
}

export default Contact