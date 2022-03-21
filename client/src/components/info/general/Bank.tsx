import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons"
import { copyString } from "../../common/CopyString"

export function Bank() {
    return (
        <div className="bank">
            <FontAwesomeIcon icon={faPiggyBank} size={"2x"}/>
            <div onClick={() => copyString("040004")}>04-00-04</div>
            <div onClick={() => copyString("95548775")}>95548775</div>
        </div>
    )
}