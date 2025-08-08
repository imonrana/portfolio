import React from 'react'
import { Outlet } from "react-router";
import  Navbar  from "../Navbar/Navbar";
import Footer from '../../components/Footer/Footer';
import BackToTop from '../../components/BackToTop/BackToTop';


const Root = () => {
  return (
    <div className='bg-bodyImg bg-center relative'>
        <Navbar/>
        <BackToTop/>
        <main>
        <Outlet />
        </main>
        <Footer/>
    </div>
  )
}

export default Root