
import React from 'react'
import { Col, Form, FormLabel, Row } from 'react-bootstrap'
import { useFormContext} from 'react-hook-form'       
import { numChange, numDown } from '../../js/handleinputKeys';
import countries from '../../CountryLists/arabicCountry.json'

const EmployeeFamilyInfo=()=> {
    
const { register, formState: { errors } } = useFormContext();

    return (
        <>
        {/* <hr className='mt-3 p-x3 d-inline-block'/> */}
        <Row md lg={12}className='my-3 align-items-center p-0'>  
            <Col md lg={2}><p >معلومات عائلية </p></Col>
            <Col md lg={10}><div class="progress " style={{height:"2px"}}>
            </div></Col>         
        </Row>
        <Row  className='p-0 m-0'>
                        <Row className='p-0 m-0'>
                            <Form.Group as={Col} md={3}>
                                        <FormLabel> الحالة الاجتماعية:</FormLabel>
                                            <Form.Select   type='text'                                           
                                                {...register('MaritalStatus')}
                                                isInvalid={!!errors.MaritalStatus}
                                            >                                         
                                                <option value='1'>متزوج</option>
                                                <option value='2'>عازب</option>
                                                <option value='3'>مطلق</option>
                                                <option value='4'>ارمل</option>
                                                <option value='5'>غير ذلك</option>
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.MaritalStatus?.message}
                                            </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} lg md={3}>
                                <FormLabel>اسم الزوج\الزوجة:</FormLabel>
                                <Form.Control
                                    type="text"
                                    {...register('partnerName')}
                                    isInvalid={!!errors.partnerName}               
                                    onKeyDown={numDown}
                                    onChange={numChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.partnerName?.message}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group  as={Col} lg md={3}>
                                <FormLabel>عدد الاطفال:</FormLabel>
                                <Form.Control
                                    type="number"
                                    {...register('ChildNo')}
                                    isInvalid={!!errors.ChildNo}               
                                    onKeyDown={numDown}
                                    onChange={numChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.ChildNo?.message}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group  as={Col} lg md={3}>
                                <FormLabel>رقم البطاقة العائلية:</FormLabel>
                                <Form.Control
                                    type="text"
                                    {...register('FamilyCardNo')}
                                    isInvalid={!!errors.FamilyCardNo}               
                                    onKeyDown={numDown}
                                    onChange={numChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.FamilyCardNo?.message}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className='p-0 m-0'  lg md={6}>
                            <Form.Group  as={Col} lg md={3}>
                                <FormLabel> رقم القيد:</FormLabel>
                                <Form.Control
                                    type="text"
                                    {...register('rigisterationNo')}
                                    isInvalid={!!errors.rigisterationNo}               
                                    onKeyDown={numDown}
                                    onChange={numChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.rigisterationNo?.message}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group  as={Col} lg md={3}>
                                <FormLabel> أمانةالسجل المدني:</FormLabel>
                                <Form.Control
                                    type="text"
                                    {...register('RegistrationName')}
                                    isInvalid={!!errors.RegistrationName}               
                                    onKeyDown={numDown}
                                    onChange={numChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.RegistrationName?.message}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Col lg={6}></Col>
                        </Row>
                        <Row className='p-0 m-0' md lg={12}>
                            <Form.Group  as={Col} lg md={12}>
                                <FormLabel>ملاحظات العائلة:</FormLabel>
                                <Form.Control
                                    as="textarea" rows={3}
                                    {...register('FamilyNotes')}
                                    isInvalid={!!errors.FamilyNotes}               
                                    onKeyDown={numDown}
                                    onChange={numChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.FamilyNotes?.message}
                                </Form.Control.Feedback>
                            </Form.Group> 
                        </Row> 
                    </Row> 
                    </>
    )
}

export default EmployeeFamilyInfo;
