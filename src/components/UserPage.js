import SearchEvent from "./SearchEvent";
import Map from "./Map";
import {useEffect, useState} from "react";
import axios from "axios";
import SearchableEventTable from "./SearchableEventTable";
import {Card, Container} from "react-bootstrap";

const UserPage = () => {
    const [parties, setParties] = useState([])

    useEffect(() => {
        getAllParties()
    }, [])

    const getAllParties = () => {
        axios
            .get('http://localhost:8081/api/parties')
            .then(response => {
                console.log(response)
                setParties(response.data)
            })
    }

    const getPartiesByDate = (minDate, maxDate) => {
        axios
            .get('http://localhost:8081/api/parties/date?min=' + minDate + '&max=' + maxDate)
            .then(response => {
                console.log(response)
                setParties(response.data)
            })
    }

    const getPartiesByCity = (city) => {
        axios
            .get('http://localhost:8081/api/parties/city?city=' + city)
            .then(response => {
                console.log(response)
                setParties(response.data)
            })
    }

    const getPartyState = () => {
        return parties
    }

    return (
        <Container className="justify-content-center mt-3 mb-3">
            <Card className="shadow">
                <Card.Header as="h5">Search for events</Card.Header>
                <Card.Body>
                    <SearchEvent
                        getAllParties={ getAllParties }
                        getPartiesByDate={ getPartiesByDate }
                        getPartiesByCity={ getPartiesByCity }
                    />
                    <SearchableEventTable
                        getPartyState={ getPartyState }
                        getAllParties={ getAllParties }
                    />
                    <Map />
                </Card.Body>
            </Card>
        </Container>
    )
}

export default UserPage