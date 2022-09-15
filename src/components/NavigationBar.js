import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from "react-bootstrap/Card";

function NavigationBar (){
  return (
    <>

    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <img src=  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/LOGO_KABUPATEN_TULANG_BAWANG.png/663px-LOGO_KABUPATEN_TULANG_BAWANG.png" width={100} height={100}></img>
        <Container> 
          <Navbar.Brand style={{color:"white"}} href="/">DINAS PERIKANAN
          <Card.Text style={{color:"orange"}}>TULANG BAWANG</Card.Text>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav className="me-center"></Nav>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/">HOME</Nav.Link>
            <Nav.Link as={Link} to="/Isiberita">BERITA</Nav.Link>
            <Nav.Link as={Link} to="/Isiartikel">ARTIKEL</Nav.Link>
             <NavDropdown title="GALERI" id="collasible-nav-galeri">
              <NavDropdown.Item as={Link} to="/Isifoto">FOTO</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Isivideo">VIDEO</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/Isiprofil">PROFIL</Nav.Link>
            <Nav.Link as={Link} to="/Isidokumen">DOKUMEN</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    </>
  )
}

export default NavigationBar;
