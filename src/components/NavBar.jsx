
import React, { useEffect, useMemo, useState } from 'react';
import {
  Button,
  InputGroup,
  Container,
  Nav,
  Navbar,
  Form,
  Dropdown,
  Stack,
  NavDropdown
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import logo1 from '../assets/Companylogo.png';
import { toggleTheme_TYPE } from '../Redux/Acitions/themeActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function NavBar() {

    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.theme.darkMode);
  
    const handleToggle = () => {
      dispatch(toggleTheme_TYPE());
    };
  
    useEffect(() => {
      document.body.setAttribute('data-bs-theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);
  


  return (
    
    <Navbar expand="md" className="bg-body-tertiary"  fixed="left" sticky="left"  variant={darkMode ? 'dark' : 'light'} >
      <Container fluid>
        <Stack>
        
          <Stack gap={1} direction='horizontal'>
                <Button variant='transparent' onClick={handleToggle}>
                            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="" />
                </Button>
                <InputGroup className='px-auto w-50 flex-row-reverse '>
                  <Button variant="outline-secondary" id="button-addon1" >
                    بحث
                  </Button>
                  <Form.Control 
                    // placeholder='اكتب للبحث'
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <div >
                  {/* <div id="clock" className='ms-2'>       
                  </div>
                  <div id='date1'>
                    <DateDisplay />
                  </div> */}
                </div>
          </Stack>
          <Navbar collapseOnSelect expand="md" >       
              <Container  className='m-0 p-0'>
                      <Navbar.Brand href="/Home" className='me-auto'>
                        <img src={logo1} alt="logo" width={30} height={30} />
                      </Navbar.Brand>
                      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                      <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                          <Nav.Link as={Link} to="/Home" >الرئيسية</Nav.Link>                     
                          <NavDropdown title='تنظيم سند' id="basic-nav-dropdown" >
                            <NavDropdown.Item href='#' className='text-end fs-6'>سند قبض</NavDropdown.Item>
                            <NavDropdown.Divider  />
                            <NavDropdown.Item href='#' className='text-end fs-6'>سند دفع</NavDropdown.Item>
                          </NavDropdown>
                          <Nav.Link as={Link} to="employees">ادارة الموظفين</Nav.Link>
                          <Nav.Link as={Link} to="contact">اتصل بنا</Nav.Link>
                          <Nav.Link as={Link} to="About">about</Nav.Link>
                          <Nav.Link as={Link} to="login">تسجيل الدخول</Nav.Link>
                          <Nav.Link as={Link} to="employeeAc">تسجيل ككك</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
              </Container>
          </Navbar>
        </Stack>
      </Container>   
    </Navbar >

  )
}

export default React.memo(NavBar) 