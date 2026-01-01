import React, { useEffect, useMemo, useState } from 'react';
import {
  Button,
  InputGroup,
  Container,
  Form,Card,DropdownButton,
  Dropdown,ListGroup,ListGroupItem,
  Row,Col,Modal
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun,faFileInvoiceDollar,faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import currencies from '../../CountryLists/currenciesAll.json';
import reciptTypes from '../../CountryLists/ReceiptTypes.json';
import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
// import 
import {  useForm,FormProvider } from 'react-hook-form';
import { validationSchema } from './ecovalidation.js';
import DragDropUpload from './DragAndDropUploading.jsx';
import AddClasificationModal from './AddClasificationModal.jsx';

function ReceiptVoucher() {
    


        const {
            register,
            handleSubmit,
            watch,
            setValue ,
            formState: { errors },
        } = useForm({
            resolver: yupResolver(validationSchema),
          defaultValues:   { classificationType: '' },
        });
        
  const dispatch = useDispatch();
  const receiptTypes = useSelector((s) => s.receiptTypes.items);

        const onSubmit1 = (data) => {
            alert(JSON.stringify(data));
        };
const [selectedCurrency, setSelectedCurrency] = useState('$');
const [showModal, setShowModal] = React.useState(false);
        // const handleCloseModal = () => setShowModal(false);
        // const handleShowModal = () => setShowModal(true);
const handleSelectCurrency = (currency) => {
setSelectedCurrency(currency.symbol)
};

//   const handleAddClassification = (newItem) => {
    // Update the list
    // setReciptTypes((prev) => {
    //   const exists = prev.some((x) => String(x.id) === String(newItem.id));
    //   if (exists) return prev;
    //   return [...prev, newItem];
    // });

    // Optionally select the newly added classification in the Form.Select
//     setValue?.('empType', newItem.id);
//   };

  // When modal returns data, dispatch to Redux and select new item
  const handleAddClassification = (newItem) => {
    dispatch(addClassificationAction(newItem)); // reducer will prevent duplicates
    // pick newly added classification in the form
    // NOTE: the id is generated inside action creator; we do not have it here
    // But since we don't know it, we can re-select the last added item:
    // Better approach: generate id in modal before dispatching; let's change the modal to not generate id and do it in the action:
    // We already generate id inside action; to select we need that id.
    // So let's compute: after dispatch, the store updates; we can find item by name:
    const added = [...receiptTypes, { ...newItem }].find(
      (x) => String(x.reciptType).trim().toLowerCase() === String(newItem.reciptType).trim().toLowerCase()
    );
    if (added?.id) setValue('classificationType', added.id, { shouldValidate: true, shouldDirty: true });
    setShowModal(false);
  };


  return (
      <Container fluid className=''>
        <Card >
            <Card.Img variant="top"  />          
            <Card.Header>سند قبض<FontAwesomeIcon icon={faFileInvoiceDollar} /></Card.Header>
            <Card.Body>
                {/* <Card.Text> */}
                    {/* محتوى سند القبض */}
                    <Form onSubmit={handleSubmit(onSubmit1)}>
                        <Row md={2}> 
                            <Form.Group as={Col}  md={4} controlId="form-group-id">
                                <Form.Label>المبلغ:</Form.Label>
                            <InputGroup  className='flex-row-reverse'> 
                                <DropdownButton  title={selectedCurrency} id="input-group-dropdown-1" variant="outline-secondary">
                                { currencies.currencies.map((currency) => (
                                    <Dropdown.Item key={currency.code} onClick={() => handleSelectCurrency(currency)}>
                                        {currency.code} - {currency.name}
                                    </Dropdown.Item>
                                )) }
                                </DropdownButton>                      
                                <Form.Control
                                size="lg"
                                    placeholder="0000.00"
                                    aria-label="Amount"
                                    type="number"
                                    min="0"
                                    {...register('amunt')}
                                    isInvalid={!!errors.amount}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.amount?.message}
                                </Form.Control.Feedback>                  
                            </InputGroup>
                            </Form.Group>
                            
                            <Form.Group as={Col} md={4} controlId="descriptionId">
                                <Form.Label>الوصف:</Form.Label>                  
                                <Form.Control
                                    placeholder="الوصف"
                                    aria-label="description"
                                    as="textarea"
                                    rows={3}
                                    {...register('description')}
                                    isInvalid={!!errors.description}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.description?.message}
                                </Form.Control.Feedback>  
                            </Form.Group>
                            <DragDropUpload register={register} watch={watch} setValue={setValue} errors={errors}  />                            
                        </Row>
                        <Row md={2} className='mt-3'>
                                        <Form.Group as={Col} md={3}>
                                                <Form.Label>رقم الإيصال :</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    {...register('reeiptNo')}
                                                    isInvalid={!!errors.firstName}
                                                    disabled
                                                    readOnly
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.firstName?.message}
                                                </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md={3}>
                                                <Form.Label>تاريخ الإيصال :</Form.Label>
                                                <Form.Control
                                                    type="datetime-local"
                                                    {...register('receiptDate')}
                                                    isInvalid={!!errors.firstName}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.firstName?.message}
                                                </Form.Control.Feedback>
                                        </Form.Group>
                                        </Row>
                                        <Row md={2} className='mt-3'>
                                        <Form.Group as={Col} md={3}>
                                                <Form.Label>المستلم:</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    {...register('ReceiverName')}
                                                    isInvalid={!!errors.firstName}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.firstName?.message}
                                                </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col}  md={3} controlId="classify-receipt-id">
                                            <Form.Label>التصنيف :</Form.Label>
                                             <InputGroup  className='flex-row-reverse'> 
                                             <InputGroup.Text className='m-0 p-0'>
                                             <Button variant='transparent' size="sm" 
                                              onClick={()=>{ setShowModal(true);}}
                                              >
                                                <FontAwesomeIcon icon={faCirclePlus} className='text-success' /><span>اضافة</span> 
                                                </Button>
                                                
                                                </InputGroup.Text>
                                                
                                                <Form.Select
                                                    type="text"
                                                    {...register('empType')}
                                                    isInvalid={!!errors.empType}
                                                >
                                                    {reciptTypes.map((ele)=>(
                                                        <option key={ele.id} value={ele.id}>
                                                            {ele.reciptType}
                                                        </option>
                                                    ))}
                                                    </Form.Select>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.empType?.message}
                                                </Form.Control.Feedback>
                                                 </InputGroup>
                                            </Form.Group>
                                            <AddClasificationModal 
                                                show={showModal}
                                                        onHide={() => setShowModal(false)}
                                                        onSubmit={handleAddClassification}
                                                />{/*add clasification modal here*/}
                                            <Form.Group as={Col} md={3}>
                                            <Form.Label>خزينة :</Form.Label>
                                                <Form.Select
                                                    type="text"
                                                    {...register('empType')}
                                                    isInvalid={!!errors.empType}
                                                >
                                                    {reciptTypes.map((ele)=>(
                                                        <option key={ele.id} value={ele.id}>
                                                            {ele.reciptType}
                                                        </option>
                                                    ))}
                                                    </Form.Select>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.empType?.message}
                                                </Form.Control.Feedback>
                                            </Form.Group> 
                                            <Form.Group as={Col} md={3}>
                                            <Form.Label>الحساب الفرعي :</Form.Label>
                                                <Form.Select
                                                    type="text"
                                                    {...register('empType')}
                                                    isInvalid={!!errors.empType}
                                                >
                                                    {reciptTypes.map((ele)=>(
                                                        <option key={ele.id} value={ele.id}>
                                                            {ele.reciptType}
                                                        </option>
                                                    ))}
                                                    </Form.Select>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.empType?.message}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>
                    
                    <Form.Control type="text" placeholder="ادخل اسم المستلم" className='mb-3' />
                    <Form.Label>السبب:</Form.Label>
                    <Form.Control type="text" placeholder="ادخل سبب القبض" className='mb-3' />
                        {/* <Button variant="outline-secondary">تأكيد</Button> */}

                        
                                            <Button type="submit" className="m-3 px-4" variant={'success'}>
                        تسجيل
                        </Button>
                    </Form>
                {/* </Card.Text> */}
            </Card.Body>

        </Card>
      </Container>   


  )
}

export default React.memo(ReceiptVoucher) 