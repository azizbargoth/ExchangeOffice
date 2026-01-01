
import React, { useState, useRef } from 'react';
import { Form, Col,Row,Modal,Button,Card,CloseButton ,Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt,faTimes,faX } from '@fortawesome/free-solid-svg-icons';
import { useFormContext } from 'react-hook-form';

function DragDropUpload({ register, watch, setValue, errors }) {
    // 
 
// const {  register,setValue, formState: { errors } } = useFormContext();
  const fileInputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);
  const [previewFiles, setPreviewFiles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalFile, setModalFile] = useState(null);

  const handleBoxClick = () => fileInputRef.current.click();

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === 'dragenter' || e.type === 'dragover');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
       
      addFiles(e.dataTransfer.files);
       document.getElementById('drag-drop-content').style.display = 'none';
    }
  };

  const handleFileChange = (e) => {
    addFiles(e.target.files);
  };

  const addFiles = (files) => {
    const newFilesArray = Array.from(files);
    newFilesArray.forEach(element => {previewFiles.find(file => file.name === element.name) || previewFiles.push(element)
       
    });
    const updatedFiles = [...previewFiles];
    setPreviewFiles(updatedFiles); 
    
    setValue('attachments', updatedFiles);
  };

  const removeFile = (index) => {
    const updatedFiles = previewFiles.filter((_, i) => i !== index);
    setPreviewFiles(updatedFiles);
    setValue('attachments', updatedFiles);
  };



  return (
    <Form.Group as={Col} md={3} controlId="form-group-attachment" className="mb-3 position-relative ">
        <Form.Label>المرفقات:</Form.Label>
        <div

            onClick={handleBoxClick}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`drag-drop-box ${dragActive ? 'active' : ''}`}
            style={{
                border: '2px dashed #ccc',
                borderRadius: '3px',
                padding: '10px',
                textAlign: 'center',
                cursor: 'pointer',
                
                backgroundColor: dragActive ? '#f0f8ff' : '#fafafa'
            }}

        >
            
            <div id="drag-drop-content" className={` ${previewFiles.length>0 ? 'd-none' : ''}`} >
                <FontAwesomeIcon icon={faCloudUploadAlt} size="2x" color="#2f90ecff" />
                <p style={{fontSize:'10px',color:'#6c757d',opacity:'0.8'}}>اسحب الملفات هنا أو اضغط للاختيار</p>  
            </div>

        <Form.Control className="d-none "
            type="file"
            multiple
            alternative="إرفاق ملفات"
            accept=".jpg,.jpeg,.png,.pdf"
            {...register('attachments')}
            ref={fileInputRef}
            onChange={handleFileChange}
            isInvalid={!!errors.attachments}
        />
        {previewFiles.map((file, index) => (
         <Col md={12} key={index} className="position-relative mb-1">
            <Card   style={{backgroundColor:'#867b93'}}>
                <p
                     style={{  fontSize: '12px',color:'#222222' }}
                >
                    {file.name}
                </p>
                <button bg="danger" className='p-0 m-0 top-0 right-0' 
                    
                    
                    style={{ position: 'absolute',height:'15px',width:'15px' ,zIndex:'10000'}}
                    onClick={() => removeFile(index)}
                >
                   <span className='text-decoration-noe position-relative text-dark' style={{top:'-10px'}}>x</span>
                </button >
            </Card>
            </Col>
        ))}
    </div>   
        <Form.Control.Feedback type="invalid" style={{ color: 'red' }}>
          {errors.attachments?.message}
        </Form.Control.Feedback>
      </Form.Group>
  );
}

export default React.memo(DragDropUpload);


