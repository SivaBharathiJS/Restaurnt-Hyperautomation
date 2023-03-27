
import Card from 'react-bootstrap/Card';
import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import './d1.css'
import F from  './components/F'
import Form from 'react-bootstrap/Form'
import  Components  from './components/C1';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// data
import axios from 'axios';

import {useFormik} from 'formik';


function Family()  {
   
  // 
  const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
          name:"",email:""
        },
    
        onSubmit: (values) => {
          console.log(values)
          
          axios({
            method: 'Post',
            url: 'http://127.0.0.1:5000/api/customer/f',
            data: values,
            headers:{
              "Content-Type":"application/json"
            }
    
            })
          .then((response) => {
            let a=response.data
            console.log(a)
            if (a==1){
              navigate('/menu');
            }
            else{
              alert("invalid location");
            }
            }, 
            (error) => {
              alert("error");
            });
        },
      });
        return (
            
        <div style={{backgroundColor:'white'}}>
        <Col style={{height:"150px",padding:"50px"}} className="bg-dark text-white">
   <center> <Card.Body><h3 style={{fontFamily:"Kodchasan"}}>Family / Friends </h3></Card.Body></center>
</Col>
       <Row>
           <Col lg={{ span: 4 }} >

<Card style={{fontFamily: 'Kodchasan',marginLeft:"20px",marginTop:"0px",padding:"50px",width:"400px",border:"none"}}>
 <Card.Header>person 1</Card.Header>
 <Card.Body>
   <Card.Title>Name</Card.Title>
   <Card.Text>
          Phone
   </Card.Text>
   
 </Card.Body>
</Card>
<Button  style={{fontSize:"18px",color:'white',fontFamily: 'Kodchasan',backgroundColor:'363633cb',border:'2px solid white',fontWeight:'bold',width:"150px",marginLeft:"120px"}}  variant="dark">request</Button>
           
           </Col>

                <Col lg={{ span: 8 }}>
                <Card style={{fontFamily: 'Kodchasan',color:"white",padding:"50px",width:"600px",marginLeft:"200px",marginTop:"50px",boxShadow:"0px 0px 12px 2px black"}}>
                <Form style={{fontFamily: 'Kodchasan',color:"white"}} onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control style={{border:"3px solid gray"}}  type="Text" 
                                    placeholder="Name" 
                                    name='name'
                                    onChange={formik.handleChange}
                                    value={formik.values.name} />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="Email">
                        <Form.Label>Email</Form.Label>
                        
                        <Form.Control  style={{border:"3px solid gray"}} type="Text"
                                    placeholder="Email"
                                    name='loc'
                                    onChange={formik.handleChange}
                                    value={formik.values.loc} />
                        
                      </Form.Group>
                     
                   <center>  <Button   variant="dark"  style={{fontSize:"18px",color:'white',fontFamily: 'Kodchasan',backgroundColor:'363633cb',border:'2px solid white',borderRadius: '30px',fontWeight:'bold'}} className='b1 col-5'  type="submit">
                        Add
                      </Button></center> 
      
          
                    </Form>
                    </Card>
                </Col>
                
            </Row>
            <F/>
        </div>

)};

export default Family;
