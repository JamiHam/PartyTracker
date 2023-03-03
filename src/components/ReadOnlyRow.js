import {Button} from "react-bootstrap";

const ReadOnlyRow = ({ party, handleEditClick }) => {
    return (
        <tr>
            <td>{ party.name }</td>
            <td>{ party.date }</td>
            <td>{ party.time }</td>
            <td>{ party.address }</td>
            <td>{ party.city }</td>
            <td>{ party.x }</td>
            <td>{ party.y }</td>
            <td>
                <Button onClick={ (event) => handleEditClick(event, party) }>
                    Edit
                </Button>
            </td>
        </tr>
    )
}

export default ReadOnlyRow