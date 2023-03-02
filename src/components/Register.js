import {Col, Button, Row, Container, Card, Form} from "react-bootstrap";
import axios from "axios";

const Register = () => {

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
                    if(res.status == 200) {
                        // eslint-disable-next-line no-restricted-globals
                        location.replace("/Login")
                    }
                    console.log(res);
                    console.log(res.data);
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
                                    <h2 className="fw-bold mb-2 text-uppercase ">Register</h2>
                                    <p className=" mb-5">Please enter your username and password!</p>
                                    <div className="mb-3">
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
                                                    placeholder="Enter username"
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
                                                <Button variant="primary" type="submit">
                                                    Login
                                                </Button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>);
}


export default Register