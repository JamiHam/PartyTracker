import {Fragment, useEffect, useState} from "react";
import axios from "axios";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import { format } from "date-fns";

const EventTable = () => {
    const [party, setParty] = useState([])
    const [editing, setEditing] = useState(null)

    useEffect(() => {
        getAllParties()
    }, [])

    const getAllParties = () => {
        axios
            .get('http://localhost:8081/api/parties')
            .then(response => {
                console.log('promise fulfilled')
                setParty(response.data)
            })
    }

    const handleEditClick = (event, party) => {
        event.preventDefault()
        setEditing(party.id)
    }

    const handleSaveClick = (event, party) => {
        event.preventDefault()
        console.log(party)
        axios
            .patch('http://localhost:8081/api/parties', party)
            .then(response => {
                console.log(response)
                getAllParties()
            })
        setEditing(null)
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Event name</th>
                    <th>Event date</th>
                    <th>Event time</th>
                    <th>Event address</th>
                    <th>Event city</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {party.map(party =>
                    <Fragment key={party.id}>
                        { editing === party.id ?
                            <EditableRow party={ party } handleSaveClick={ handleSaveClick }/> :
                            <ReadOnlyRow party={ party } handleEditClick={ handleEditClick }/>
                        }
                    </Fragment>
                )}
            </tbody>
        </table>
    )
}

export default EventTable