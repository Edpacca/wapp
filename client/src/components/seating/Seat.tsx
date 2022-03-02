export const Seat = (props: { seatNumber: number, occupant?: string }) => {
    return(
        <div className="seat">
            <div className="seat-number">{props.seatNumber}</div>
            {
                props.occupant &&
                <div className="occupant">{props.occupant}</div>
            }
        </div>
    )
}
