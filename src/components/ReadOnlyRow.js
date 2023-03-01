
const ReadOnlyRow = ({ party, handleEditClick }) => {
    return (
        <tr>
            <td>{ party.name }</td>
            <td>{ party.date }</td>
            <td>{ party.time }</td>
            <td>{ party.address }</td>
            <td>{ party.city }</td>
            <td>
                <button onClick={ (event) => handleEditClick(event, party) }>
                    Edit
                </button>
            </td>
        </tr>
    )
}

export default ReadOnlyRow