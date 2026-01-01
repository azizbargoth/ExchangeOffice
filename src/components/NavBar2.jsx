
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
function NavBar2() {

  return (
    
    <Navbar className="bg-body-tertiary "  fixed="right" sticky="right"   >
      <Container fluid className=''>
        
         
              {/* <div className='d-flex w-50'> */}

                <InputGroup className='me-auto'   >
                  <Button variant="success" id="button-addon1" className='rounded-0'>
                    Save
                  </Button>
                </InputGroup>
              {/* </div> */}
                <div >
                  {/* <div id="clock" className='ms-2'>       
                  </div>
                  <div id='date1'>
                    <DateDisplay />
                  </div> */}
                </div>
      </Container>   
    </Navbar >

  )
}

export default React.memo(NavBar2) 