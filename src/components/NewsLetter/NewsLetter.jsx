import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Tilt from 'react-parallax-tilt'
const NewsLetter = () => {
    const [newsLetterEmail, setNewsLetterEmail] = useState("")
    const form = useRef();


    const handelChange =(e)=>{
        setNewsLetterEmail(e.target.value)
    }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_NEWSLETTER_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          setNewsLetterEmail("")
        },
        (error) => {
          alert( error.text);
        },
      );
  };

  return (
    <section className='mt-10 md:mt-20 lg:mt-40'>
        <div className='p-5 lg:p-0 lg:w-container mx-auto'>
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>

            <div className='bg-[#432D92]  lg:px-20 pt-10 pb-26 lg:pt-24 lg:pb-24 px-10 rounded-4xl flex md:flex-row flex-col gap-x-24 md:gap-x-3 lg:gap-x-24 items-center'>
                <div className='font-popins font-bold space-y-4 lg:space-y-0'>
                    <h6 className='text-sm lg:text-xl text-primary'>Subscribe Now</h6>
                    <h4 className='text-2xl lg:text-[2.375rem] text-secondary'>Get My Newsletter</h4>
                    <p className='text-sm lg:text-base text-info'>Get latest news, tips and tricks in your inbox</p>
                </div>
                <div className='relative w-fit'>
                    <form action="" ref={form} onSubmit={sendEmail}>
                    <input value={newsLetterEmail} onChange={(e)=> handelChange(e)}
                    className=' w-48 md:w-[250px]  lg:w-[300px] px-4 py-4 lg:mt-0 mt-4 md-px-[10px] lg:px-[20px] md:py-[26px] bg-white rounded-[15px] outline-none font-popins font-semibold text-base'
                    type="email" name="newsEmail" id="newsEmail"  placeholder='Your e-mail here'/>
                    <input className='bg-primary py-4 px-4 mt-2 md:py-6  lg:mt-0 lg:py-[25px] lg:px-[20px] font-popins font-bold text-lg rounded-lg md:rounded-r-[15px] text-secondary absolute left-0 md:left-auto md:bottom-auto md:top-1/2 -bottom-18 md:-right-20 lg:-right-28 md:-translate-y-1/2 cursor-pointer'
                     type="submit" value="Send Now" />

                    </form>
                </div>
            </div>
          </Tilt>
        </div>
    </section>
  )
}

export default NewsLetter