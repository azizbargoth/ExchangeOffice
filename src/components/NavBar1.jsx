
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
function NavBar1() {

    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.theme.darkMode);
  
    const handleToggle = () => {
      dispatch(toggleTheme_TYPE());
    };
  
    useEffect(() => {
      document.body.setAttribute('data-bs-theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);
  


  return (
    
    <Navbar expand="md" className="bg-body-tertiary "  fixed="left" sticky="left"  variant={darkMode ? 'dark' : 'light'} >
      <Container fluid>
        <Stack>
        
          <Stack gap={1} direction='horizontal'>
              {/* <div className='d-flex w-50'> */}
                <Button variant='transparent' onClick={handleToggle}>
                            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="" />
                </Button>
                <InputGroup className='px-auto w-50 flex-row-reverse '   size="sm">
                  <Button variant="outline-secondary" id="button-addon1" >
                    بحث
                  </Button>
                  <Form.Control 
                
                    // placeholder='اكتب للبحث'
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              {/* </div> */}
                <div >
                  {/* <div id="clock" className='ms-2'>       
                  </div>
                  <div id='date1'>
                    <DateDisplay />
                  </div> */}
                </div>
          </Stack>
        </Stack>
      </Container>   
    </Navbar >

  )
}

export default React.memo(NavBar1) 