import React,{useMemo} from "react";
import { Col,Row ,Form,FormLabel,Button,Card} from "react-bootstrap";
import { Link } from "react-router";
const ContactUsPage=()=> {
  return (

  <Card  className='mt-2 mx-3 mb-5'>
      <Card.Header className="text-center" ><FormLabel >الاتصال بنا</FormLabel></Card.Header>
      <Card.Body>
      <Row >
        
      {/* <hr /> */}
        <Col md lg='4' sm='8'className="mx-auto">
          <Form>
            <Form.Group className="mb-3" controlId="contactName">
              <Form.Label>الاسم:</Form.Label>
              <Form.Control type="email" placeholder="احمد .." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactEmail">
              <Form.Label>البريد الالكتروني:</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactMessage">
              <Form.Label>الرسالة:</Form.Label>
              <Form.Control as="textarea" rows={3} />
          </Form.Group>
            <Button type="submit" className=" w-100 mb-4" variant={'success'}>ارسال
                        </Button>
            {/* <div className="text-center"><button type="submit" className="btn btn-success w-100" variant="outline-success">send</button></div>  */}
          </Form>
        </Col>
      </Row>
      </Card.Body>
    </Card>
  );
}

export default React.memo(ContactUsPage);
