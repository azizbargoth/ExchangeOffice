import React,{useMemo} from "react";
import { Col,Row ,Form,FormLabel,Button,Card,Container} from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage=()=> {
  const memoizedValue = useMemo(() => {
    // Some expensive computation or data fetching
    return null; // Replace with actual value
  }, []);
  const handleSubmit = (e) => { };

  return (
    <Container>
      <Card  className='mt-2 mx-3 mb-5'>
        <Card.Header> <h4 className="text-center">تسجيل الدخول</h4></Card.Header>
        <Card.Body>
          <Card.Text>
      <Row className="">
        <Col md lg='4' sm='8'className="mx-auto">
        <Form>
          <Form.Group controlId="formBasicEmail">
             <Form.Label>البريد الالكتروني:</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
         <Form.Group controlId="formBasicPassword">
            <Form.Label>كلمة السر:</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
            <div className="my-3">
                <p>Haven't account <Link to="/register" className="text-decoration-underline text-primary">Register</Link> here!</p>
            </div>
          <Button  type="submit" className=" w-100 mb-4" variant={'success'}>
            Submit
          </Button>
        </Form>
        </Col>
      </Row>
          </Card.Text>
        </Card.Body>
      </Card>
      
    </Container>
  );
}

export default React.memo(LoginPage) ;
