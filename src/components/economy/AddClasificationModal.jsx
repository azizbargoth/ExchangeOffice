import React,{useMemo,useState} from 'react'
import {useDispatch} from 'react-redux'
import { Modal,Form ,Button } from 'react-bootstrap';

const AddClasificationModal=({ show, onHide, onSubmit })=> {
               const dispatch=useDispatch();

  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');

  const canSave = name.trim().length > 0;

  const handleSave = () => {
    if (!canSave) return;
    onSubmit?.({
      reciptType: name.trim(),
      code: code.trim(),
      description: description.trim(),
    });
    setName(''); setCode(''); setDescription('');
    onHide?.();
  };

  const handleClose = () => {
    setName(''); setCode(''); setDescription('');
    onHide?.();
  };

    // const [show, setShow] = useState(false);
        const handleCloseModal = () =>onHide?.();
        const handleShowModal = () => setShow(true);

  return (
    
    <div >
      <Modal  centered show={show} onHide={handleClose} size="sm" >
        
        <Modal.Header  closeButton  >
          <Modal.Title className=" fs-6 w-100">إضافة تصنيف جديد</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form className='fs-6'>
            <Form.Group className="mb-3 " controlId="classificationName" >
              <Form.Label >اسم التصنيف:</Form.Label>
              <Form.Control size="sm"
                type="text"
                placeholder="تصنيف جديد"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {name.trim() === '' && (
                <Form.Text className="text-danger">أدخل اسم التصنيف.</Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="classificationCode" >
              <Form.Label>رمز التصنيف (اختياري):</Form.Label>
              <Form.Control size="sm"
                type="text"
                placeholder="مثال: RT001"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="classificationDesc" >
              <Form.Label>وصف التصنيف (اختياري):</Form.Label>
              <Form.Control size="sm"
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" onClick={handleSave} disabled={!canSave}>
            حفظ
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            إغلاق
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

  )
}

export default AddClasificationModal