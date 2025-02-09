import React from 'react'

const SectionTitle = ({className, subTitle, title}) => {
  return (
    <header className={`${className} mx-auto w-fit text-center`}>
        <h5 className='font-popins font-semibold text-[1.3125rem] text-primary'>{subTitle}</h5>
        <h2 className='font-popins font-semibold text-[2.5rem] text-[#FFFFFF] w-[650px] mt-[2.8125rem]'>{title}</h2>
    </header>
  )
}

export default SectionTitle