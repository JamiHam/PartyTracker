import {Button, Col, Form} from "react-bootstrap";
import {useState} from "react";
import Row from 'react-bootstrap/Row';

const SearchEvent = ({ getAllParties, getPartiesByDate, getPartiesByCity }) => {
    const [criteria, setCriteria] = useState('all')
    const [minDate, setMinDate] = useState('')
    const [maxDate, setMaxDate] = useState('')
    const [city, setCity] = useState('')

    return (
        <Form>
            <Form.Group>
                <Form.Label>Select search criteria</Form.Label>
                <Form.Select value={ criteria } onChange={ e => setCriteria(e.target.value) }>
                    <option value='all'>Show all events</option>
                    <option value='date'>Search by date</option>
                    <option value='city'>Search by city</option>
                </Form.Select>
            </Form.Group>

            {criteria === 'all' && (
                <Form.Group>
                    <Button variant="outline-light" className="mt-3 custom-button" onClick={ getAllParties }>Search</Button>
                </Form.Group>
            )}

            {criteria === 'date' && (
                <div>
                    <Row>
                        <Form.Group as={ Col }>
                            <Form.Label>Minimum date</Form.Label>
                            <Form.Control
                                type='date'
                                value={ minDate }
                                onChange={ e => setMinDate(e.target.value) }
                            />
                        </Form.Group>
                        <Form.Group as={ Col }>
                            <Form.Label>Maximum date</Form.Label>
                            <Form.Control
                                type='date'
                                value={ maxDate }
                                onChange={ e => setMaxDate(e.target.value) }
                            />
                        </Form.Group>
                    </Row>
                    <Form.Group>
                        <Button variant="outline-light" className="mt-3 custom-button" onClick={ e => getPartiesByDate(minDate, maxDate) }>Search</Button>
                    </Form.Group>
                </div>
            )}

            {criteria === 'city' && (
                <div>
                    <Form.Group>
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type='text'
                            value={ city }
                            onChange={ e => setCity(e.target.value) }
                        />
                    </Form.Group>
                    <Button variant="outline-light" className="mt-3 custom-button" onClick={ e => getPartiesByCity(city) }>Search</Button>
                </div>
            )}
        </Form>
    )
}

export default SearchEvent