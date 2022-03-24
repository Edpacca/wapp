import { useAppDispatch } from "../../../store/hooks"
import { changePageInfo } from "../../nagivation/NavigationSlice"

export function ItineraryLinks() {
    const dispatch = useAppDispatch();

    return (
        <div>
            <button onClick={() => dispatch(changePageInfo('itinerary'))}>Itinerary</button>
            <button onClick={() => dispatch(changePageInfo('bigday'))}>Timeline</button>
        </div>
    )
}