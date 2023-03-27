
import Card from 'react-bootstrap/Card';
// import {useFormik} from 'formik';
import React,{useState,useEffect} from 'react'
import img1 from "../linkvisit/images/fried-chicken-4977369.jpg";
import './d1.css'

function Page1()  {
    
let [Note,setNote]=useState(null)

useEffect(()=>{
    getNote()
},[])

  let getNote=async()=>{
    let r= await fetch('http://localhost:5000/api/render/orderfromzview')
    let d= await r.json()
    setNote(d)
    console.log(d)
  }
    return (
        <div style={{backgroundColor:'black'}}>
        <Card className="bg-dark text-white">
         <Card.Img src={img1} alt="Card image" />
         <Card.ImgOverlay style={{backgroundColor:'#0000007e',textAlign:"center",fontFamily:"kodchasan"}}>
      </Card.ImgOverlay>
      {
  (Note!== null) ? 
  Note.map((item,index)=>{return (
    <div key={index} className="">
      <br></br>
     
      <div >{item.orderid}</div>
      <div >{item.updatedAt}</div>
    </div>
  )}) 
  :"no one started"
  } 
    </Card>
    
    </div>
    )
  };
  
  export default Page1;