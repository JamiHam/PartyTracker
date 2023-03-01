import {useState} from "react";

const EditableRow = ({ party, handleSaveClick }) => {
    const [name, setName] = useState(party.name)
    const [date, setDate] = useState(party.date)
    const [time, setTime] = useState(party.time)
    const [address, setAddress] = useState(party.address)
    const [city, setCity] = useState(party.city)

    return (
        <tr>
            <td>
                <input
                    type="text"
                    required="required"
                    value={ name }
                    onChange={ e => setName(e.target.value) }>
                </input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    value={ date }
                    onChange={ e => setDate(e.target.value) }>
                </input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    value={ time }
                    onChange={ e => setTime(e.target.value) }>
                </input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    value={ address }
                    onChange={ e => setAddress(e.target.value) }>
                </input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    value={ city }
                    onChange={ e => setCity(e.target.value) }>
                </input>
            </td>
            <td>
                <button onClick={ (event) => handleSaveClick(event,
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
                </button>
            </td>
        </tr>
    )
}

export default EditableRow