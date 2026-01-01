import React from "react";
import { Container, Row, Col ,Card} from "react-bootstrap";


const AboutUsPage=()=> {
    return (
    <Container>
      <Card>
        <Card.Header className='text-center'> حول</Card.Header>
        <Card.Body>
          <Card.Text>
              <p> تم التصميم والبرمجة بواسطة المهندس عبدالعزيز برغوث +963991820491</p>
          </Card.Text>
        </Card.Body>
      </Card>
      {/* <h1 className="text-center">About Us</h1>
      <hr />
      <Row className="">
        <Col md lg='4' sm='8'className="mx-auto">
          <p>We are a team of developers who are passionate about creating web applications.</p>
        </Col>
      </Row> */}
    </Container>
  );
}

export default AboutUsPage;