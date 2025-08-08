import React from 'react'

const Button = ({className, children}) => {
  return (
    <button type='button' className={` ${className} py-[14px] lg:py-[18px] px-[26px]  lg:px-[39px]  rounded-3xl md:rounded-[30px] font-popins lg:text-xl text-secondary bg-secondary hover:text-black relative after:absolute after:contents-[""] after:bg-primary  after:h-full after:w-full after:top-0 after:left-0 hover:after:-top-[100%] transition-all after:duration-300 duration-300 overflow-hidden after:z-[-1] z-2` }>{children}</button>
  )
}

export default Button