import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import '../d1.css'
function HeaderAndFooterExample() {
  return (
    <>
     <br></br>
     <br></br><br></br><br></br>
    <Card className="text-center"  bg={'Dark'.toLowerCase()}
          key={'Dark'}
          text={'Dark'.toLowerCase() === 'light' ? 'dark' : 'white'}>
      <Card.Header><Col lg={{ span: 6, offset: 5}}>
         <Nav className="me-auto ">
            <Nav.Link  href="#home"><i className="fa fa-facebook-square n1"/></Nav.Link>
            <Nav.Link href="#features"><i class="fa fa-instagram n1" aria-hidden="true"></i></Nav.Link>
            <Nav.Link href="#pricing"><i class="fa fa-twitter-square n1" aria-hidden="true"></i></Nav.Link>
            <Nav.Link href="#pricing"><i class="fa fa-map-marker n1" aria-hidden="true"></i></Nav.Link>
          </Nav></Col></Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button style={{fontSize:"18px",color:'white',fontFamily: 'Kodchasan',borderStyle:"dashed",backgroundColor:'black',border:'2px solid yellow',borderRadius: '10px',fontWeight:'normal'}} variant="secondary">Browse More</Button>
      </Card.Body>
      
    </Card>
    </>
  );
}

export default HeaderAndFooterExample;