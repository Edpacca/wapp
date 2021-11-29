import { Guest } from "../../models/Guest";

export function GuestManager(props: { guests: Guest[] }) {
    return (
        <div className="table-wrapper">
            <table className="guest-table">
                <thead>
                    <tr className="table-headers">
                        <th>Family</th>
                        <th>Name</th>
                        <th>Id</th>
                        <th>Starter</th>
                        <th>Main</th>
                        <th>Dessert</th>
                        <th>Diet</th>
                    </tr>
                </thead>
                {
                    <tbody>{renderGuestData(props.guests)}</tbody>
                }
            </table>
        </div>
    )
    
}

function renderGuestData(guests: Guest[]) {
    return (
        guests.map(guest => {
            return(
                <tr className="adminTable">
                    <td>{guest.family}</td>
                    <td>{guest.name}</td>
                    <td><p className="link" onClick={(e) => {e.preventDefault(); copyId(guest.id);}}>{guest.id}</p></td>
                    <td>{guest.starter}</td>
                    <td>{guest.main}</td>
                    <td>{guest.dessert}</td>
                    <td>{guest.diet}</td>
                </tr>
            )
        })
    )
}



function copyId(id: string) {
    navigator.clipboard.writeText(id);

}