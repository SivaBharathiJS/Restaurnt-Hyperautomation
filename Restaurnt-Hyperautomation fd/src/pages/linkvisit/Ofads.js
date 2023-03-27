
import Card from 'react-bootstrap/Card';
import React,{useState,useEffect} from 'react'
import img1 from "../linkvisit/images/cheap-food.png";
import './d1.css'
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
function Page1()  {
    let [Note,setNote]=useState(null)

    useEffect(()=>{
        getNote()
    },[])
    
      let getNote=async()=>{
        let r= await fetch('http://localhost:5000/api/render/orderfromwebview')
        let d= await r.json()
        setNote(d)
        console.log(d)
      }
        return (
            <div style={{backgroundColor:'white'}}>
            <Card className="bg-dark text-white">
             <Card.Img src={img1} alt="Card image" />
             <Card.ImgOverlay style={{backgroundColor:'#edede37d',textAlign:"center",fontFamily:"kodchasan"}}>
          </Card.ImgOverlay>
       
        </Card>
        <Col lg>
          <br></br>
          <Table striped  hover size="lg">
      <tbody>
        <tr>
          <th>Order-Id</th>
          <th>Items ordered</th>
          <th>Paymentstatus</th>
          <th>Orderstatus</th>
          <th>Netamount</th>
        </tr>
        {
      (Note!== null) ? 
      Note.map((item,index)=>{return (
          <tr  key={index} >
          <td># {item._id}</td>
      
          <td>{item.items}</td>
       
          <td>{item.paymentstatus}</td>
          
       
          <td>{item.orderStatus}</td>
        
        
          <td>{item.netamount}</td>
          <td> <a href=''>view more..</a> </td>
          
        </tr>
         )}) 
         :"no one started"
         } 
      </tbody>
    </Table>
          
          
        </Col>
     
     
        </div>
        )
      };
      
  export default Page1;