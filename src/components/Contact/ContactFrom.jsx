import React, { useRef, useState } from 'react'


import emailjs from '@emailjs/browser';

const ContactFrom = () => {
  const [formData, setFromData] = useState({
    from_name:"",
    from_email:"",
    from_number:"",
    from_subject:"",
    message:"",
  });

  const form = useRef();

  const handelChange =(e)=>{
    setFromData({...formData, [e.target.name] : e.target.value})
   }
    const sendEmail = (e) => {
        e.preventDefault();
        if(formData.from_name && formData.from_email && formData.from_number && formData.from_subject &&  formData.message ){
          emailjs
            .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
              publicKey: import.meta.env.VITE_PUBLIC_KEY,
            })
            .then(
              () => {
                console.log('SUCCESS!');
                setFromData({  name:"",
                  email:"",
                  subject:"",
                  phone:"",
                  message:"",})
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
            );
          }
          else{
            console.log("Please fill all field ")
          }
          
      };

  return (
    <div className=' w-[529px] '>
        <form action=""  ref={form} onSubmit={sendEmail}
        className ="text-secondary font-popins space-x-7 space-y-7">
        <input onChange={(e)=>handelChange(e)} value={formData.name}
        className='border border-primary outline-none rounded-lg px-3.5 py-2'
        type="text" name="from_name" id="from_name" placeholder='Your Name' />
        <input onChange={(e)=>handelChange(e)} value={formData.email}
        className='border border-primary outline-none rounded-lg px-4 py-2'
        type="email" name="from_email" id="from_email" placeholder='Your  Email' />
        <input onChange={(e)=>handelChange(e)} value={formData.phone}
         className='border border-primary outline-none rounded-lg px-4 py-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-moz-outer-spin-button]:appearance-none [&::-moz-inner-spin-button]:appearance-none'
        type="number" name="from_number" id="from_number" placeholder='Your Phone' />
        <input onChange={(e)=>handelChange(e)} value={formData.subject}
        className='border border-primary outline-none rounded-lg px-4 py-2'
        type="text" name="from_subject" id="from_subject" placeholder='Subject' />
        <textarea onChange={(e)=>handelChange(e)} value={formData.message}
        className='border border-primary outline-none rounded-lg px-4 py-2 w-[507px] h-36 resize-none'
        name="message" id="message" placeholder='Write your Message'></textarea>

     <button type='submit' className=' cursor-pointer py-2 px-4 rounded-[20px] font-popins text-lg text-secondary bg-secondary hover:text-black relative after:absolute after:contents-[""] after:bg-primary  after:h-full after:w-full after:top-0 after:left-0 hover:after:-top-[100%] transition-all after:duration-300 duration-300 overflow-hidden after:z-[-1] z-2'>Submit Now</button>
    
        </form>
 </div>
  )
}

export default ContactFrom