import React from 'react'
import htmlLogo from "../../assets/htmlLogo.png"
import cssLogo from "../../assets/cssLogo.png"
import bootstraptLogo from "../../assets/bootstraptLogo.png"
import tailwindLogo from "../../assets/tailwindLogo.png"
import javaScriptLogo from "../../assets/javaScriptLogo.png"
import reactLogo from "../../assets/reactLogo.png"
import figmaLogo from "../../assets/figmaLogo.png"


const SkillsCard = () => {
  return (
    <section className='my-40'>
      <div className='w-container mx-auto'>
      <div className="bg-[#432D92] py-16 rounded-4xl">
        <figure className='flex justify-center'>
          <img className='h-24 grayscale hover:grayscale-0 cursor-pointer transition-all duration-300' title='HTML' src={htmlLogo} alt="htmlLogo" />
          <img className='h-24 -ml-4 grayscale hover:grayscale-0 cursor-pointer transition-all duration-300' title='CSS' src={cssLogo} alt="cssLogo" />
          <img className='h-24 -ml-4 mr-7 grayscale hover:grayscale-0 cursor-pointer transition-all duration-300' title='Bootstrapt' src={bootstraptLogo} alt="bootstraptLogo" />
          <img className='h-24 grayscale hover:grayscale-0 cursor-pointer transition-all duration-300' title='Tailwind' src={tailwindLogo} alt="tailwindLogo" />
          <img className='h-24 -ml-4 grayscale hover:grayscale-0 cursor-pointer transition-all duration-300' title='JavaScript' src={javaScriptLogo} alt="javaScriptLogo" />
          <img className='h-24 -ml-4 mr-7 grayscale hover:grayscale-0 cursor-pointer transition-all duration-300' title='React js' src={reactLogo} alt="reactLogo" />
          <img className='h-24 grayscale hover:grayscale-0 cursor-pointer transition-all duration-300' title='Figma' src={figmaLogo} alt="figmaLogo" />
        </figure>
        </div>
      </div>
    </section>
  )
}

export default SkillsCard