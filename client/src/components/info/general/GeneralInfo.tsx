import { GENERAL_INFO } from "../../../data/infoData"
import { InfoBlock } from "./InfoBlock"

export function GeneralInfo(props: {languageIndex: 1 | 0}) {
    return (
        <div className="info-blocks">
            {
                GENERAL_INFO.map(info => {
                return (
                    <>
                    <InfoBlock info={info} languageIndex={props.languageIndex}/>
                    <div className="horizontal-bar"/>
                    </>
                )
                
            })
            }
        </div>
    )
}