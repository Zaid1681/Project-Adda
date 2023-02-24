import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar_PA() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Project Adda</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link href="#">For People</Nav.Link>
            <Nav.Link href="#">Like You</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    </>
  );
}

export default Navbar_PA;