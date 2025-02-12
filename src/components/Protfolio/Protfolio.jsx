import React, { useState } from 'react'
import SectionTitle from '../Ui/SectionTitle/SectionTitle'
import WebDesign from './WebDesign';

const Protfolio = () => {
    const [showTab, setShowTab] = useState("all");

    function handelTabs(tab) {
        setShowTab(tab); 
    }

  return (
    <section className='my-[160px]'>
        <div className="w-container mx-auto">
            <SectionTitle subTitle="Portfolio" title="What I Do for My Clients"/>
            {/* 
            ===========navs tabs start==========
             */}
             {/* navs start */}
             <div className='font-popins font-semibold text-lg  space-x-10 mx-auto w-fit mt-16'>
                <button onClick={()=> handelTabs("all")} className={`${showTab === "all" ? "text-primary" : "text-secondary"} transition-all duration-300 cursor-pointer`}>All</button>
                <button onClick={()=> handelTabs("webDesign")} className={`${showTab === "webDesign" ? "text-primary" : "text-secondary"} transition-all duration-300 cursor-pointer`}>Web Design </button>
                <button onClick={()=> handelTabs("frontend")} className={`${showTab === "frontend" ? "text-primary" : "text-secondary"} transition-all duration-300 cursor-pointer`}>Frontend Development</button>
             </div>
             {/* tabs start */}
             <div className='text-secondary mt-16 '>
                <div className={`${showTab === "all" ? "block" : "hidden"}`}>
                    <WebDesign/>
                </div>
                <div  className={`${showTab === "webDesign" ? "block" : "hidden"}`}>
                    twoo
                </div>
                <div  className={`${showTab === "frontend" ? "block" : "hidden"}`}>
                    three
                </div>
             </div>
        </div>
    </section>
  )
}

export default Protfolio