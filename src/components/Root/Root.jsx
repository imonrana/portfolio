import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from "react-router";

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