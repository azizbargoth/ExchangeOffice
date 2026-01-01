import React,{useMemo,useState} from 'react'
import {useDispatch} from 'react-redux'
import Button from 'react-bootstrap/Button';
    
import { Container ,Col,Row,Modal,Form} from 'react-bootstrap';
const MonyBoxs = (props) => {
  const [classification,setClassification]=useState('');
    const dispatch=useDispatch(); 
    const [show, setShow] = useState(false);

    const handleSave=()=>{
        if (classification.trim()!='')
        {
            dispatch(AddDepartmentType(classification));//save and close 
            setClassification('');    
            localStorage.setItem("testLocal","light");
            handleCloseModal();
        }
    };
   
  const handleCloseModal = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container>
      <Row>
        <Col>
              <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
        <Modal centered show={show} onHide={handleCloseModal}
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
>
    <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>اسم التصنيف:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="تصنيف جديد"
                    autoFocus
                />
                </Form.Group>
                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                >
                <Form.Label>وصف التصنيف:</Form.Label>
                <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
    </Modal.Body>
    <Modal.Footer>
        <Button variant="secondary" onClick={handleSave()}>
            Save
        </Button>
        <Button variant="secondary" onClick={handleCloseModal}>
            Close
        </Button>
    </Modal.Footer>
</Modal>
        </Col>
      </Row>
    </Container>
  )
}

export default React.memo (MonyBoxs)


