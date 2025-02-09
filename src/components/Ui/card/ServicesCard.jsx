import React from 'react'
import Tilt from "react-parallax-tilt"


const ServicesCard = ({icon, title, pera}) => {

  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
    <div className="bg-[#3A2B71] w-[320px] rounded-[30px]  py-[55px] px-7 h-full   group">
      <div className='bg-[#432D92] w-20 h-20 rounded-full mx-auto relative'>
      {icon}
      </div>
      <div className='font-popins text-secondary text-center mt-5'>
        <h4 className='font-semibold text-[21px]'>
        {title}
        </h4>
        <p className='font-normal text-base text-justify mt-10 text-[#B4AFC6]'>
          {pera}
        </p>
      </div>
    </div>
    </Tilt>
  )
}

export default ServicesCard