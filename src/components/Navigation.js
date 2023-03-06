import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { useState } from 'react'
import axios from "axios";

const Navigation = () => {
    const [logged, setLogged] = useState('You are not currently logged in!');
    const [showNotLoggedIn, setShowNotLoggedIn] = useState(false);
    const [showLoggedIn, setShowLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false)
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
                    if(localStorage.getItem("userRole") === 'ROLE.ADMIN') {
                        setIsAdmin(true)
                    }

                    else {
                        setIsAdmin(false)
                    }

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
        localStorage.removeItem("userRole");
    }

    return (
        <Navbar bg="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand className="text-light" href="/">PartyTracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="text-white-50" href="/">Search events</Nav.Link>
                        { isAdmin ? <Nav.Link className="text-white-50" href="/edit">Edit events </Nav.Link> : null}
                    </Nav>
                    <Nav className="ms-auto">
                        {showNotLoggedIn ?
                            <NavDropdown
                                title="Account"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="/Login">Login</NavDropdown.Item>
                                <NavDropdown.Item href="/Register">Register</NavDropdown.Item>
                            </NavDropdown> : null
                        }
                        {showLoggedIn ?
                            <NavDropdown
                                title={logged}
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item onClick={logout} href="/">Logout</NavDropdown.Item>
                            </NavDropdown> : null
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation

