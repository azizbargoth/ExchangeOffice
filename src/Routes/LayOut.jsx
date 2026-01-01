import { Outlet } from 'react-router-dom'
import {useState}from 'react'
import NavBar1 from '../Components/NavBar1'
import NavBar2 from '../Components/NavBar2'
import Footer from '../Components/Footer';
import SlideBar from '../Components/SlideBar';
import { Row, Col,Container,Accordion } from 'react-bootstrap'; 
import './layout.css';
const Layout = () => {
  const [sidebaropen,setSidebarOpen]=useState(true);
 const[sidebarWidth,setSideBarWidth]=useState('16.6667%');
    return (
 
<div className="d-flex flex-row-reverse vh-100" dir="rtl">
      {/* {sidebaropen?} */}
      {/* Sidebar */}
      <div className="position-fixed top-0 end-0 vh-100 overflow-auto" style={ {width: sidebarWidth} }>
        <SlideBar />
      </div>
      {/* Main Content */}
      <div className="flex-grow-1 ms-auto" style={{ marginRight: '16.6667%' }}>
        <div className="sticky-top w-100 bg-body-tertiary">
          {/* <NavBar /> */}
          <NavBar1 />
          {/* <NavBar2 /> */}
        </div>
        <div className="overflow-auto p-lg-5 main-area bg-gradient  " style={{ height: 'calc(100vh - 56px)' }}>
          <div className=" rounded-3">
          <Outlet /></div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
    )
  }
  
  export default Layout;