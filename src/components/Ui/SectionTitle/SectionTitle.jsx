import React from 'react'

const SectionTitle = ({className, subTitle, title}) => {
  return (
    <header className={` mx-auto md:w-[650px]  text-center ${className}`}>
        <h5 className='  font-popins font-semibold md:text-2xl lg:text-[1.3125rem] text-primary'>{subTitle}</h5>
        <h2 className='font-popins font-semibold text-xl md:text-3xl lg:text-[2.5rem] text-[#FFFFFF] '>{title}</h2>
    </header>
  )
}

export default SectionTitle