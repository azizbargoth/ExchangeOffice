import React, { memo } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
const Footer=({ darkMode })=> {
   

  const footerStyle = {
    backgroundColor: darkMode ? '#212529' : '#f8f9fa',
    color: darkMode ? '#fff' : '#000',
    padding: '20px 0',
    borderTop: darkMode ? '1px solid #444' : '1px solid #ccc',
    textAlign: 'center',
    
  };

  return (
    <footer style={footerStyle} className="bg-body-tertiary " fixed="bottom" sticky="bottom">
      <Container>
        <Row>
          <Col>
            <p>© {new Date().getFullYear()} Money Exchange Office</p>
            <p>Contact: info@exchange.com | Phone: +963-xxx-xxx</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}




export default memo(Footer)
