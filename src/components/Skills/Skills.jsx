import React, { useEffect, useRef, useState } from 'react'
import SectionTitle from '../Ui/SectionTitle/SectionTitle'






const Skills = () => {

  const skillsRef = useRef(null)
  const [ htmlProgress, setHtmlProgress] = useState(0);
  const [ cssProgress, setCssProgress] = useState(0);
  const [ bootstraptProgress, setBootstraptProgress] = useState(0);
  const [ tailwindProgress, setTailwindProgress] = useState(0);
  const [ javaScriptProgress, setJavaScriptProgress] = useState(0);
  const [ reactProgress, setReactProgress] = useState(0);
  
 
useEffect(()=>{
  let htmlIntervalId = null;
  let cssIntervalId = null;
  let bootstraptIntervalId = null;
  let tailwindIntervalId = null;
  let javaScriptIntervalId = null;
  let reactIntervalId = null;

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(item=>{
      if (item.isIntersecting) {

 // for html
        htmlIntervalId = setInterval(() => {
          setHtmlProgress((prev)=>{
            if (prev < 95) {
              const progress = prev +1;
              return progress;
            }else{
              clearInterval(htmlIntervalId);
              return prev;
            }
          });
        }, 10);

         // for css
         cssIntervalId = setInterval(() => {
          setCssProgress((prev)=>{
            if (prev < 95) {
              const progress = prev +1;
              return progress;
            }else{
              clearInterval(cssIntervalId);
              return prev;
            }
          });
        }, 10);


         // for bootstrapt
         bootstraptIntervalId = setInterval(() => {
          setBootstraptProgress((prev)=>{
            if (prev < 90) {
              const progress = prev +1;
              return progress;
            }else{
              clearInterval(bootstraptIntervalId);
              return prev;
            }
          });
        }, 10);


         // for tailwind
         tailwindIntervalId = setInterval(() => {
          setTailwindProgress((prev)=>{
            if (prev < 90) {
              const progress = prev +1;
              return progress;
            }else{
              clearInterval(tailwindIntervalId);
              return prev;
            }
          });
        }, 10);

         // for JavaScript
         javaScriptIntervalId = setInterval(() => {
          setJavaScriptProgress((prev)=>{
            if (prev < 80) {
              const progress = prev +1;
              return progress;
            }else{
              clearInterval(javaScriptIntervalId);
              return prev;
            }
          });
        }, 10);


         // for react
         reactIntervalId = setInterval(() => {
          setReactProgress((prev)=>{
            if (prev < 90) {
              const progress = prev +1;
              return progress;
            }else{
              clearInterval(reactIntervalId);
              return prev;
            }
          });
        }, 10);
      }
      else{

        clearInterval(htmlIntervalId);
        clearInterval(cssIntervalId);
        clearInterval(bootstraptIntervalId);
        clearInterval(tailwindIntervalId);
        clearInterval(javaScriptIntervalId);
        clearInterval(reactIntervalId);

        setHtmlProgress(0);
        setCssProgress(0);
        setBootstraptProgress(0);
        setTailwindProgress(0);
        setJavaScriptProgress(0);
        setReactProgress(0);
      }
    })
  },{threshold:0.1});

if (skillsRef.current) {
  
  observer.observe(skillsRef.current);
}

return ()=>{
  observer.disconnect();
  clearInterval(htmlIntervalId);
  clearInterval(cssIntervalId);
  clearInterval(bootstraptIntervalId);
  clearInterval(tailwindIntervalId);
  clearInterval(javaScriptIntervalId);
  clearInterval(reactIntervalId);
} 

},[])






  return (
    <section className='my-[160px]'>
        <div className='w-container mx-auto'>
            <SectionTitle 
            subTitle="Skills"
            title = "I Work Hard to Improve My Skills Regularly"
             />

              {/* 
              ============== Progress bar start ============
              */}
             <div  ref={skillsRef} className='font-popins font-medium text-lg text-secondary flex justify-between mt-[90px]'>

              <div className='space-y-[30px]'>
             <div className='relative'>
              <p className='mb-[11px]'>HTML</p>
              <label className='block absolute top-0 right-0' htmlFor="html">{htmlProgress}%</label>
              <progress className='w-[432px] h-[8px] appearance-none [&::-webkit-progress-bar]:bg-[#D9D9D9] [&::-webkit-progress-value]:bg-primary [&::-webkit-progress-bar]:rounded-[15px] [&::-webkit-progress-value]:rounded-l-[15px] [&::-moz-progress-bar]:bg-[#D9D9D9] [&::-moz-progress-value]:bg-primary [&::-moz-progress-bar]:rounded-[15px] [&::-moz-progress-value]:rounded-l-[15px]'
              value={htmlProgress} max={100} 
              ></progress>
             </div>

             <div className='relative'>
              <p className='mb-[11px]'>Css</p>
              <label className='block absolute top-0 right-0' htmlFor="css">{cssProgress}%</label>
              <progress className='w-[432px] h-[8px] appearance-none [&::-webkit-progress-bar]:bg-[#D9D9D9] [&::-webkit-progress-value]:bg-primary [&::-webkit-progress-bar]:rounded-[15px] [&::-webkit-progress-value]:rounded-l-[15px] [&::-moz-progress-bar]:bg-[#D9D9D9] [&::-moz-progress-value]:bg-primary [&::-moz-progress-bar]:rounded-[15px] [&::-moz-progress-value]:rounded-l-[15px]'
              value={cssProgress} max={100} 
              ></progress>
             </div>

             <div className='relative'>
              <p className='mb-[11px]'>Java Script</p>
              <label className='block absolute top-0 right-0' htmlFor="javaScript">{javaScriptProgress}%</label>
              <progress className='w-[432px] h-[8px] appearance-none [&::-webkit-progress-bar]:bg-[#D9D9D9] [&::-webkit-progress-value]:bg-primary [&::-webkit-progress-bar]:rounded-[15px] [&::-webkit-progress-value]:rounded-l-[15px] [&::-moz-progress-bar]:bg-[#D9D9D9] [&::-moz-progress-value]:bg-primary [&::-moz-progress-bar]:rounded-[15px] [&::-moz-progress-value]:rounded-l-[15px]'
              value={javaScriptProgress} max={100} 
              ></progress>
             </div>
             </div>

             <div className='space-y-[30px]'>
             <div className='relative'>
              <p className='mb-[11px]'>Bootstrapt</p>
              <label className='block absolute top-0 right-0' htmlFor="bootstrapt">{bootstraptProgress}%</label>
              <progress className='w-[432px] h-[8px] appearance-none [&::-webkit-progress-bar]:bg-[#D9D9D9] [&::-webkit-progress-value]:bg-primary [&::-webkit-progress-bar]:rounded-[15px] [&::-webkit-progress-value]:rounded-l-[15px] [&::-moz-progress-bar]:bg-[#D9D9D9] [&::-moz-progress-value]:bg-primary [&::-moz-progress-bar]:rounded-[15px] [&::-moz-progress-value]:rounded-l-[15px]'
              value={bootstraptProgress} max={100} 
              ></progress>
             </div>

             <div className='relative'>
              <p className='mb-[11px]'>Tailwind</p>
              <label className='block absolute top-0 right-0' htmlFor="tailwind">{tailwindProgress}%</label>
              <progress className='w-[432px] h-[8px] appearance-none [&::-webkit-progress-bar]:bg-[#D9D9D9] [&::-webkit-progress-value]:bg-primary [&::-webkit-progress-bar]:rounded-[15px] [&::-webkit-progress-value]:rounded-l-[15px] [&::-moz-progress-bar]:bg-[#D9D9D9] [&::-moz-progress-value]:bg-primary [&::-moz-progress-bar]:rounded-[15px] [&::-moz-progress-value]:rounded-l-[15px]'
              value={tailwindProgress} max={100} 
              ></progress>
             </div>

             <div className='relative'>
              <p className='mb-[11px]'>React.js</p>
              <label className='block absolute top-0 right-0' htmlFor="react">{reactProgress}%</label>
              <progress className='w-[432px] h-[8px] appearance-none [&::-webkit-progress-bar]:bg-[#D9D9D9] [&::-webkit-progress-value]:bg-primary [&::-webkit-progress-bar]:rounded-[15px] [&::-webkit-progress-value]:rounded-l-[15px] [&::-moz-progress-bar]:bg-[#D9D9D9] [&::-moz-progress-value]:bg-primary [&::-moz-progress-bar]:rounded-[15px] [&::-moz-progress-value]:rounded-l-[15px]'
              value={reactProgress} max={100} 
              ></progress>
             </div>
             </div>

             </div>
              {/* 
              ============== Progress bar end ============
              */}

        </div>
    </section>
  )
}

export default Skills