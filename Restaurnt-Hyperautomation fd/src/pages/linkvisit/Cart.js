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
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Table from 'react-bootstrap/Table';

// data
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {useFormik} from 'formik';
import { contextType } from 'react-fontawesome';
const ms2={
  letterSpacing:'0.3cm',
  color:"yellow",
  width:"100%",
  fontSize:"30px",
  fontFamily:"kodchasan",
}
// function Page3()  {

//   const navigate = useNavigate();
//   const {iduser} =  useParams();

// let [cart,setNote]=useState(null)

// useEffect(()=>{
//     getNote()
// },[])
// let getNote=async()=>{
//   let r= await fetch('/api/customer/cartview/'+iduser)
//   let d= await r.json()
//   setNote(d)
//   console.log(d)
// }
//     return (
//       <div style={{backgroundColor:'black',color:"white"}}>
//          {
//   (cart!== null) ? 
//   cart.map((item,index)=>{return (
//     <div key={index} className="">
//       <br></br>
//       <div className='un'>{item.itemname} <div ></div> </div>
//       {/* <div>{item.artistname}</div> */}
//       <div className='un' >{item.Totalamount}</div>
      
//     </div>
//   )}) 
//   :"no one started"
//   } 
      
        
             
//           <Col id='i2' lg={{ span: 6, offset: 3}}>
//             <br></br><br></br>
//          <br></br> <br></br>
//           {/* <Form style={{fontFamily: 'Kodchasan',color:"white"}} onSubmit={formik.handleSubmit}>
//                     <Form.Group className="mb-3" controlId="name">
                    
//                     <Form.Label>Item name</Form.Label>
//                     <Form.Control className='fc' type="Text" 
//                                     placeholder="Chicken Noodles" 
//                                     name='itemname'
//                                     onChange={formik.handleChange}
//                                     value={formik.values.itemname} />
//                   </Form.Group>
                    
//                       <Form.Group className="mb-3" controlId="Q">
//                         <Form.Label>Quantity</Form.Label>
                        
//                         <Form.Control className='fc' type="Text" 
//                                     placeholder="2" 
//                                     name='Q'
//                                     onChange={formik.handleChange}
//                                     value={formik.values.Q} />
//                       </Form.Group>
//                        </Form> */}
//                      <center>
                      
//                       {/* <Button overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>} style={{paddingTop:"0px", width:"80px",fontSize:"30px",color:'white',border:"none",fontFamily: 'Kodchasan',backgroundColor:'black',borderRadius: '10px',fontWeight:'normal'}} className='b1 '  type="submit">
//                        <span style={{color:"gray",fontSize:"10px"}}>edit</span>
//                       </Button></center> */}
      
//                       <OverlayTrigger overlay={<Tooltip>Edit!</Tooltip>}>
//                     <span style={{backgrounColor:"black"}}>
//                         <Button variant='Dark'  style={{backgrounColor:"black",fontSize:"40px"}} >
//                         📝
//                         </Button>
//                     </span>
//                     </OverlayTrigger></center>
                   
//                     </Col>
//                     <center> <Button style={{fontSize:"30px",color:'yellow',fontFamily: 'Kodchasan',backgroundColor:'black',border:"none",borderRadius: '8px',fontWeight:'normal'}} className='b1 '  href={'/cartview/'+iduser}>
//                     order Now
//                       </Button></center>
//           <F/>
          
//     </div>
//     )
//   };
  
