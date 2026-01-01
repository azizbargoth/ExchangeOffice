import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Card, Container, Form, FormLabel, Button, Col, Row, Alert, OverlayTrigger,Tooltip, InputGroup } from 'react-bootstrap';
import { numChange, numDown } from '../../js/handleinputKeys';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPlus } from '@fortawesome/free-solid-svg-icons';
import AddDepatment from '../Employees/AddDepatment';

// ✅ Define Yup validation schema
const validationSchema = Yup.object().shape({
  username: Yup.string().required('اسم المستخدم مطلوب'),
  password: Yup.string()
    .required('كلمة المرور مطلوبة')
    .min(6, 'كلمة المرور يجب أن تكون 6 أحرف على الأقل'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'كلمة المرور غير متطابقة')
    .required('يرجى تأكيد كلمة المرور'),
  accessLevel:Yup.string(),
  fullName: Yup.string(),
  jobTitle: Yup.string(),
  department: Yup.string(),
  email: Yup.string()
    .required('الإيميل مطلوب')
    .email('صيغة الإيميل غير صحيحة'),
  phone: Yup.string()
    .matches(/^\d{10,15}$/, 'رقم الهاتف يجب أن يحتوي على 10 إلى 15 رقم'),
});


const UserAccountes = () => {
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
const renderTooltip=(props) => (
  <Tooltip id="button-tooltip" {...props}>
    اضف قسم
  </Tooltip>
)
  return (
    <Container>
      <Card border="warning" className='mt-2 mb-5'>
        <Card.Header>الحسابات</Card.Header>
        <Card.Body>
          <Card.Title>معلومات المستخدم</Card.Title>
          
          <Form onSubmit={handleSubmit(onSubmit1)}>
          <Row className=''>
            <Col md lg='6'>
            <Form.Group  as={Col} md={8}>
              <FormLabel>اسم المستخدم:</FormLabel>
              <Form.Control
                type="text"
                {...register('username')}
                isInvalid={!!errors.username}
              />
              <Form.Control.Feedback type="invalid">
                {errors.username?.message}
              </Form.Control.Feedback>

              <FormLabel>كلمة المرور:</FormLabel>
              <Form.Control
                type="password"
                {...register('password')}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password?.message}
              </Form.Control.Feedback>

              <FormLabel>تأكيد كلمة المرور:</FormLabel>
              <Form.Control
                type="password"
                {...register('confirmPassword')}
                isInvalid={!!errors.confirmPassword}
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword?.message}
              </Form.Control.Feedback>
              <Form.Check type="checkbox" label="الدخول للنظام" {...register('isAdmin')} />
              <FormLabel>مستوى الوصول :</FormLabel>
              <Form.Select type="text" {...register('accessLevel')}>
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </Form.Select>
              
              </Form.Group>
              </Col>
              <Col  md lg={6}>
              <Form.Group as={Col} md={8}>
              <FormLabel>الاسم الكامل:</FormLabel>
              <Form.Control
                type="text"
                {...register('fullName')}
                isInvalid={!!errors.fullName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.fullName?.message}
              </Form.Control.Feedback>

              <FormLabel>المنصب الوظيفي:</FormLabel>
              <Form.Control type="text" {...register('jobTitle')} />
             
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
              <FormLabel>الايميل:</FormLabel>
              <Form.Control
                type="email"
                {...register('email')}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>

              <FormLabel>الهاتف:</FormLabel>
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
              <FormLabel>الهاتف:</FormLabel>
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
              <FormLabel>الهاتف:</FormLabel>
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
              <FormLabel>الهاتف:</FormLabel>
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
            </Col>
                <Row >
                  <Col md={6} >
                 
                <Button type="submit" className="m-3 px-4" variant={'success'}>
                تسجيل
                </Button>
                 </Col>
                </Row>
            
            </Row>
          </Form>
         
        </Card.Body>
      </Card>
    </Container>
  );
};

export default React.memo(UserAccountes);