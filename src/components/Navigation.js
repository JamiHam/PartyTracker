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
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand className="text-light" href="/">PartyTracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="text-white-50" href="/">Search events</Nav.Link>
                        <Nav.Link className="text-white-50" href="/edit">Edit events</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        {showNotLoggedIn ?
                            <NavDropdown
                                title={<span className="text-white-50">Account</span>}
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item className="text-white-50" href="/Login">Login</NavDropdown.Item>
                                <NavDropdown.Item className="text-white-50" href="/Register">Register</NavDropdown.Item>
                            </NavDropdown> : null
                        }
                        {showLoggedIn ?
                            <NavDropdown
                                title={<span className="text-white-50">{logged}</span>}
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item className="text-white-50" onClick={logout} href="/">Logout</NavDropdown.Item>
                            </NavDropdown> : null
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation

