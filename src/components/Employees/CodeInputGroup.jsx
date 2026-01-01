import React, { useState } from 'react';
import { Form, Col, SplitButton, Dropdown, Badge, DropdownMenu } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Project from '../../CountryLists/ProjectCodes.json'

const CodeInputGroup = () => {
  const { register, setValue, formState: { errors } } = useForm();
  const [codes, setCodes] = useState([]);

  const availableCodes = ['Code1', 'Code2', 'Code3', 'Separated link'];

  const addCode = (code) => {
    if (!codes.includes(code)) {
      const newCodes = [...codes, code];
      setCodes(newCodes);
      setValue('empCode', newCodes.join(', '));
    }
  };

  const removeCode = (codeToRemove) => {
    const newCodes = codes.filter(code => code !== codeToRemove);
    setCodes(newCodes);
    setValue('empCode', newCodes.join(', '));
  };

  return (

<Form.Group as={Col} md={4}>
  <Form.Label>الكود :</Form.Label>
  <div className="card mt-2">
  <Dropdown>
            <Dropdown.Toggle variant='Secondary' />
            <Dropdown.Menu>
        {Project.map(code => (
            <Dropdown.Item key={code.id} onClick={() => addCode(code.Code)}>
            {code.Code}
            </Dropdown.Item>          
        ))}</Dropdown.Menu>
      </Dropdown>
    <div className="card-body  bd-highlight" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      {codes.map(code => (
        <Badge
          key={code}
          bg="info"
          style={{ cursor: 'pointer' ,display:'block' }}
          onClick={() => removeCode(code)}
        >
          {code} &times;
        </Badge>
      ))}
      {codes.length === 0 && <span className="text-muted">لا توجد أكواد مضافة</span>}
    </div>
  </div>

  {/* Hidden input to store selected codes */}
  <Form.Control
    type="hidden"
    {...register('empCode')}
    value={codes.join(', ')}
  />

  <Form.Control.Feedback type="invalid">
    {errors.empCode?.message}
  </Form.Control.Feedback>
</Form.Group>

  );
};

export default CodeInputGroup;

