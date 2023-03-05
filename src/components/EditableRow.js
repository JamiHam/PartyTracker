import {useState} from "react";
import {Button, Form} from "react-bootstrap";

const EditableRow = ({ party, handleSaveClick, handleDeleteClick }) => {
    const [name, setName] = useState(party.name)
    const [date, setDate] = useState(party.date)
    const [time, setTime] = useState(party.time)
    const [address, setAddress] = useState(party.address)
    const [city, setCity] = useState(party.city)
    const [x, setX] = useState(party.x)
    const [y, setY] = useState(party.y)

    return (
            <tr>
                <td>
                    <Form.Control
                        type="text"
                        required="required"
                        value={ name }
                        onChange={ e => setName(e.target.value) }
                    />
                </td>
                <td>
                    <Form.Control
                        type="date"
                        required="required"
                        value={ date }
                        onChange={ e => setDate(e.target.value) }
                    />
                </td>
                <td>
                    <Form.Control
                        type="text"
                        required="required"
                        value={ time }
                        onChange={ e => setTime(e.target.value) }
                    />
                </td>
                <td>
                    <Form.Control
                        type="text"
                        required="required"
                        value={ address }
                        onChange={ e => setAddress(e.target.value) }
                    />
                </td>
                <td>
                    <Form.Control
                        type="text"
                        required="required"
                        value={ city }
                        onChange={ e => setCity(e.target.value) }
                    />
                </td>
                <td>
                    <Form.Control
                        type="number"
                        required="required"
                        value={ x }
                        onChange={ e => setX(e.target.value) }
                    />
                </td>
                <td>
                    <Form.Control
                        type="number"
                        required="required"
                        value={ y }
                        onChange={ e => setY(e.target.value) }
                    />
                </td>
                <td>
                    <Button className="custom-button" size="sm" onClick={ (event) => handleSaveClick(event,
                        {
                            id: party.id,
                            name: name,
                            date: date,
                            time: time,
                            address: address,
                            city: city,
                            x: x,
                            y: y
                        })
                    }>Save</Button>
                </td>
                <td>
                    <Button className="custom-button" size="sm" onClick={ (event) => handleDeleteClick(event,
                        {
                            id: party.id,
                        })
                    }>Delete</Button>
                </td>
            </tr>
    )
}

export default EditableRow