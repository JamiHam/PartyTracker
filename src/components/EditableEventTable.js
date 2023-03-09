import {Fragment, useState} from "react";
import axios from "axios";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import {Table} from "react-bootstrap";

const EditableEventTable = ({ parties, getAllParties }) => {
    const tokenObj = localStorage.getItem("myToken")
    const [editing, setEditing] = useState(null)

    const handleEditClick = (event, party) => {
        event.preventDefault()
        setEditing(party.id)
    }

    const handleSaveClick = (event, party) => {
        event.preventDefault()
        axios
            .patch('http://localhost:8081/api/parties', party, {headers: {Authorization: 'Bearer: '+tokenObj}})
            .then(response => {
                console.log(response)
                getAllParties()
            })
        setEditing(null)
    }

    const handleDeleteClick = (event, party) => {
        event.preventDefault()
        axios
            .delete('http://localhost:8081/api/parties', { data: party, headers: {Authorization: 'Bearer: '+tokenObj} })
            .then(response => {
                console.log(response)
                getAllParties()
            })
        setEditing(null)
    }

    return (
        <Table striped bordered hover className="mt-3">
            <thead>
                <tr>
                    <th>Event name</th>
                    <th>Event date</th>
                    <th>Event time</th>
                    <th>Event address</th>
                    <th>Event city</th>
                    <th>X-coordinate</th>
                    <th>Y-coordinate</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {parties.map(party =>
                    <Fragment key={party.id}>
                        { editing === party.id ?
                            <EditableRow
                                party={ party }
                                handleSaveClick={ handleSaveClick }
                                handleDeleteClick={ handleDeleteClick }
                            /> :
                            <ReadOnlyRow
                                party={ party }
                                handleEditClick={ handleEditClick }
                            />
                        }
                    </Fragment>
                )}
            </tbody>
        </Table>
    )
}

export default EditableEventTable