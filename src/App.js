  import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap"
import AppRouter from "./components/AppRouter";
  import Images from "./components/Images";
  import FooterBar from "./components/FooterBar";

function App() {

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">PartyTracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Search events</Nav.Link>
              <Nav.Link href="/edit">Edit events</Nav.Link>
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Register</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Images />

      <AppRouter />

      <FooterBar />
    </div>
  );
}

export default App
