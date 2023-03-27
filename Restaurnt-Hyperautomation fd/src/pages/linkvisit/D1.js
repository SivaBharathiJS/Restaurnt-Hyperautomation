import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import img1 from "../linkvisit/images/img1.jpg";
import './d1.css'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
function Page1()  {
    return (
      <div style={{backgroundColor:'black'}}>
      <Container fluid>
      <Card className="bg-dark text-white d1"  style={{border:"none"}}>
      <Card.Img src={img1} alt="Card image" className='s1' />
      <Card.ImgOverlay className='c1'>
      <Navbar style={{backgroundColor:"#000000ca"}}  variant="dark">
        <Container >
          <Navbar.Brand style={{fontFamily:"Kodchasan"}} href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Siva Restaurant
          </Navbar.Brand>
        </Container>
      </Navbar>
        <Row className='c2'><Col lg={{ span: 6, offset: 3 }}>
        <Card className='c2  ' style={{backgroundColor: '#000000ca',boxShadow:'white 0px 0px 10px 1px '}}>
        <Button href="/Login" style={{borderStyle: "dashed",fontSize:"23px",color:'white',fontFamily: 'Kodchasan',backgroundColor:'black',border:'2px solid yellow',borderRadius: '8px',fontWeight:'bold'}}className='b1'>Order Now</Button>
          <Button style={{borderStyle: "dashed",fontSize:"23px",color:'white',fontFamily: 'Kodchasan',backgroundColor:'black',border:'2px solid yellow',borderRadius: '8px',fontWeight:'bold'}} className='b1' >Browse</Button>
         <Col lg={{ span: 10, offset: 4}}>
         <Nav className="me-auto ">
            <Nav.Link  href="#home"><i className="fa fa-facebook-square n1"/></Nav.Link>
            <Nav.Link href="#features"><i class="fa fa-instagram n1" aria-hidden="true"></i></Nav.Link>
            <Nav.Link href="#pricing"><i class="fa fa-twitter-square n1" aria-hidden="true"></i></Nav.Link>
            <Nav.Link href="#pricing"><i class="fa fa-map-marker n1" aria-hidden="true"></i></Nav.Link>
          </Nav></Col>
        </Card>
        </Col></Row>
        <Card body style={{fontFamily: 'Kodchasan',background:'#000000ca',border:'none',color:"white"}}>A  restaurant with a menu that
 will make your mouth water.
Tasty food within minutes.
The home food delivery service you need.
Treat your hunger.
We understand not everyone is a chef.. Food on your Door Step.</Card>
      </Card.ImgOverlay>
    </Card>
    </Container>
    </div>
    )
  };
  
  export default Page1;