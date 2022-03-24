import { InfoProps } from "../../../data/infoData";

export function InfoBlock(props: {info: InfoProps, languageIndex: 1 | 0}) {
    return (
        <div className="info-block">
            <div className="info-block-head">{props.info.title[props.languageIndex]}</div>
            {
                props.info.icon &&
                <img src={props.info.icon} className="info-block-icon"/>
            }
            <div>{props.info.details[props.languageIndex].map(detail => {
                if (detail === "") return <br/>
                return <div>{detail}</div>
            })}</div>
            {
                props.info.extraJSX &&
                props.info.extraJSX()
            }
            {
                props.info.link &&
                <a href={props.info.link[1]} target="blank">{props.info.link[0][props.languageIndex]}</a>
            }
        </div>
    )
}