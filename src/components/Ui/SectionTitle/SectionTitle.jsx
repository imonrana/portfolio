import React from 'react'

const SectionTitle = ({className, subTitle, title}) => {
  return (
    <header className={` mx-auto w-[650px]  text-center ${className}`}>
        <h5 className='font-popins font-semibold text-[1.3125rem] text-primary'>{subTitle}</h5>
        <h2 className='font-popins font-semibold text-[2.5rem] text-[#FFFFFF] '>{title}</h2>
    </header>
  )
}

export default SectionTitle