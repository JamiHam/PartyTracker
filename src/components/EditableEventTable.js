import {Fragment, useEffect, useState} from "react";
import axios from "axios";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import {Table} from "react-bootstrap";

const EditableEventTable = () => {
    const [editing, setEditing] = useState(null)
    const [parties, setParties] = useState([])

    useEffect(() => {
        getAllParties();
    }, [])

    const getAllParties = () => {
        axios
            .get('http://localhost:8081/api/parties')
            .then(response => {
                console.log(response)
                setParties(response.data)
            })
    }

    const handleEditClick = (event, party) => {
        event.preventDefault()
        setEditing(party.id)
    }

    const handleSaveClick = (event, party) => {
        event.preventDefault()
        axios
            .patch('http://localhost:8081/api/parties', party)
            .then(response => {
                console.log(response)
                getAllParties()
            })
        setEditing(null)
    }

    return (
        <Table>
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
                {parties.map(party =>
                    <Fragment key={party.id}>
                        { editing === party.id ?
                            <EditableRow party={ party } handleSaveClick={ handleSaveClick }/> :
                            <ReadOnlyRow party={ party } handleEditClick={ handleEditClick }/>
                        }
                    </Fragment>
                )}
            </tbody>
        </Table>
    )
}

export default EditableEventTable