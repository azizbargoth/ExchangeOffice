import React from "react";
import { Col,Row ,Form,FormLabel,Button,Card,Container} from "react-bootstrap";
import { Link } from "react-router-dom";
const RegisterPage=()=> {
  return (
    <Container>
      <Card  className='mt-2 mx-3 mb-5'>
        <Card.Header><h4 className="text-center">مستخدم جديد</h4></Card.Header>
        <Card.Body>

      <Row className="">
        <Col md lg='4' sm='8'className="mx-auto">
 
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="username"  >الاسم الكامل:</Form.Label>
              <Form.Control type="text"  id="username" placeholder="Full Name " />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">البريد الالكتروني:</Form.Label>
               <Form.Control type="email" placeholder="name@example.com" id="regEmail"/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="password" >كلمة السر:</Form.Label>
              <Form.Control type="password"  id="regPassword" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="password" >تأكيد كلمة السر:</Form.Label>
              <Form.Control type="password"  id="confirmPassword" placeholder="Confirm Password" />
            </Form.Group>
            <Form.Group className="my-3">
               <p>Already have an account  <Link to="/Login" className="text-decoration-underline text-primary">Login</Link> here!</p>
            </Form.Group>
            <Button type="submit" className=" btn-success w-100">Register</Button>
          </Form>
        </Col>
      </Row>
        </Card.Body>
      </Card>

    </Container>
  );
}

export default RegisterPage;
