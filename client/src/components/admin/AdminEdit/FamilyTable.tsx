import { Guest } from "../../../models/Guest";
import { useState } from 'react';
import { FamilyMembersTable } from './FamilyMembersTable';

export function FamilyTable(props: {guests: Guest[]}) {

    const [toggle, setToggle] = useState(false);
    const familyName = props.guests.length > 0 ? props.guests[0].family : "No fam data";

    return (
        <div className="tableWrapper">
            <div>
                <h3 className="famTitle" onClick={() => setToggle(!toggle)}>{familyName}</h3>
            </div>
            { toggle && <FamilyMembersTable guests={props.guests}/>}
        </div>
    )
}

