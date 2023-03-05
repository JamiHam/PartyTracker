import EventForm from "./EventForm";
import EditableEventTable from "./EditableEventTable";
import {Card, Container} from "react-bootstrap";
import axios from "axios";
import {useEffect, useState} from "react";

const AdminPage = () => {
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

    return (
        <Container className="justify-content-center mt-3 mb-3">
            <Card className="shadow">
                <Card.Header as="h5">Add or edit events</Card.Header>
                <Card.Body>
                    <EventForm getAllParties={ getAllParties } />
                    <EditableEventTable parties={ parties } getAllParties={ getAllParties } />
                </Card.Body>
            </Card>
        </Container>
    )
}

export default AdminPage