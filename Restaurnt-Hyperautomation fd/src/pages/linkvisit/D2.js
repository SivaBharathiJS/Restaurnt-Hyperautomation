import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import img2 from "../linkvisit/images/cakes-g88d3f6abb_1920.jpg";
import './d1.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

// data
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {useFormik} from 'formik';
import { toast } from 'react-toastify';

function Page1()  {
  // 
  const navigate = useNavigate();
 
  const formik = useFormik({
    initialValues: {
      name:"",loc:"",num:""
    },

    onSubmit: (values) => {
      console.log(values)
      
      axios({
        method: 'Post',
        url: 'http://127.0.0.1:5000/api/customer/customerlogsave',
        data: values,
        headers:{
          "Content-Type":"application/json"
        }

        })
      .then((response) => {
        let a=response.data
        console.log(a["b"])
        if (a["a"]==1){
          navigate('/otp/'+a["b"]);
        }
        
        else if(a["a"]==2) {
          alert("invalid phone number")
        }

        else if (a["a"]==3) {
          alert("incorrect location or check the spelling")
        } 
      
        }, 
        (error) => {
          toast.error(error);
        });
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
                        <Form.Label>Username</Form.Label>
                        <Form.Control className='fc' type="Text" 
                                    placeholder="Enter Your Name" 
                                    name='name'
                                    onChange={formik.handleChange}
                                    value={formik.values.name} />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="location">
                        <Form.Label>Location</Form.Label>
                        
                        <Form.Control className='fc' type="Text"
                                    placeholder="Location"
                                    name='loc'
                                    onChange={formik.handleChange}
                                    value={formik.values.loc} />
                        
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="number">
                        <Form.Label>Contact</Form.Label>

                        <Form.Control className='fc' type="Text" 
                                    placeholder="Mobile number"
                                    name='num'
                                    onChange={formik.handleChange}
                                    value={formik.values.num} />
                       < Form.Text className="text-muted">
                          We'll never share your contactinfo with anyone else.
                        </Form.Text>
                      </Form.Group>
                    
                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                      </Form.Group>
                      <Button  style={{fontSize:"23px",color:'white',fontFamily: 'Kodchasan',borderStyle:"dashed",backgroundColor:'black',border:'2px solid yellow',borderRadius: '8px',fontWeight:'normal'}} className='b1 col-5'  type="submit">
                        Submit
                      </Button>
      
          
                    </Form>

          
          </Card></Col></Row>

      </Card.ImgOverlay>
    </Card>
    
    </div>
    )
  };
  
  export default Page1;