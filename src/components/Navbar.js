import { useEffect, useState } from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"


export const NavbarComponent = (props) => {
  const [isbackgroundwhite, setIsBackgroundWhite] = useState(false);

  const handleClick = () => {
    setIsBackgroundWhite(!isbackgroundwhite);
  }

  useEffect(() => {
    document.body.style.background = isbackgroundwhite ? "white" : "";
    return () => {
      document.body.style.background = "";
    }
  }, [isbackgroundwhite]);

  
    return (
        <Navbar display="flex" style={{background: 'linear-gradient(to bottom, rgb(158,123,158) 0%, rgb(163, 74, 163)100%'}} bg="dark" variant="dark" expand="sm" className="navbar">
        <Container>
          <Navbar.Brand className="logo" onClick={handleClick}>KE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/">Hem</Nav.Link>
              <Nav.Link as={NavLink} to="/om-mig">Om mig</Nav.Link>
              <Nav.Link as={NavLink} to="/cv">CV</Nav.Link>
              <Nav.Link as={NavLink} to="/portfolio">Portfolio</Nav.Link>
              <Nav.Link as={NavLink} to="/kontakt">Kontakt</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}