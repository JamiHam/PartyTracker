import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { useState } from 'react'
import axios from "axios";



const Navigation = () => {

    const [logged, setLogged] = useState('You are not currently logged in!');
    const [showNotLoggedIn, setShowNotLoggedIn] = useState(false);
    const [showLoggedIn, setShowLoggedIn] = useState(false);
    checkLoginStatus();


    function checkLoginStatus() {

        let token = localStorage.getItem("myToken");

        const data = {
            token: token
        };

        axios.post("http://localhost:8081/logged_in", {data}, )
            .then(res => {
                if (res.status === 200) {
                    let user = localStorage.getItem("currentUser");
                    setLogged(user)
                    setShowNotLoggedIn(false)
                    setShowLoggedIn(true)
                }

                else {
                    setLogged('You are not currently logged in!')
                    setShowNotLoggedIn(true)
                    setShowLoggedIn(false)
                }
            })

    }

    function logout() {
        localStorage.removeItem("myToken");
        localStorage.removeItem("currentUser");
    }



    return (

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">PartyTracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Search events</Nav.Link>
                        <Nav.Link href="/edit">Edit events</Nav.Link>
                        {showNotLoggedIn ? <NavDropdown title="Account" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/Login">Login</NavDropdown.Item>
                            <NavDropdown.Item href="/Register">Register</NavDropdown.Item>
                        </NavDropdown> : null}
                        {showLoggedIn ? <NavDropdown title={ logged } id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={logout} href="/">Logout</NavDropdown.Item>
                        </NavDropdown> : null}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )

}

export default Navigation

