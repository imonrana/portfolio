import React from 'react'
import { Outlet } from "react-router";
import  Navbar  from "../Navbar/Navbar";
import Footer from '../../components/Footer/Footer';


const Root = () => {
  return (
    <div className='bg-bodyImg bg-center'>
        <Navbar/>
        <main>
        <Outlet />
        </main>
        <Footer/>
    </div>
  )
}

export default Root