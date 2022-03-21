import { GENERAL_INFO } from "../../../data/infoData"
import { InfoBlock } from "./InfoBlock"

export function GeneralInfo() {
    return (
        <div className="info-blocks">
            {
                GENERAL_INFO.map(info => {
                return (
                    <>
                    <InfoBlock info={info}/>
                    <div className="horizontal-bar"/>
                    </>
                )
                
            })
            }
        </div>
    )
}