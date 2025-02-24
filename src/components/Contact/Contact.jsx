import React from 'react'
import SectionTitle from '../Ui/SectionTitle/SectionTitle'
import Address from './Address'
import ContactFrom from './ContactFrom'



const Contact = () => {
  return (
    <section>
        <div className='w-container mx-auto'>
            <SectionTitle subTitle="Contact" title="I Want to Hear from You"/>
            <div className='flex justify-between mt-24'>
           <Address/>
           <ContactFrom/>
            </div>
        </div>
    </section>
  )
}

export default Contact