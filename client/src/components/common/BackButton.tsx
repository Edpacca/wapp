import leftLeaf from '../../assets/icons/leaf-arrow-left.svg';
import { InfoTypes } from "../info/Info";

const BackButton = (props: {value: InfoTypes, onClick: (value: InfoTypes) => void}) => {
    return (
        <button className="backbutton" onClick={() => props.onClick(props.value)}>
            <img className="leaf" src={leftLeaf} alt={""}/>
            <div>Back</div>
        </button>
    )
}

export default BackButton;
