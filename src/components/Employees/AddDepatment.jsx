import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { Button, Card, CardBody, CardTitle, Container, Form, InputGroup } from 'react-bootstrap';
import {ToggleAddBTNType,CloseDepFrmType,AddDepartmentType,UPDATE_DEPARTMENT_TYPE }from '../../Redux/Acitions/departmentActions.js' 

function AddDepatment() {
    const [input,setInput]=useState('');
    const dispatch=useDispatch();
    const handleSave=()=>{
        if (input.trim()!='')
        {
            dispatch(AddDepartmentType(input));//save and close 
            setInput('');    
            localStorage.setItem("testLocal","light");
        }
    };
    return (
       <Container className=''>
        <Card>
        <Card.Header>اضافة فسم جديد</Card.Header>
        <CardBody>

                {/* <Form.Lable>القسم</Form.Lable>
                <Form.Input typt> */}

                {/* </Form.Input> */}
                <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">+</InputGroup.Text>
                            <Form.Control
                            type='select'
                            value={input}
                            onChange={(e)=>{setInput(e.target.value)}}                            
                            placeholder="ألقسم"
                            aria-label="القسم"
                            //aria-describedby="basic-addon1"
                            />
                </InputGroup>
                <Button onClick={handleSave}>حفظ</Button>
     
        </CardBody>
        </Card>
       </Container> 
    )
}

export default AddDepatment
