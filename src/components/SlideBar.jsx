import React,{useMemo,useState} from 'react'
import Footer from './Footer';
import { FaUsers, FaMoneyBill, FaFileInvoice, FaChartPie } from "react-icons/fa";
import './slidebar.css'
import {Accordion,ListGroup,Nav,CloseButton}from "react-bootstrap";
import { Link } from 'react-router-dom';
const SlideBar = () => {
  const [collapsed,setCollapsed]=useState(false);
 
  return (
    // <div className="w-64 h-full fixed bg-gray-800 text-white p-4">
        <div  className={`slidebar h-full fiexd ${collapsed ? 'collapsed' : ''}`}>
          
          <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
                  {collapsed ? '☰' :  '✖'}
                </button>

        <h3 className='text-2x font-bold slidebar-header relative text-center '>SlideBar</h3>
        <Accordion className='mt-5 p-0'>
            <Accordion.Item  eventKey="0">
               <Accordion.Header ><span  className='px-2'><FaUsers /></span><span className='mx-3'>{!collapsed && 'ادارة الموظفين'}</span> </Accordion.Header>
                                {!collapsed && (
                <Accordion.Body className='p-0 m-0  '>
  
                  <ListGroup as="ul" className='p-0 w-100 rounded-0 '>
                    <ListGroup.Item as ="li" action variant="light"className='hover:bg-gray-700'><Nav.Link as={Link} to="employees" >ادارة الموظفين</Nav.Link></ListGroup.Item>
                     <ListGroup.Item as ="li" action variant="light"> اعدادات الموظفين</ListGroup.Item>
                  </ListGroup>
                </Accordion.Body>)}
            </Accordion.Item>
                <Accordion.Item  eventKey="1">
               <Accordion.Header > <span  className='px-2'><FaChartPie /></span><span className='mx-3'>{!collapsed && 'ادارة الحسابات'}</span> </Accordion.Header>
                <Accordion.Body className='p-0 m-0  '>
                  <ListGroup variant="flush">
                    <ListGroup.Item variant="light" action ><Nav.Link as={Link} to="employees">ادارة الموظفين</Nav.Link></ListGroup.Item>
                    <ListGroup.Item variant="light" action><Nav.Link as={Link} to="contact">اتصل بنا</Nav.Link></ListGroup.Item>
                    <ListGroup.Item variant="light" action> <Nav.Link as={Link} to="About">about</Nav.Link></ListGroup.Item>
                    <ListGroup.Item variant="light" action><Nav.Link as={Link} to="login">تسجيل الدخول</Nav.Link></ListGroup.Item>
                    <ListGroup.Item variant="light" action><Nav.Link as={Link} to="employeeAc">تسجيل ككك</Nav.Link></ListGroup.Item>
                  </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item  eventKey="2">
               <Accordion.Header><span  className='px-2'><FaFileInvoice /></span><span className='mx-3'>{!collapsed && 'السندات '}</span> </Accordion.Header>
                <Accordion.Body className='p-0 m-0  '>
                  <ListGroup variant="flush">
                    <ListGroup.Item variant="light" action><Nav.Link as={Link} to="ReceiptVoucher">سند قبض</Nav.Link></ListGroup.Item>
                    <ListGroup.Item variant="light" action><Nav.Link as={Link} to="contact"> سند دفع</Nav.Link></ListGroup.Item>
                    <ListGroup.Item variant="light" action className='hover:bg-gray-700 '><Nav.Link as={Link} to="MonyBoxs">الصندوق</Nav.Link></ListGroup.Item>
                  </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item  eventKey="3">
               <Accordion.Header><span  className='px-2'><FaMoneyBill /></span><span className='mx-3'>{!collapsed && 'الحسابات '}</span>  </Accordion.Header>
                <Accordion.Body className='p-0 m-0  '>
                  <ListGroup variant="flush">
                    <ListGroup.Item variant="light" action><Nav.Link as={Link} to="employees"> اضافة حساب</Nav.Link></ListGroup.Item>
                    <ListGroup.Item variant="light" action><Nav.Link as={Link} to="contact">ادارة الحسابات</Nav.Link></ListGroup.Item>
                    <ListGroup.Item variant="light" action><Nav.Link as={Link} to="About">شجرة الحسابات</Nav.Link></ListGroup.Item>
                  </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
  )
}

export default React.memo(SlideBar) 