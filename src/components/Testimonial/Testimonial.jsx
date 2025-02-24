import React, { useState } from 'react'
import SectionTitle from '../Ui/SectionTitle/SectionTitle'
import testiProfileImg from "../../assets/testiProfile.png"
import testiImgTwo from "../../assets/about_img_imon.png"
import testiImgThree from "../../assets/testiImgThree.jpg"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from './TestimonialCard';


const Testimonial = () => {
const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: current => setCurrentSlide(current),
    appendDots: dots => (
      <div>
        <ul className='flex justify-center gap-x-5'> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className= {` mt-5 relative w-[35px] h-[35px]   rounded-full border-3 ${i === currentSlide ? "border-secondary bg-[#1F1345] " : "border-transparent" }`}
      >
        <div className='w-[20px] h-[20px]  bg-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
      </div>
    )
  };



const testiInfo = [

  {
    id : 1,
    testiBody: `Loved the template design, documentation, customizability and the 
                customer support from Marketify team! I am a noob in programming with 
                very little knowledge about coding but the Marketify team helped me to 
                launch my resume website successfully. Much recommended!`,
    testiProfile: testiProfileImg,  alt: "testiProfileImg", profileName : "Allen Walker", profileTitle :"web designer"

  },

  {
    id : 2,
    testiBody: `Loved the template design, documentation, customizability and the 
                customer support from Marketify team! I am a noob in programming with 
                very little knowledge about coding but the Marketify team helped me to 
                launch my resume website successfully. Much recommended!`,
    testiProfile: testiImgTwo, alt: "testiProfileImg", profileName : "Md. Imon Rana", profileTitle :"FrontEnd Developer"

  },

  {
    id : 3,
    testiBody: `Loved the template design, documentation, customizability and the 
                customer support from Marketify team! I am a noob in programming with 
                very little knowledge about coding but the Marketify team helped me to 
                launch my resume website successfully. Much recommended!`,
    testiProfile: testiImgThree, alt: "testiProfileImg", profileName : "Jems Smith", profileTitle :"UI UX Designer"

  }

];


  return (
    <section>
      <div className="w-container mx-auto">
        <SectionTitle subTitle = "Testimonials" title= "What Clients Say"/>

        <div className="slider-container">
      <Slider {...settings}>
      {testiInfo.map((item)=>(
        <TestimonialCard 
        key = {item.id}
          testiBody = {item.testiBody} 
          alt = {item.alt} 
          testiProfile = {item.testiProfile}
          profileName = {item.profileName}
          profileTitle ={item.profileTitle}
          
          />
      ))}
      </Slider>
    </div>
    
      </div>
    </section>
  )
}

export default Testimonial