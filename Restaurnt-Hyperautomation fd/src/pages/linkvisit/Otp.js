import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import img2 from "../linkvisit/images/cakes-g88d3f6abb_1920.jpg";
import './d1.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState,useEffect } from 'react';
import { useParams} from 'react-router-dom';

// data
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {useFormik} from 'formik';
import { toast } from 'react-toastify';

function Page1()  {
  // 
  const {iduser} =  useParams();
    
  console.log(iduser)
  const navigate = useNavigate();
 
let [otp,setNote]=useState(null)

useEffect(()=>{
    getNote()
},[])
let getNote=async()=>{
  let r= await fetch('/api/customer/otpview/'+iduser)

  let d= await r.json()
  
  setNote(d)
  console.log(d)
}
  const formik = useFormik({
    initialValues: {
      otp:""
    },

    onSubmit: (values) => {
      console.log(values)
      const bb=Object.values(values)
      const b=Object.values(otp)
      console.log(b[5],bb[0])
      if (b[5]==bb[0]){
        alert("success")
        navigate('/menu/'+iduser);
      }
      
     
    },
  });
  
    return (
      <div style={{background:'black'}}>
      
      <Card className="bg-dark text-white d1"  style={{border:"none"}}>
      <Card.Img src={img2} alt="Card image"  />
   
      <Card.ImgOverlay className='c1'>
      <Row className='c2'><Col lg={{ span: 8, offset: 2 }}>
        <Card className='c2  ' style={{height:"550px",backgroundColor: '#000000ca',boxShadow:'white 0px 0px 10px 1px '}}>
      
                    <Form style={{fontFamily: 'Kodchasan',color:"white"}} onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>OTP (One Time Password)</Form.Label>
                        <>Enter the otp send to your device</>
                        <Form.Control className='fc' type="Text" 
                                    placeholder="000000" 
                                    name='otp'
                                    onChange={formik.handleChange}
                                    value={formik.values.otp} />
                      </Form.Group>
                      <br></br><br></br>
                      <center>  <a href="/resend"  style={{fontSize:"13px",color:'white',borderStyle:"none",fontFamily: 'Kodchasan',backgroundColor:'black',borderRadius: '8px',fontWeight:'normal',textDecorationLine:"none"}} className='b1 col-5'  type="submit">
                        Resend OTP
                      </a> <br></br>
                      
                      <Button  style={{fontSize:"23px",color:'white',fontFamily: 'Kodchasan',backgroundColor:'black',border:'2px solid yellow',borderRadius: '8px',fontWeight:'normal'}} className='b1 col-5'  type="submit">
                        Verify
                      </Button></center>
      
          
                    </Form>

          
          </Card></Col></Row>

      </Card.ImgOverlay>
    </Card>
    
    </div>
    )
  };
  
  export default Page1;