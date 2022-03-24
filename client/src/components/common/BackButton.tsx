import leftLeaf from '../../assets/icons/leaf-arrow-left.svg';
import { InfoPage } from '../../models/InfoType';

const BackButton = (props: {value: InfoPage, onClick: (value: InfoPage) => void}) => {
    return (
        <button className="backbutton" onClick={() => props.onClick(props.value)}>
            <img className="leaf" src={leftLeaf} alt={""}/>
            <div>Back</div>
        </button>
    )
}

export default BackButton;
