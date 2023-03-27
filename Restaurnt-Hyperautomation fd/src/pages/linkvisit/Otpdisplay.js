import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img1 from "../linkvisit/images/hamburger-g998b23420_1920.jpg";
import './d1.css'
import F from  './components/F'
import  Components  from './components/C1';
import Col from 'react-bootstrap/esm/Col';
import { useParams} from 'react-router-dom';
import React,{useState,useEffect} from 'react';
function Otp()  {
    const {iduser} =  useParams();
    
    console.log(iduser)

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


return (
   <div>
    <Card className="text-center" style={{fontFamily: 'Kodchasan'}}>
      <Card.Header>Hello ,{otp?.name} </Card.Header>
      <Card.Body>
        <Card.Title><h2 style={{fontFamily: 'Kodchasan'}}>One Time Password For User Verification </h2></Card.Title>
        
        <Button style={{margin:"30px",paddingLeft:"20px",paddingRight:"20px",fontSize:"23px",backgroundColor:"#000000bd",fontFamily: 'Kodchasan',borderStyle:"dashed",borderRadius: '8px',fontWeight:'blod'}} href={"/Otp/"+iduser} variant="primary">{otp?.otp}</Button>
       
        
      </Card.Body>
      <Card.Footer className="text-muted"> <Button href={"/Otp/"+iduser} variant="sucess"><Card.Text>
          click here to move verification page
        </Card.Text> <h1>🖐</h1> </Button></Card.Footer>
    </Card>
    
   </div>
    )
  };






    
 

export default Otp;