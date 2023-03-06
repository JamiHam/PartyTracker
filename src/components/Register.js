import {Button, Container, Card, Form} from "react-bootstrap";
import axios from "axios";
import { useState } from 'react'

const Register = () => {
    const [wronginfo, setWronginfo] = useState('Please enter your username, email and password!');
    const [wronginfoColor, setWronginfoColor] = useState('black');


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        else {
            event.preventDefault();
            let regUsername = document.getElementById("regUsername").value;
            let regPass = document.getElementById("regPassword").value;
            let regEmail = document.getElementById("regEmail").value;


            let today = new Date();
            let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            let dateTime = date+' '+time;

            const data = {
                regUser: regUsername,
                regEmail: regEmail,
                regPassword: regPass,
                regTime: dateTime,
                role: 'ROLE.BASIC'
            };

            axios.post(`http://localhost:8081/api/register`, { data }, )
                .then(res => {
                    if(res.status === 200) {
                        if(res.data === 'accountExists') {
                        //if account exists already
                            setWronginfo('Account already exists!')
                            setWronginfoColor('red')


                        }
                        else{
                            // eslint-disable-next-line no-restricted-globals
                            location.replace("/Login")
                        }
                    }
                })

        }

    }



    return (
        <Container className="d-flex justify-content-center align-items-center mt-5 mb-5">
            <Card className="shadow">
                <Card.Header as="h5">Register</Card.Header>
                <Card.Body>
                    <div className="mb-3">
                        <p style={{color: wronginfoColor}}>{wronginfo}</p>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicUsername">
                                    <Form.Label className="text-center">
                                        Username
                                    </Form.Label>
                                    <Form.Control
                                        required
                                        id="regUsername"
                                        type="text"
                                        placeholder="Enter username"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="text-center">
                                        Email
                                    </Form.Label>
                                    <Form.Control
                                        required
                                        id="regEmail"
                                        type="email"
                                        placeholder="Enter email"
                                    />
                                </Form.Group>


                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicPassword"
                                >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        required
                                        id="regPassword"
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicCheckbox"
                                >

                                </Form.Group>
                                <div className="d-grid">
                                    <Button className="custom-button" variant="outline-light" type="submit">
                                        Register
                                    </Button>
                                </div>
                            </Form>
                        </div>
                </Card.Body>
            </Card>
        </Container>
    );
}


export default Register