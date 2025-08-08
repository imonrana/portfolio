import React, { useEffect, useState } from 'react'
import { FaCircleArrowUp } from "react-icons/fa6";


const BackToTop = () => {

const [showButton, setShowButton] = useState(false);


 useEffect(()=>{
    const handleScroll = ()=>{
        if (window.scrollY >= 300) {
            setShowButton(true);
        }
        else{
            setShowButton(false);
        }
    }

    window.addEventListener("scroll", handleScroll);
    return()=>{
        window.removeEventListener("scroll", handleScroll);
    }

 },[]);


 const handleScrollTo = ()=>{
   window.scrollTo( {
    top:0,
    behavior:"smooth"
   })
 }

  return (
    <div>
        {
            showButton &&
        <button  onClick={handleScrollTo} title='Back To Top' className=' z-10 cursor-pointer fixed bottom-20 right-5'>
            <FaCircleArrowUp className='text-white text-2xl md:text-4xl hover:text-red-500 transition-all duration-300' />
        </button>
        }
    </div>
  )
}

export default BackToTop