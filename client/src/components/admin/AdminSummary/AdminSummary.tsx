import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Guest } from "../../../models/Guest";
import { GuestRows } from './GuestRows';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { starters, mains, desserts } from "../../../data/menuData";
import { CourseSummary } from "./CourseSummary";

export function AdminSummary(props: {guests: Guest[]}) {

    const [guests, setGuests] = useState<Guest[]>(props.guests);

    return (
        <div className="tight-table-wrapper">
            <h3>Guest Summmary</h3>
            <table className="tightTable">
                <thead>
                    <th>Name</th>
                    <th>Starter</th>
                    <th>Main</th>
                    <th>Dessert</th>
                    <th>Diet</th>
                    <th>Seat <FontAwesomeIcon onClick={() => setGuests(sortGuests([...guests], sortBySeat))} icon={faAngleDown}/></th>
                    <th>Room <FontAwesomeIcon onClick={() => setGuests(sortGuests([...guests], sortByRoom))} icon={faAngleDown}/></th>
                </thead>
                {GuestRows(guests.filter(guest => guest.starter?.toString() && guest.main?.toString() && guest.dessert?.toString()), "chosen")}
                {GuestRows(guests.filter(guest => guest.starter === null || guest.main === null || guest.dessert === null), "pending")}
            </table>
            <div className="admin-course-summary">
                <h2>Starters</h2>
                {
                    starters.map(starter => {
                        const total = guests.filter(guest => guest.starter === starter.value).length;
                        return <CourseSummary foodItem={starter} total={total}/>
                    })
                }
                <h2>Mains</h2>
                {
                    mains.map(main => {
                        const total = guests.filter(guest => guest.starter === main.value).length;
                        return <CourseSummary foodItem={main} total={total}/>
                    })
                }
                <h2>Desserts</h2>
                {
                    desserts.map(dessert => {
                        const total = guests.filter(guest => guest.starter === dessert.value).length;
                        return <CourseSummary foodItem={dessert} total={total}/>
                    })
                }
            </div>
        </div>
    )
}

function sortGuests(guests: Guest[], comparator: (a: Guest, b: Guest) => number) {
   return guests.sort(comparator);
}

const sortByRoom = (a: Guest, b: Guest) => {
    if (a.room && b.room) {
        if (a.room < b.room) return -1;
        if (a.room > b.room) return 1;
        return 0;
    }
    return 0;
}

const sortBySeat = (a: Guest, b: Guest) => {
    if (a.seat && b.seat) {
        if (a.seat < b.seat) return -1;
        if (a.seat > b.seat) return 1;
        return 0;
    }
    return 0;
}