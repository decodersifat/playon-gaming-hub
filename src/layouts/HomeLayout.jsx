import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function HomeLayout() {


  

  return (
    <div className="bg-gradient-to-b from-gray-900 overflow-hidden to-black">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default HomeLayout;
