import {useState} from "react";
import {Button, Form} from "react-bootstrap";

const EditableRow = ({ party, handleSaveClick }) => {
    const [name, setName] = useState(party.name)
    const [date, setDate] = useState(party.date)
    const [time, setTime] = useState(party.time)
    const [address, setAddress] = useState(party.address)
    const [city, setCity] = useState(party.city)

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
                    <Button onClick={ (event) => handleSaveClick(event,
                        {
                            id: party.id,
                            name: name,
                            date: date,
                            time: time,
                            address: address,
                            city: city
                        })
                    }>
                        Save
                    </Button>
                </td>
            </tr>
    )
}

export default EditableRow