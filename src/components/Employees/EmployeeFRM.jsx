import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { numChange, numDown } from '../../js/handleinputKeys';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChevronDown, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import AddDepatment from './AddDepatment';
import { Card, Container,Collapse , Form, FormLabel, Button, Col, Row, Alert, OverlayTrigger,Tooltip, InputGroup, FormGroup, Accordion  } from 'react-bootstrap';



// ✅ Define Yup validation schema
const validationSchema = Yup.object().shape({
    firstName: Yup.string(),
    lastName: Yup.string(),
    fatherName: Yup.string(),
    jobTitle: Yup.string(),
    department: Yup.string(),
    email: Yup.string()
    .required('الإيميل مطلوب')
    .email('صيغة الإيميل غير صحيحة'),
  phone: Yup.string()
    .matches(/^\d{10,15}$/, 'رقم الهاتف يجب أن يحتوي على 10 إلى 15 رقم'),
});


const EmployeeFRM = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
    const [dep,setDepartment]=useState(false)
    const depForm=()=>{
        setDepartment(!dep);
    }
    const onSubmit1 = (data) => {
        alert(JSON.stringify(data));
    };
    const [open, setOpen] = useState(false);
    const [expand, setExpand] = useState(faChevronLeft);
    const expandBtn=()=>{
        setExpand(expand===faChevronLeft?faChevronDown:faChevronLeft);
    }
    const renderTooltip=(props) => (
    <Tooltip id="button-tooltip" {...props}>
        اضف قسم
    </Tooltip>
    )
  return (
    <Container>
      <Card border="warning" className='mt-2 mb-5'>
        <Card.Header><h3 className="text-center">الموظفين</h3></Card.Header>
        <Card.Body>
     
         <Card.Title className=' py-3 px-1 border border-success' >معلومات اساسية</Card.Title> 
            <Form onSubmit={handleSubmit(onSubmit1)}>
            <Row>
                <Form.Group as={Col} md={6}>
                        <FormLabel>الاسم الاول:</FormLabel>
                        <Form.Control
                            type="text"
                            {...register('firstName')}
                            isInvalid={!!errors.firstName}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.firstName?.message}
                        </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md={6}>
                    <FormLabel>الكنية</FormLabel>
                    <Form.Control
                        type="text"
                        {...register('lastName')}
                        isInvalid={!!errors.lastName}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.lastName?.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md={6}>
                    <FormLabel>اسم الاب:</FormLabel>
                    <Form.Control
                        type="text"
                        {...register('fatherName')}
                        isInvalid={!!errors.fatherName}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.fatherName?.message}
                    </Form.Control.Feedback>
                </Form.Group> {/*father name */}
            </Row>
            <Row>
            <Form.Group as={Col} md={6}>
                        <FormLabel>نوع الموظف :</FormLabel>
                        <Form.Control
                            type="text"
                            {...register('firstName')}
                            isInvalid={!!errors.firstName}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.firstName?.message}
                        </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md={6}>
                        <FormLabel>الكود :</FormLabel>
                        <Form.Control
                            type="text"
                            {...register('firstName')}
                            isInvalid={!!errors.firstName}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.firstName?.message}
                        </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md={6}>
                        <FormLabel>الحالة :</FormLabel>
                        <Form.Control
                            type="text"
                            {...register('firstName')}
                            isInvalid={!!errors.firstName}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.firstName?.message}
                        </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md={6}>
                        <FormLabel>الايميل :</FormLabel>
                        <Form.Control
                            type="text"
                            {...register('firstName')}
                            isInvalid={!!errors.firstName}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.firstName?.message}
                        </Form.Control.Feedback>
                </Form.Group>

            </Row>    
                <Col  md lg={12}> 
                <Button as={Col} md lg={8} className=' w-100 text-end bg-success bg-gradient p-3 my-3'
                    onClick={() => {setOpen(!open);expandBtn()}}
                    aria-controls="example-collapse"
                    aria-expanded={open}
                >
                    <FontAwesomeIcon icon={expand} /> <p className='d-inline'>بيانات شخصية</p>
                </Button>
                {console.log(expand)}
                <Collapse in={open}>
                    <div  id="example-collapse-text">
                        <Row>
                            <Form.Group as={Col} lg md={6}>
                                <FormLabel>الايميل:</FormLabel>
                                <Form.Control
                                    type="email"
                                    {...register('email')}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email?.message}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col}  lg md={6}>
                                <FormLabel>الهاتف:</FormLabel>
                                <Form.Control
                                    type="number"
                                    {...register('phone')}
                                    isInvalid={!!errors.phone}               
                                    onKeyDown={numDown}
                                    onChange={numChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.phone?.message}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} lg md={6}>
                                <FormLabel>الرقم الوطني:</FormLabel>
                                <Form.Control
                                    type="text"
                                    {...register('phone')}
                                    isInvalid={!!errors.phone}               
                                    onKeyDown={numDown}
                                    onChange={numChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.phone?.message}
                                </Form.Control.Feedback>
                            </Form.Group>
                            </Row>

                            <Form.Group as={Col} lg md={6}>
                                <FormLabel>الدولة:</FormLabel>
                                <Form.Control
                                    type="text"
                                    {...register('phone')}
                                    isInvalid={!!errors.phone}               
                                    onKeyDown={numDown}
                                    onChange={numChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.phone?.message}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} lg md={6}>
                                <FormLabel>المحافظة:</FormLabel>
                                <Form.Control
                                    type="text"
                                    {...register('phone')}
                                    isInvalid={!!errors.phone}               
                                    onKeyDown={numDown}
                                    onChange={numChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.phone?.message}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group  as={Col} lg md={6}>
                                <FormLabel>المدينة:</FormLabel>
                                <Form.Control
                                    type="text"
                                    {...register('phone')}
                                    isInvalid={!!errors.phone}               
                                    onKeyDown={numDown}
                                    onChange={numChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.phone?.message}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group  as={Col} lg md={6}>
                                <FormLabel>المنطفة:</FormLabel>
                                <Form.Control
                                    type="text"
                                    {...register('phone')}
                                    isInvalid={!!errors.phone}               
                                    onKeyDown={numDown}
                                    onChange={numChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.phone?.message}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group  as={Col} lg md={6}>
                                <FormLabel>عنوان 1:</FormLabel>
                                <Form.Control
                                    type="text"
                                    {...register('phone')}
                                    isInvalid={!!errors.phone}               
                                    onKeyDown={numDown}
                                    onChange={numChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.phone?.message}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group  as={Col} lg md={6}>
                                <FormLabel>عنوان 2:</FormLabel>
                                <Form.Control
                                    type="text"
                                    {...register('phone')}
                                    isInvalid={!!errors.phone}               
                                    onKeyDown={numDown}
                                    onChange={numChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.phone?.message}
                                </Form.Control.Feedback>
                            </Form.Group>

                    </div>
                </Collapse>
                </Col>{/** Collapse personal Info */}
                <Form.Group as={Col} md={6}>
                    <FormLabel>المنصب الوظيفي:</FormLabel>
                    <Form.Control type="text" {...register('jobTitle')} />
                </Form.Group>
                <Form.Group as={Col} md={6}>
                    <FormLabel>القسم:</FormLabel>   
                    
                        <InputGroup type="text" className='px-auto w-50 flex-row-reverse ' {...register('department')}>
                    
                        <OverlayTrigger  placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip} 
                            >
                        <Button variant="success" id="button-addon1" onClick={depForm} ><FontAwesomeIcon icon={faPlus} /></Button>  
                        </OverlayTrigger>
                        <Form.Control type='text'
                                            //aria-label="Example text with button addon"
                                            aria-describedby="basic-addon1"                                   
                                            />            
                            </InputGroup>   
                    <div id='divAddDepartment'>
                        {dep && <AddDepatment />}
                    </div>
                    {/* <AddDepatment id='divAddDepartment' /> */}
                </Form.Group>

                <Form.Group as={Col} md={6}>
                    <FormLabel>الراتب:</FormLabel>
                    <Form.Control
                        type="text"
                        {...register('phone')}
                        isInvalid={!!errors.phone}               
                        onKeyDown={numDown}
                        onChange={numChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.phone?.message}
                    </Form.Control.Feedback>
                </Form.Group>
            {/* </Col> */}
                <Row >
                  <Col md={6} >
                 
                <Button type="submit" className="m-3 px-4" variant={'success'}>
                تسجيل
                </Button>
                 </Col>
                </Row>
                <Accordion defaultActiveKey="0" alwaysOpen flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>

                <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>

                </Accordion.Item>
                </Accordion>

          </Form>
         
        </Card.Body>
      </Card>
    </Container>
  );
};

export default React.memo(EmployeeFRM);