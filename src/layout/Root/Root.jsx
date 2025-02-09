import React from 'react'
import { Outlet } from "react-router";
import  Navbar  from "../Navbar/Navbar";


const Root = () => {
  return (
    <div className='bg-bodyImg bg-cover bg-center'>
        <Navbar/>
        <main>
        <Outlet />
        </main>
    </div>
  )
}

export default Root