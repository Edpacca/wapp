import { GENERAL_INFO } from "../../../data/infoData"
import { InfoPage } from "../../../models/InfoType";
import BackButton from "../../common/BackButton"
import { InfoBlock } from "./InfoBlock"
import { useAppDispatch } from "../../../store/hooks";
import { changePageInfo } from "../../nagivation/NavigationSlice";

export function GeneralInfo(props: {languageIndex: 1 | 0}) {

    const dispatch = useAppDispatch();
    function setActiveInfo(infoPage: InfoPage) {
        dispatch(changePageInfo(infoPage));
    }

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
            <BackButton value={'none'} onClick={setActiveInfo}/>
        </div>
    )
}