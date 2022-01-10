export interface Activity {
    name: string,
    location: string,
    time: string | undefined,
    details: string
    url: string | undefined
}
export interface Day {
    date: Date,
    title: string,
    activities: Activity[],
}

export const Days: Day[] = [
    {
        date: new Date(2022, 7, 15),
        title: "Friday 15th",
        activities: [
            {
                name: "Family meal",
                details: "A family meal at the house",
                location: "House at Bridge of Lochay",
                time: "approx. 7pm",
                url: undefined
            },
            {
                name: "Pub trip",
                details: "A trip to the local pub",
                location: "The Pub",
                time: "approx. 9pm",
                url: "https://www.fallsofdochartinn.co.uk/"
            },
        ]
    },
    {
        date: new Date(2022, 7, 16),
        title: "Saturday 16th",
        activities: [
            {
                name: "Breakfast",
                details: "A family meal at the house",
                location: "House at Bridge of Lochay",
                time: "until 11am",
                url: undefined
            },
            {
                name: "Signing Registry",
                details: "Gettin' hitched official like",
                location: "House at Bridge of Lochay",
                time: "11am",
                url: undefined
            },
            {
                name: "Wedding Ceremony",
                details: "A trip to the local pub",
                location: "House at Bridge of Lochay",
                time: "1pm",
                url: "https://www.fallsofdochartinn.co.uk/"
            },
            {
                name: "Post Hitched Cocktails / Nibbles",
                details: "A trip to the local pub",
                location: "House at Bridge of Lochay",
                time: "2pm",
                url: undefined
            },
            {
                name: "Dinner",
                details: "Food times",
                location: "House at Bridge of Lochay",
                time: "4pm",
                url: undefined
            },
        ]
    },
    {
        date: new Date(2022, 7, 17),
        title: "Sunday 17th",
        activities: [
            {
                name: "Breakfast",
                details: "A big ol' breaky to beat the hangover",
                location: "House at Bridge of Lochay",
                time: "approx. 11pm",
                url: undefined
            },
            {
                name: "Pub trip",
                details: "A trip to the local pub",
                location: "House at Bridge of Lochay",
                time: "approx. 7pm",
                url: "https://www.fallsofdochartinn.co.uk/"
            },
        ]
    },
    {
        date: new Date(2022, 7, 18),
        title: "Monday 18th",
        activities: [
            {
                name: "Family meal",
                details: "A family meal at the house",
                location: "House at Bridge of Lochay",
                time: "approx. 7pm",
                url: undefined
            },
            {
                name: "Pub trip",
                details: "A trip to the local pub",
                location: "House at Bridge of Lochay",
                time: "approx. 7pm",
                url: "https://www.fallsofdochartinn.co.uk/"
            },
        ]
    }
]