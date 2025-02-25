import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
const NewsLetter = () => {
    const [nesLetterEmail, setNewsLetterEmail] = useState("")
    const form = useRef();


    const handelChange =(e)=>{
        setNewsLetterEmail(e.target.value)
    }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_NEWSLETTER_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setNewsLetterEmail("")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className='my-40'>
        <div className='w-container mx-auto'>
            <div className='bg-[#432D92] py-24 px-20 rounded-4xl flex gap-x-24 items-center'>
                <div className='font-popins font-bold'>
                    <h6 className='text-xl text-primary'>Subscribe Now</h6>
                    <h4 className='text-[2.375rem] text-secondary'>Get My Newsletter</h4>
                    <p className='text-base text-info'>Get latest news, tips and tricks in your inbox</p>
                </div>
                <div className='relative w-fit'>
                    <form action="" ref={form} onSubmit={sendEmail}>
                    <input value={nesLetterEmail} onChange={(e)=> handelChange(e)}
                    className='px-[20px] py-[26px] bg-white rounded-[15px] outline-none font-popins font-semibold text-base'
                    type="email" name="newsEmail" id="newsEmail"  placeholder='Your e-mail here'/>
                    <input className='bg-primary py-[25px] px-[20px] font-popins font-bold text-lg rounded-r-[15px] text-secondary absolute top-1/2 -right-28 -translate-y-1/2 cursor-pointer'
                     type="submit" value="Send Now" />

                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewsLetter