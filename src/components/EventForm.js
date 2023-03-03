import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";

const EventForm = ({ getAllParties }) => {
    const [validated, setValidated] = useState(false)
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [x, setX] = useState('')
    const [y, setY] = useState('')

    const addParty = () => {
        const party = {
            name: name,
            date: date,
            time: time,
            address: address,
            city: city,
            x: x,
            y: y,
        }

        axios
            .post('http://localhost:8081/api/parties', party)
            .then(response => {
                console.log(response)
                getAllParties()
            })
        console.log("successfully added")
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.stopPropagation()
        } else {
            addParty()
        }
        setValidated(true)
    }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
                <Form.Group as={Col} controlId="validationCustom01">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Name"
                        value={ name }
                        onChange={ e => setName(e.target.value) }
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid name.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId="validationCustom02">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        required
                        type="date"
                        value={ date }
                        onChange={ e => setDate(e.target.value) }
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid date.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="validationCustom03">
                    <Form.Label>Time</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type="time"
                            placeholder="Time"
                            required
                            value={ time }
                            onChange={ e => setTime(e.target.value) }
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid time.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} controlId="validationCustom04">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="City"
                        required
                        value={ city }
                        onChange={ e => setCity(e.target.value) }
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="validationCustom05">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Address"
                        required
                        value={ address }
                        onChange={ e => setAddress(e.target.value) }
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid address.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} controlId="validationCustom06">
                    <Form.Label>X-coordinate</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="X"
                        required
                        value={ x }
                        onChange={ e => setX(e.target.value) }
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid coordinate.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="validationCustom07">
                    <Form.Label>Y-coordinate</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Y"
                        required
                        value={ y }
                        onChange={ e => setY(e.target.value) }
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid coordinate.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Button className="mt-3" type="submit">Add event</Button>
        </Form>
    )
}

export default EventForm