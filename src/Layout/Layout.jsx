import React from 'react'
import Navbar from '../Components/ShareCompo/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Components/ShareCompo/Footer'
import WhiteNav from '../Components/ShareCompo/WhiteNav';

export default function Layout() {

  const location = useLocation();

  const isHomePage = location.pathname == "/";

  return (
    <div>
      {isHomePage ? <Navbar></Navbar> : <WhiteNav></WhiteNav>}


      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
