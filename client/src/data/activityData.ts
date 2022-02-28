import leaf from '../assets/icons/leaf-solid.svg';

export interface Activity {
    heading: string,
    location: string,
    time: string,
    subheading?: string,
    details?: string
    url?: string
    icon?: string
}
export interface Day {
    date: Date,
    title: string,
    activities: Activity[],
}

export const BIG_DAY_SCHEDULE: Activity[] = [
    {
        heading: "Signing Registry",
        location: "Killin Registry Office",
        time: "12:00",
        subheading: "Bride, Groom + witnesses only",
        details: "In Scotland Franny can't legally marry us so in the morning we will sneak off with our witnesses' to do the nuptuals."
    },
    {
        heading: "Ceremony",
        location: "Finlarig Estate",
        time: "13:00",
        details: "Conducted by Franny the celebrant. This will involve some singing and planting of a seed."
    },
    {
        heading: "Photographs",
        location: "Finlarig Castle",
        time: "14:00",
        subheading: "Everyone!",
        details: "We'd love to get some photos of all the guests, then family photos, the bridal and groom parties before the couple go for private photos while everyone else heads back for the drinks reception."
    },
    {
        heading: "Drinks Reception",
        location: "House at the Bridge of Lochay",
        time: "14:30",
        details: "There will be some nibbles, games and of course a DIY bar. Expect a few live music performances here and there!"
    },
    {
        heading: "Dinner",
        location: "House at the Bridge of Lochay",
        time: "18:00",
        subheading: "Speeches, Dinner and toasts",
        details: "We sit down together to share a 3 course meal at a leisurely pace, with time for toasts and any one else who wants to share a few words."
    },
    {
        heading: "Dancing",
        location: "House at the Bridge of Lochay",
        time: "20:00",
    }
]

export const DAYS: Day[] = [
    {
        date: new Date(2022, 7, 15),
        title: "Friday",
        activities: [
            {
                heading: "Family meal",
                details: "A family meal at the house",
                location: "House at Bridge of Lochay",
                time: "approx. 7pm",
                icon: leaf,
            },
            {
                heading: "Pub trip",
                details: "A trip to the local pub",
                location: "The Pub",
                time: "approx. 9pm",
                url: "https://www.fallsofdochartinn.co.uk/"
            },
        ]
    },
    {
        date: new Date(2022, 7, 16),
        title: "Saturday",
        activities: [
            {
                heading: "Breakfast",
                details: "A family meal at the house",
                location: "House at Bridge of Lochay",
                time: "until 11am",
            },
            {
                heading: "Signing Registry",
                details: "Gettin' hitched official like",
                location: "House at Bridge of Lochay",
                time: "11am",
            },
            {
                heading: "Wedding Ceremony",
                details: "A trip to the local pub",
                location: "House at Bridge of Lochay",
                time: "1pm",
                url: "https://www.fallsofdochartinn.co.uk/"
            },
            {
                heading: "Post Hitched Cocktails / Nibbles",
                details: "A trip to the local pub",
                location: "House at Bridge of Lochay",
                time: "2pm",
            },
            {
                heading: "Dinner",
                details: "Food times",
                location: "House at Bridge of Lochay",
                time: "4pm",
            },
        ]
    },
    {
        date: new Date(2022, 7, 17),
        title: "Sunday",
        activities: [
            {
                heading: "Breakfast",
                details: "A big ol' breaky to beat the hangover",
                location: "House at Bridge of Lochay",
                time: "approx. 11pm",
            },
            {
                heading: "Pub trip",
                details: "A trip to the local pub",
                location: "House at Bridge of Lochay",
                time: "approx. 7pm",
                url: "https://www.fallsofdochartinn.co.uk/"
            },
        ]
    },
    {
        date: new Date(2022, 7, 18),
        title: "Monday",
        activities: [
            {
                heading: "Family meal",
                details: "A family meal at the house",
                location: "House at Bridge of Lochay",
                time: "approx. 7pm",
            },
            {
                heading: "Pub trip",
                details: "A trip to the local pub",
                location: "House at Bridge of Lochay",
                time: "approx. 7pm",
                url: "https://www.fallsofdochartinn.co.uk/"
            },
        ]
    }
]
