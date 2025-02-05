import React, { useEffect, useState } from 'react'
import bannerImg from "../../assets/banner_img.png"
import Button from '../Button/Button'

import Tilt from 'react-parallax-tilt';
const Banner = () => {
  const [typeTextData, setTypeTextData] = useState("Frontend Developer")
  const typeData = ["Frontend Developer", "React.js Developer", "Web Designer"];

// for daynamic type text data



useEffect(()=>{
  const interval = setInterval(()=>{
    setTypeTextData((prevData)=>{
      const currentIndex = typeData.indexOf(prevData);
      const nextIndex = (currentIndex +1) % typeData.length
      return typeData[nextIndex];
    })
  },7000);
  return ()=> clearInterval(interval)
},[])


  return (
    <section >
        <div className='w-container mx-auto h-[calc(100vh-169px)]'>
            <div className='flex justify-between items-center mt-[60px] ]'>
            <header>
                <h1 className=' text-[#FFFFFF] font-popins font-semibold text-[4.6875rem]'>Md Imon <span className='text-primary'>Rana</span> </h1>
                <p className='font-popins font-medium text-[1.9375rem] text-[#FFFFFF] w-[0ch] whitespace-nowrap overflow-hidden animate-typeWriter delay-75 border-r-2 border-white   '>{typeTextData}</p>
                 <Button className='mt-[30px] cursor-pointer'>Get Connected</Button>
                
            </header>
            <Tilt tiltMaxAngleX = {10} tiltMaxAngleY = {10}>
            <figure>
                <img  src={bannerImg} alt="bannerImg" />
            </figure>
            </Tilt>
            </div>
        </div>
    </section>
  )
}

export default Banner

