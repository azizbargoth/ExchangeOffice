
import React from 'react'
import { Col, Form, FormLabel, Row } from 'react-bootstrap'
import { useFormContext} from 'react-hook-form'       
import { numChange, numDown } from '../../js/handleinputKeys';
import countries from '../../CountryLists/arabicCountry.json'

const EmployeeAddress=()=> {
    
const { register, formState: { errors } } = useFormContext();

    return (
        <>
        {/* <hr className='mt-3 p-x3 d-inline-block'/> */}
        <Row md lg={12}className='my-3 align-items-center p-0'>  
            <Col md lg={2}><p >معلومات التواصل </p></Col>
            <Col md lg={10}><div class="progress " style={{height:"2px"}}>
            </div></Col>
          
        </Row>
        <Row  className='p-0 m-0'>
                            <Form.Group as={Col} md={3}>
                                        <FormLabel> الدولة:</FormLabel>
                                            <Form.Select   type='text'                                           
                                                {...register('Country')}
                                                isInvalid={!!errors.Country}
                                            >
                                            {countries.map((country) => (
                                                    <option key={country.code} value={country.code}>
                                                    {country.name}
                                                    </option>))}
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.Country?.message}
                                            </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} lg md={3}>
                                <FormLabel>المحافظة:</FormLabel>
                                <Form.Control
                                    type="text"
                                    {...register('AddState')}
                                    isInvalid={!!errors.AddState}               
                                    onKeyDown={numDown}
                                    onChange={numChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.AddState?.message}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group  as={Col} lg md={3}>
                                <FormLabel>المدينة:</FormLabel>
                                <Form.Control
                                    type="text"
                                    {...register('city')}
                                    isInvalid={!!errors.city}               
                                    onKeyDown={numDown}
                                    onChange={numChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.city?.message}
                                </Form.Control.Feedback>
                            </Form.Group>
                                                        <Form.Group  as={Col} lg md={3}>
                                <FormLabel>المنطقة:</FormLabel>
                                <Form.Control
                                    type="text"
                                    {...register('regin')}
                                    isInvalid={!!errors.regin}               
                                    onKeyDown={numDown}
                                    onChange={numChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.regin?.message}
                                </Form.Control.Feedback>
                            </Form.Group>

                        </Row>
                        <Row className='p-0 m-0'>

                            <Form.Group  as={Col} lg md={3}>
                                <FormLabel>عنوان 1:</FormLabel>
                                <Form.Control
                                    type="text"
                                    {...register('Adress1')}
                                    isInvalid={!!errors.Adress1}               
                                    onKeyDown={numDown}
                                    onChange={numChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.Adress1?.message}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group  as={Col} lg md={3}>
                                <FormLabel>عنوان 2:</FormLabel>
                                <Form.Control
                                    type="text"
                                    {...register('Adress2')}
                                    isInvalid={!!errors.Adress2}               
                                    onKeyDown={numDown}
                                    onChange={numChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.Adress2?.message}
                                </Form.Control.Feedback>
                            </Form.Group>
                                                        <Form.Group  as={Col} lg md={3}>
                                <FormLabel> هاتف:</FormLabel>
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
                            <Form.Group  as={Col} lg md={3}>
                                <FormLabel>موبايل:</FormLabel>
                                <Form.Control
                                    type="text"
                                    {...register('Mobile')}
                                    isInvalid={!!errors.Mobile}               
                                    onKeyDown={numDown}
                                    onChange={numChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.Mobile?.message}
                                </Form.Control.Feedback>
                            </Form.Group>
                        <Row className='p-0 m-0'>
                            <Form.Group  as={Col} lg md={3}>
                                <FormLabel>ملاحظات عنوان:</FormLabel>
                                <Form.Control
                                   as="textarea" rows={3}
                                    {...register('AddressInfo')}
                                    isInvalid={!!errors.AddressInfo}               
                                    onKeyDown={numDown}
                                    onChange={numChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.AddressInfo?.message}
                                </Form.Control.Feedback>
                            </Form.Group> 
                         </Row> 
                         </Row> 

                            </>
    )
}

export default EmployeeAddress
