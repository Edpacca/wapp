import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { copyString } from "../../common/copyString";

export function Contact() {
    return (
        <div className="contact-avatars">
            <div className="avatar-phone">
                <h3>Ala</h3>
                <div className='number'><FontAwesomeIcon icon={faPhone}/> &nbsp; <a onClick={() => copyString("+447894556814")}>+44 7894 556 814</a></div>
                <h3>Eddie</h3>
                <div className='number'><FontAwesomeIcon icon={faPhone}/> &nbsp; <a onClick={() => copyString("+447305159528")}>+44 7305 159 528</a></div>
            </div>

        </div>
    )
}

