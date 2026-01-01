import React, { useState } from 'react'
import { Accordion, Card, Col, Container, Form, FormLabel, Row, Tooltip, Button, InputGroup, OverlayTrigger, CardHeader,FormSelect } from 'react-bootstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { faChevronDown, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import {  useForm,FormProvider } from 'react-hook-form';
import { numChange, numDown } from '../../js/handleinputKeys.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddDepatment from './AddDepatment.jsx';
import EmployeeFamilyInfo from './EmployeeFamilyInfo.jsx';
import emlyment from '../../CountryLists/ContractTypes.json';
import CodeInputGroup from './CodeInputGroup.jsx';
import AdditonalEmpInfo from './AdditonalEmpInfo.jsx';
import EmployeeAddress from './EmployeeAddress.jsx';


const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("الاسم الاول مطلوب"),
    lastName: Yup.string().required("اسم العائلة مطلوب"),
    fatherName: Yup.string(),
    //employment info
    empID:Yup.string(),
    jobTitle: Yup.string(),
    empCode: Yup.string().required("epmloyee code needed"),
    empStatuse:Yup.string(),
    department: Yup.string(),
    salary:Yup.number(),
    empType:Yup.string(),
    // Country:Yup.string(),
    //additional personal and family info
    birthDate:Yup.date(),
    Gender: Yup.string().oneOf(['male', 'female', 'other'], 'الرجاء اختيار الجنس').required('الجنس مطلوب'),
    MaritalStatus:Yup.string(), 
    partnerName :Yup.string(),
    ChildNo:Yup.number(),
    nationalID: Yup.string().optional(),
    FamilyCardNo:Yup.string(),
    rigisterationNo:Yup.string(),
    RegistrationName:Yup.string(),
    FamilyNotes:Yup.string(),
    //address and contact info 
    Country:Yup.string(),
    AddState:Yup.string(),
    city:Yup.string(),
    regin:Yup.string(),
    street:Yup.string(),
    Adress1:Yup.string(),
    Adress2:Yup.string(),
    Mobile:Yup.string().matches(/^\d{10,15}$/, 'رقم الهاتف يجب أن يحتوي على 10 إلى 15 رقم'),
    postalCode:Yup.string(),
    AddressInfo:Yup.string(),
    email: Yup.string()
    .required('الإيميل مطلوب')
    .email('صيغة الإيميل غير صحيحة'),
  phone: Yup.string().matches(/^\d{10,15}$/, 'رقم الهاتف يجب أن يحتوي على 10 إلى 15 رقم'),
});

const GenderEnum ={
    female : "female",
    male : "male",
    other : "other",
  }

const EployeeAcording=()=> {

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

        const methods = useForm({
            resolver: yupResolver(validationSchema),
          });
          
    return (
        <Container>
                <Card border="warning" className='mt-2'>
                    <Card.Header><h4 className="text-center">الموظفين</h4></Card.Header>
                    <Card.Body>
                        <FormProvider {...methods}>
                        <Form onSubmit={methods.handleSubmit(onSubmit1)}>
                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                            <CardHeader className='d-line'>معلومات اساسية</CardHeader> 
                                <Accordion.Body>
                                    <Row>
                                        <Form.Group as={Col} md={3}>
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

                                        <Form.Group as={Col} md={3}>
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

                                        <Form.Group as={Col} md={3}>
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

                                        <Form.Group as={Col} md={3}>
                                                <FormLabel>الرقم الوظيفي :</FormLabel>
                                                <Form.Control
                                                    type="text"
                                                    {...register('empID')}
                                                    isInvalid={!!errors.empID}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.empID?.message}
                                                </Form.Control.Feedback>
                                </Form.Group>

                                        
                                <Form.Group as={Col} >
                                    <FormLabel>الراتب :</FormLabel>
                                <InputGroup  dir='ltr'>                                 
                                <Form.Select   style={{ flex: '1 1 auto' }} >
                                            <option value={"SY"}>SY</option>
                                            <option value={"DLR"}>$</option>
                                        </Form.Select>
                                    <Form.Control aria-label=""  type="number"
                                        {...register('salary')}
                                        isInvalid={!!errors.salary} style={{ flex: '5 1 auto' }}/>
                                    </InputGroup>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.salary?.message}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                
                                <Form.Group as={Col} md={4}>
                                                <FormLabel>نوع العقد :</FormLabel>
                                                <Form.Select
                                                    type="text"
                                                    {...register('empType')}
                                                    isInvalid={!!errors.empType}
                                                >
                                                    {emlyment.map((empType)=>(
                                                        <option key={empType.id} value={empType.id}>
                                                            {empType.employementType}
                                                        </option>
                                                    ))}
                                                    </Form.Select>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.empType?.message}
                                                </Form.Control.Feedback>
                                </Form.Group>

                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>معلومات إضافية</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <AdditonalEmpInfo />
                                    </Row>
                                    <Row>
                                        <EmployeeAddress />
                                    </Row>
                                    <Row>
                                        <EmployeeFamilyInfo />
                                    </Row>
                                <Row>
                                <Form.Group as={Col} md={4}>
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
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Button type="submit" className="m-3 px-4" variant={'success'}>
                        تسجيل
                        </Button>
                        </Form>
                        </FormProvider>
                    </Card.Body>
                </Card>
        </Container>
    );
}

export default EployeeAcording
