import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
const TestimonialCard = (props) => {
    const {testiBody, testiProfile, alt, profileName, profileTitle, id} = props;

  return (
    <div key={id} className='font-popins mt-14 w-[685px] mx-auto'>
        <div className='w-fit mx-auto'><FaQuoteLeft className='text-[4.6875rem] text-primary font-bold'/></div>
        <div className='font-semibold text-lg text-secondary italic text-center mt-16'>{testiBody}</div>
        <div className='flex items-center gap-x-5 mt-10 mx-auto w-fit'>
            <div className='w-[65px] h-[65px]  overflow-hidden rounded-full'>
            <img src={testiProfile} alt="alt"/>
            </div>
            <div className='space-y-2 '>
            <p className='font-medium text-lg text-secondary'>{profileName}</p>
            <p className='font-normal text-base text-info'>{profileTitle}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard