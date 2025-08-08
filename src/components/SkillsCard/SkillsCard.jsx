import React from 'react'
import Tilt from 'react-parallax-tilt'
import htmlLogo from "../../assets/htmlLogo.png"
import cssLogo from "../../assets/cssLogo.png"
import bootstraptLogo from "../../assets/bootstraptLogo.png"
import tailwindLogo from "../../assets/tailwindLogo.png"
import javaScriptLogo from "../../assets/javaScriptLogo.png"
import reactLogo from "../../assets/reactLogo.png"
import figmaLogo from "../../assets/figmaLogo.png"


const SkillsCard = () => {
  return (
    <section className='my-20 lg:my-40'>
      <div className=' p-5 lg:p-0 lg:px-10 xl:px-0 xl:w-container mx-auto'>
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}  >

      <div className="bg-[#432D92] py-4 md:py-16 rounded-4xl">
        <figure className='flex justify-center  flex-wrap'>
          <img className='w-20 h-20 my-2 lg:my-0 lg:h-24  lg:w-24 grayscale hover:grayscale-0 cursor-pointer transition-all duration-300' title='HTML' src={htmlLogo} alt="htmlLogo" />
          <img className='w-20 h-20 my-2 lg:my-0 lg:h-24  lgw-24  -ml-4 grayscale hover:grayscale-0 cursor-pointer transition-all duration-300' title='CSS' src={cssLogo} alt="cssLogo" />
          <img className='w-20 h-20 my-2 lg:my-0 lg:h-24  lg:w-24 -ml-4 mr-7 grayscale hover:grayscale-0 cursor-pointer transition-all duration-300' title='Bootstrapt' src={bootstraptLogo} alt="bootstraptLogo" />
          <img className='w-20 h-20 my-2 lg:my-0 lg:h-24  lg:w-24 grayscale hover:grayscale-0 cursor-pointer transition-all duration-300' title='Tailwind' src={tailwindLogo} alt="tailwindLogo" />
          <img className='w-20 h-20 my-2 lg:my-0 lg:h-24  lg:w-24 -ml-4 grayscale hover:grayscale-0 cursor-pointer transition-all duration-300' title='JavaScript' src={javaScriptLogo} alt="javaScriptLogo" />
          <img className='w-20 h-20 my-2 lg:my-0 lg:h-24  lg:w-24 -ml-4 mr-7 grayscale hover:grayscale-0 cursor-pointer transition-all duration-300' title='React js' src={reactLogo} alt="reactLogo" />
          <img className='w-20 h-20 my-2  lg:my-0 lg:h-24  lg:w-24 grayscale hover:grayscale-0 cursor-pointer transition-all duration-300' title='Figma' src={figmaLogo} alt="figmaLogo" />
        </figure>
        </div>
        </Tilt>
      </div>
    </section>
  )
}

export default SkillsCard