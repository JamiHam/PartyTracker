import {Table, Button} from "react-bootstrap";
import {markOnMap} from "./Map";


const SearchableEventTable = ({ getPartyState }) => {

    function showInMap(xCoord, yCoord) {
        markOnMap(xCoord, yCoord)

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
            {getPartyState().map(party =>
                <tr key={ party.id }>
                    <td>{ party.name }</td>
                    <td>{ party.date }</td>
                    <td>{ party.time }</td>
                    <td>{ party.address }</td>
                    <td>{ party.city }</td>
                    <Button onClick={() => showInMap(party.x, party.y)} variant="primary" size="sm" active>
                        Show in map
                    </Button>{' '}
                </tr>
            )}
            </tbody>
        </Table>
    )
}
export default SearchableEventTable