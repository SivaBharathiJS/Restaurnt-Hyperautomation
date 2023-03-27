import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import img1 from "../images/hamburger-g998b23420_1920.jpg";
import '../d1.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function C1()  {
  const ms1 = {
    
    padding: "10px",
    margin:'10px',
    fontFamily:"kodchasan"
    
  };
 
    return (
      <div style={{backgroundColor:'black'}}>
     <Card className="bg-dark text-white">
      <Card.Img src={img1} alt="Card image" />
      <Card.ImgOverlay style={{backgroundColor:'#0000007e',textAlign:"center",fontFamily:"kodchasan"}}>
        <Card.Title ><h1>MENU</h1></Card.Title>
        <Card.Text>That will make your mouth water</Card.Text>
      </Card.ImgOverlay>
    </Card>
    <Navbar sticky={'top'} bg="dark" variant="dark"  className='navbar1'>
        <Container>
          <Nav className="me-auto text-center ">
           <Nav.Link style={ms1} className='nav1' active href="#i1">Home</Nav.Link>
            <Nav.Link style={ms1} className='nav1' href="#i2">Features</Nav.Link>
            <Nav.Link style={ms1} className='nav1' href="#i3">Pricing</Nav.Link>
            <Nav.Link style={ms1} className='nav1' href="#i4">Home</Nav.Link>
            <Nav.Link style={ms1} className='nav1' href="#i5">Features</Nav.Link>
            <Nav.Link style={ms1} className='nav1' href="#i6">Pricing</Nav.Link>
          </Nav>
         
        </Container>
    </Navbar>
     
    
       
    </div>
    )
  };
  
  export default C1;