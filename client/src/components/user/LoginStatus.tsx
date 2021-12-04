import { useState } from "react";

export function LoginStatus(props: {family: string, members: string[]}) {

    const [isActive, setIsActive] = useState(false);

    if (props.members) {

        const memberList = props.members.map(member => {
            return <option value={member}>{member}</option>
        });

        return (
            <div className="login-status">
                <div>
                    <span>{`Logged in as ${props.family}`}</span>
                    <button onClick={() => setIsActive(!isActive)} className="dropdown-button">&#9660;</button>
                </div>
                <div>
                {   
                    isActive &&
                    <div className="members">
                        {memberList}
                    </div>
                }
                </div>
            </div>
        )
    }

    return (<div></div>)
}