//   export default Page3;
function Page3() {
  const navigate = useNavigate();
  const {iduser} =  useParams();
  const [cart, setCart] = useState(null);
  const [editedItem, setEditedItem] = useState(null);
  const [editedItemName, setEditedItemName] = useState("");
  const [editedItemQuantity, setEditedItemQuantity] = useState("");

  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    let response = await fetch('http://localhost:5000/api/customer/cartview/' + iduser);
    let data = await response.json();
    console.log(data)
    setCart(data);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    console.log(e)
    try {
      const response = await axios.put(`http://localhost:5000/api/customer/cartupdate/${editedItem._id}`, { itemname: editedItemName, quantity: editedItemQuantity });
      setEditedItem(response.data);
      console.log(response.data)
      alert("changes saved")
      getCart();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClick = (item) => {
    setEditedItem(item);
    setEditedItemName(item.itemname);
    setEditedItemQuantity(item.quantity);
  };

  const handleCancelClick = () => {
    setEditedItem(null);
    setEditedItemName("");
    setEditedItemQuantity("");
  };

  const save = async () => {

    console.log(typeof(Object.values(cart)))
      
      axios({
        method: 'Post',
        url: 'http://localhost:5000/api/render/orderfromwebsave/'+iduser,
        data: cart,
        headers:{
          "Content-Type":"application/json"
        }

        }).then((response)=>{let a=response.data
          console.log(a)
          if (a==1){
            alert("order placed successfully ")
          }
          else if(a==2){
            alert("Already ordered")
          }
          
        })
        
        
      
  };       
      

  return (
    <div style={{backgroundColor:"black"}}>
      <Card className="bg-dark text-white">
      <Card.Img src={img1} alt="Card image" />
      <Card.ImgOverlay style={{backgroundColor:'#0000007e',textAlign:"center",fontFamily:"kodchasan"}}>
        <Card.Title ><h1>CART</h1></Card.Title>
        <Card.Text>That will make your mouth water</Card.Text>
      </Card.ImgOverlay>
    </Card>
      {editedItem ? (
        <div>
          <Col id='i2' lg={{ span: 6, offset: 3}}>
            <br></br><br></br>
          <Form onSubmit={handleEditSubmit} style={{width:"100%"}}>
          <Form.Group style={{width:"100%"}}>
            <Form.Label style={{width:"100%",color:"yellow"}}>Item name</Form.Label ><br></br> 
            <input style={{width:"100%"}} className='fc' type="text" name="itemname" onChange={(e) => setEditedItemName(e.target.value)} value={editedItemName} />
            </Form.Group><br></br>
            <Form.Group style={{width:"100%",color:"yellow"}}>  <Form.Label>Quantity</Form.Label><br></br> 
            <input style={{width:"100%"}} className='fc' type="text" name="quantity" onChange={(e) => setEditedItemQuantity(e.target.value)} value={editedItemQuantity} />
            </Form.Group>
            <br>
            </br><center><Button style={{fontSize:"30px",color:'yellow',fontFamily: 'Kodchasan',backgroundColor:'black',borderRadius: '8px',fontWeight:'normal'}} className='b1' type="submit">Save </Button> 
            <Button className='b1' style={{fontSize:"30px",color:'yellow',fontFamily: 'Kodchasan',backgroundColor:'black',borderRadius: '8px',fontWeight:'normal'}} type="button" onClick={handleCancelClick}>Close</Button></center>
          </Form></Col>
        </div>
      ) : (
        <div>
           <Col id='i2' lg={{ span: 6, offset: 3}}>
            <br></br><br></br>
          
           <Table hover variant="dark">
                <thead>
                  <tr style={{color:"yellow"}}>
                    <th>Item name</th>
                    <th>Qty</th>
                    <th>Amount</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
          {cart !== null ? (
            cart.map((item, index) => {
              return (
                
                  <tr key={index}>
                    <td>{item.itemname}</td>
                    <td>{item.quantity}</td>
                    <td>{item.Totalamount}</td>
                    <td><OverlayTrigger overlay={<Tooltip>Edit!</Tooltip>}><Button variant='Dark'  style={{backgrounColor:"black",fontSize:"15px"}}  onClick={() => handleEditClick(item)}>✏</Button></OverlayTrigger></td>
                   
                  </tr>
                 
               
              );
            })
          ) : (
            <div>No items found.</div>
          )}
           </tbody>
              </Table></Col>
              <center> <Button style={{fontSize:"30px",color:'yellow',fontFamily: 'Kodchasan',backgroundColor:'black',borderRadius: '8px',fontWeight:'normal'}} className='b1 '  onClick={save} >
                    order Now
              </Button></center>
        </div>
      )}
    </div>
  );
}
export default Page3;
