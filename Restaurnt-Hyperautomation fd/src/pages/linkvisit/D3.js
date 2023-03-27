import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img1 from "../linkvisit/images/hamburger-g998b23420_1920.jpg";
import './d1.css'
import F from  './components/F'
import  Components  from './components/C1';
import Col from 'react-bootstrap/esm/Col';
import React,{useState,useEffect} from 'react';
import { useParams} from 'react-router-dom';
import Form from 'react-bootstrap/Form';



// data
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {useFormik} from 'formik';

function Page3()  {

  const navigate = useNavigate();
  const {iduser} =  useParams();
    
  console.log(iduser)
  
  const formik = useFormik({
    initialValues: {
      itemname:"",Q:"",userid:iduser
    },

    onSubmit: (values) => {
      console.log(values)
      
      axios({
        method: 'Post',
        url: 'http://127.0.0.1:5000/api/customer/cart',
        data: values,
        headers:{
          "Content-Type":"application/json"
        }

        })
      .then((response) => {
        let a=response.data
        console.log(a)
        if (a==1){
          alert("Added successfully")
        }
        else if(a==2){
          alert("Already added")
        }
        else if(a==2){
          alert("Error")
        }
      
        }, 
        (error) => {
         alert(error)
        });
    },
  });
  
  const ms2={
    letterSpacing:'0.3cm',
    color:"yellow",
    width:"100%",
    fontFamily:"kodchasan",
  }
  const ms3={
    
    color:"yellow",
    width:"100%",
    position:"absolute",
    fontFamily:"kodchasan"
  }
  const divd={
      position:"absolute"
  }
  const divb={
    marginLeft:"700px"
}
let [menu,setNote]=useState(null)

useEffect(()=>{
    getNote()
},[])
let getNote=async()=>{
  let r= await fetch('/api/customer/menulogview')
  let d= await r.json()
  setNote(d)
  console.log(d)
}
    return (
      <div style={{backgroundColor:'black',color:"white"}}>
         {
  (menu!== null) ? 
  menu.map((item,index)=>{return (
    <div key={index} className="">
      <br></br>
      <div className='un'>{item.name} <div ></div> </div>
      {/* <div>{item.artistname}</div> */}
      <div className='un' >{item.price}</div>
      
    </div>
  )}) 
  :"no one started"
  } 
     <Components/>
     <Col id='i1' lg={{ span: 10, offset: 1}}>
            <Col lg={{ span: 2, offset: 5}} style={{textAlign:"center",marginTop:"40px"}}><span style={ms2}>
                hello
              </span></Col>  
                
              <div className='div1  col-5' style={divd}>
              <Col lg={{ span: 3, offset: 0}} style={{textAlign:"left"}}><span style={ms3}>
                non veg
              </span></Col>
              markup is very flexible and styling is controlled via classes so you can use whatever elements you like to build your navs. By default 

              When a  is appropriate you can render one via the as prop; be sure to also set your items to  as well!
              markup is very flexible and styling is controlled via classes so you can use whatever elements you like to build your navs. By default 

              When a  is appropriate you can render one via the as prop; be sure to also set your items to  as well!
              markup is very flexible and styling is controlled via classes so you can use whatever elements you like to build your navs. By default 

              When a  is appropriate you can render one via the as prop; be sure to also set your items to  as well!
              markup is very flexible and styling is controlled via classes so you can use whatever elements you like to build your navs. By default 

              When a  is appropriate you can render one via the as prop; be sure to also set your items to  as well!
              </div>
              <div className='div1  col-6' style={divb}>
              <Col lg={{ span: 3, offset: 0}} style={{textAlign:"left"}}><span style={ms3}>
                veg
              </span></Col>
              markup is very flexible and styling is controlled via classes so you can use whatever elements you like to build your navs. By default 

              When a  is appropriate you can render one via the as prop; be sure to also set your items to  as well!
              markup is very flexible and styling is controlled via classes so you can use whatever elements you like to build your navs. By default 

              When a  is appropriate you can render one via the as prop; be sure to also set your items to  as well!
              markup is very flexible and styling is controlled via classes so you can use whatever elements you like to build your navs. By default 

              When a  is appropriate you can render one via the as prop; be sure to also set your items to  as well!
              markup is very flexible and styling is controlled via classes so you can use whatever elements you like to build your navs. By default 

              When a  is appropriate you can render one via the as prop; be sure to also set your items to  as well!
              </div>
          </Col>
          <Col id='i2' lg={{ span: 10, offset: 1}}>
          <Col lg={{ span: 2, offset: 5}} style={{textAlign:"center",marginTop:"40px"}}><span style={ms2}>
                hello
              </span></Col>  
             
              <div  className='div1 col-5' style={divd}>
              <Col lg={{ span: 3, offset: 0}} style={{textAlign:"left"}}><span style={ms3}>
                non veg
              </span></Col>  
              markup is very flexible and styling is controlled via classes so you can use whatever elements you like to build your navs. By default 

              When a  is appropriate you can render one via the as prop; be sure to also set your items to  as well!
              markup is very flexible and styling is controlled via classes so you can use whatever elements you like to build your navs. By default 

              When a  is appropriate you can render one via the as prop; be sure to also set your items to  as well!
              markup is very flexible and styling is controlled via classes so you can use whatever elements you like to build your navs. By default 

              When a  is appropriate you can render one via the as prop; be sure to also set your items to  as well!
              markup is very flexible and styling is controlled via classes so you can use whatever elements you like to build your navs. By default 

              When a  is appropriate you can render one via the as prop; be sure to also set your items to  as well!
              </div>
              <div className='div1 col-6' style={divb}>
              <Col lg={{ span: 3, offset: 0}} style={{textAlign:"left"}}><span style={ms3}>
                veg
              </span></Col>  
              markup is very flexible and styling is controlled via classes so you can use whatever elements you like to build your navs. By default 

              When a  is appropriate you can render one via the as prop; be sure to also set your items to  as well!
              markup is very flexible and styling is controlled via classes so you can use whatever elements you like to build your navs. By default 

              When a  is appropriate you can render one via the as prop; be sure to also set your items to  as well!
              markup is very flexible and styling is controlled via classes so you can use whatever elements you like to build your navs. By default 

              When a  is appropriate you can render one via the as prop; be sure to also set your items to  as well!
              markup is very flexible and styling is controlled via classes so you can use whatever elements you like to build your navs. By default 

              When a  is appropriate you can render one via the as prop; be sure to also set your items to  as well!
              </div>

          </Col>
          <Col id='i2' lg={{ span: 6, offset: 3}}>
            <br></br><br></br>
          <Col  style={{textAlign:"center",marginTop:"40px"}}><span style={ms2}>
                Add items to the cart
              </span></Col>  <br></br> <br></br>
          <Form style={{fontFamily: 'Kodchasan',color:"white"}} onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                    
                    <Form.Label>Item name</Form.Label>
                    <Form.Control className='fc' type="Text" 
                                    placeholder="Chicken Noodles" 
                                    name='itemname'
                                    onChange={formik.handleChange}
                                    value={formik.values.itemname} />
                  </Form.Group>
                    
                      <Form.Group className="mb-3" controlId="Q">
                        <Form.Label>Quantity</Form.Label>
                        
                        <Form.Control className='fc' type="Text" 
                                    placeholder="2" 
                                    name='Q'
                                    onChange={formik.handleChange}
                                    value={formik.values.Q} />
                      </Form.Group>
                      
                     <center>
                      
                      <Button  style={{paddingTop:"0px",height:"80px", width:"80px",fontSize:"30px",color:'white',border:"none",fontFamily: 'Kodchasan',backgroundColor:'black',borderRadius: '10px',fontWeight:'normal'}} className='b1 '  type="submit">
                        +
                      </Button></center>
      
          
                    </Form>
                    </Col>
                    <center> <a style={{fontSize:"30px",color:'white',fontFamily: 'Kodchasan',backgroundColor:'black',border:"none",borderRadius: '8px',fontWeight:'normal'}} className='b1 '  href={'/cartview/'+iduser}>
                    Next 👉
                      </a></center>
          <F/>
          
    </div>
    )
  };
  
  export default Page3;