import EventForm from "./EventForm";
import EditableEventTable from "./EditableEventTable";
import {Container} from "react-bootstrap";
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
        <Container>
            <EventForm getAllParties={ getAllParties } />
            <EditableEventTable parties={ parties } getAllParties={ getAllParties } />
        </Container>
    )
}

export default AdminPage