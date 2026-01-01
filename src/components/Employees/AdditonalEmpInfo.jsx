import React from 'react'
import { Col, Form, FormLabel } from 'react-bootstrap'
import CodeInputGroup from './CodeInputGroup'
import { useFormContext } from 'react-hook-form';


const AdditonalEmpInfo=()=> {
    const { register, formState: { errors } } = useFormContext();
    return (
        <>
        <Form.Group as={Col} md={4}>
                                            <FormLabel>تاريخ الميلاد :</FormLabel>
                                            <Form.Control
                                                type="date"
                                                {...register('birthDate')}
                                                isInvalid={!!errors.birthDate}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.birthDate?.message}
                                            </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md={4}>
                                            <FormLabel>النوع :</FormLabel>
                                            <Form.Select                                              
                                                {...register('Gender')}
                                                isInvalid={!!errors.Gender}
                                            >
                                                <option value="">اختر النوع</option>
                                                <option value="female">female</option>
                                                <option value="male">male</option>
                                                {/* <option value="other">other</option> */}
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.Gender?.message}
                                            </Form.Control.Feedback>                                          
                                </Form.Group>
                                <br />
                                <CodeInputGroup />

                                
                                <Form.Group as={Col} md={4}>
                                                <FormLabel>الرقم الوطني :</FormLabel>
                                                <Form.Control
                                                    type="text"
                                                    {...register('nationalID')}
                                                    isInvalid={!!errors.nationalID}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.nationalID?.message}
                                                </Form.Control.Feedback>
                                </Form.Group>




                                {/* <Form.Group as={Col} md={4}>
                                    <FormLabel>الكود :</FormLabel>
                                    <Form.Control
                                        type="text"
                                        {...register('empCode')}
                                        isInvalid={!!errors.empCode}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.empCode?.message}
                                    </Form.Control.Feedback>
                                </Form.Group> */}

                                <Form.Group as={Col} md={4}>
                                    <FormLabel>الحالة :</FormLabel>
                                    <Form.Select
                                        type="text"
                                        {...register('empStatuse')}
                                        isInvalid={!!errors.empStatuse}
                                    >
                                                <option value="1">نشط</option>
                                                <option value="2">معطل</option>
                                                <option value="3">غير ذلك</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.empStatuse?.message}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} md={4}>
                                    <FormLabel>الايميل :</FormLabel>
                                    <Form.Control
                                        type="text"
                                        {...register('email')}
                                        isInvalid={!!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email?.message}
                                    </Form.Control.Feedback>
                                </Form.Group>
        </>
    )
}

export default AdditonalEmpInfo
