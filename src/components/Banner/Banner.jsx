import React, { useEffect, useState } from 'react'
import bannerImg from "../../assets/banner_img.png"
import Button from '../Ui/Button/Button';
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router';

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
    <section>
        <div className=' p-5 lg:p-10 mb-5 lg:mb-0 xl:p-0 xl:w-container mx-auto xl:h-[calc(100vh-169px)]'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center md:mt-[60px] ]'>
            <header className=' m-auto md:m-0 md:order-none order-2 '>
                <h1 className=' text-secondary font-popins font-semibold  text-3xl md:text-[2.6875rem] lg:text-6xl xl:text-[4.6875rem]'>Md Imon <span className='text-primary'>Rana</span> </h1>
                <p className='font-popins font-medium text-xl py-2 md:py-0  lg:text-[1.9375rem] text-secondary w-[0ch] whitespace-nowrap overflow-hidden animate-typeWriter delay-75 border-r-2 border-white   '>{typeTextData}</p>
                 <div className='flex gap-x-10 font-popins'>
                  <Link to="/contact">
                 <Button className='mt-[30px] cursor-pointer block m-auto md:ml-0 font-medium'>Get Connected</Button>
                </Link>
                <a href='https://drive.google.com/file/d/1PFral_yIR7qAhuXP1e0MTv7sOkoVsMDe/view?usp=sharing' target='_blank'>
                <button type='button' className="mt-[30px] cursor-pointer block m-auto md:ml-0 font-medium py-[14px] lg:py-[18px] px-[26px]  lg:px-[39px]  rounded-3xl md:rounded-[30px] font-popins lg:text-xl text-black  hover:text-white relative after:absolute after:contents-[''] after:bg-white  after:h-full after:w-full after:bottom-0 after:left-0 hover:after:-bottom-[100%] hover:bg-primary transition-all after:duration-400 duration-400 overflow-hidden after:z-[-1] z-2"> 
                  View Resume 
                  </button>
                </a>
                 </div>
            </header>
            <Tilt tiltMaxAngleX = {10} tiltMaxAngleY = {10}>
            <figure className='md:order-none order-1 ' >
                <img   src={bannerImg} alt="bannerImg" className=' md:w-[300px] lg:w-auto mb-10  md:mb-0 m-auto md:m-0' />
            </figure>
            </Tilt>
            </div>
        </div>
    </section>
  )
}

export default Banner

