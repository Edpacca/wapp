import { InfoProps } from "../../../data/infoData";

export function InfoBlock(props: {info: InfoProps}) {
    return (
        <div className="info-block">
            <div className="info-block-head">{props.info.title}</div>
            <div>{props.info.details.map(detail => {
                if (detail === "") return <br/>
                return <div>{detail}</div>
            })}</div>
            {
                props.info.extraJSX &&
                props.info.extraJSX()
            }
            {
                props.info.link &&
                <a href={props.info.link[1]} target="blank">{props.info.link[0]}</a>
            }
        </div>
    )
}