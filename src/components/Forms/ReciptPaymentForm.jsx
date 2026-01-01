import React ,{useMemo, useState}from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Card, Container, Form, FormLabel, Button, Col, Row, Alert } from 'react-bootstrap';
import { numChange, numDown } from '../../js/handleinputKeys';
const ReciptPaymentForm=()=> {
    const [pamenttype,setPaymentType]=useState('قبض');
    return (
        
    )
}

export default React.memo(ReciptPaymentForm) 
