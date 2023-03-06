import {Col, Button, Row, Container, Card, Form} from "react-bootstrap";
import axios from "axios";
import { useState } from 'react'

const Login = () => {
    const [wronginfo, setWronginfo] = useState('Please enter your login and password!');
    const [wronginfoColor, setWronginfoColor] = useState('black');

    const handleSubmit = (event) => {
        console.log("handle submit")
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        else {
            event.preventDefault();
            let logUsername = document.getElementById("loginUsername").value;
            let logPass = document.getElementById("loginPassword").value;



            const data = {
                logUser: logUsername,
                logPassword: logPass,
            };

            axios.post(`http://localhost:8081/api/login`, { data }, )
                .then(res => {

                    if (res.status === 200) {

                        if (res.data !== 'Wrongpass') {
                            localStorage.removeItem("myToken");

                            let tokenKey='myToken'
                            localStorage.setItem(tokenKey,
                                JSON.stringify(res.data.accessToken));

                            // eslint-disable-next-line no-restricted-globals
                                location.replace("/")

                            localStorage.removeItem("currentUser");
                            let currentUser='currentUser'
                            localStorage.setItem(currentUser, logUsername)
                            localStorage.setItem('userRole', res.data.role)

                        }

                        else {
                            setWronginfoColor('red')
                            setWronginfo('Your login details were wrong please try again!')
                        }

                    }

                })

        }

    }


    return (

        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <div className="border border-3 border-primary"></div>
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-uppercase ">Login</h2>
                                    <p style={{color: wronginfoColor}} className=" mb-5">{wronginfo}</p>
                                    <div className="mb-3">
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                                <Form.Label className="text-center">
                                                    Username
                                                </Form.Label>
                                                <Form.Control id="loginUsername" type="text" placeholder="Enter username"/>
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control id="loginPassword" type="password" placeholder="Password"/>
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicCheckbox"
                                            >

                                            </Form.Group>
                                            <div className="d-grid">
                                                <Button variant="primary" type="submit">
                                                    Login
                                                </Button>
                                            </div>
                                        </Form>
                                        <div className="mt-3">
                                            <p className="mb-0  text-center">
                                                Don't have an account?{" "}
                                                <a href="/register" className="text-primary fw-bold">
                                                    Sign Up
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>);
}


export default Login