import barrel from '../assets/icons/barrel.svg';
import house from '../assets/icons/house.svg';
import knifeFork from '../assets/icons/knife-fork.svg';
import rings from '../assets/icons/rings.svg';
import coffee from '../assets/icons/coffee.svg';
import pen from '../assets/icons/pen.svg';
import drink from '../assets/icons/drink.svg';
import camera from '../assets/icons/camera.svg';
import disco from '../assets/icons/disco.svg';

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
    summary: string,
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
        summary: "Friday will be a relaxed time for folk to turn up and get settled",
        activities: [
            {
                heading: "Family meal",
                details: "A family meal at the house",
                location: "House at Bridge of Lochay",
                time: "~7pm",
                icon: house,
            },
            {
                heading: "Pub trip",
                details: "A trip to the local pub",
                location: "The Pub",
                time: "~9pm",
                url: "https://www.fallsofdochartinn.co.uk/",
                icon: barrel,
            },
        ]
    },
    {
        date: new Date(2022, 7, 16),
        title: "Saturday",
        summary: "Saturdy is the big day! Also check out our interactive scrolling timeline 😎",
        activities: [
            {
                heading: "Breakfast",
                details: "A help yourself breakfast situation",
                location: "House at Bridge of Lochay",
                time: "morning",
                icon: coffee
            },
            {
                heading: "Signing Registry",
                details: "Ala, Eddie and their witnesses will head off to officially get married in Killin",
                location: "Killing Registry Office",
                time: "11am",
                icon: pen
            },
            {
                heading: "Wedding Ceremony",
                details: "The big ceremony",
                location: "Finlarig Castle",
                time: "1pm",
                url: "https://www.undiscoveredscotland.co.uk/killin/finlarigcastle/index.html",
                icon: rings
            },
            {
                heading: "Photographs",
                details: "Group photos then individual photos",
                location: "Finlarig Castle",
                time: "2pm",
                icon: camera
            },
            {
                heading: "Drinks Reception",
                details: "While the bride and groom get their couple photos taken, the rest of you can head back to the house for some afternoon drinks, nibbles and games.",
                location: "House at Bridge of Lochay",
                time: "2:30pm",
                icon: drink
            },
            {
                heading: "Dinner",
                details: "Food times",
                location: "House at Bridge of Lochay",
                time: "6pm",
                icon: knifeFork
            },
            {
                heading: "Dancing",
                details: "Dance times",
                location: "House at Bridge of Lochay",
                time: "8pm",
                icon: disco
            },
        ]
    },
    {
        date: new Date(2022, 7, 17),
        title: "Sunday",
        summary: "Friday will be a relaxed time for folk to turn up and get settled",
        activities: [
            {
                heading: "Breakfast",
                details: "A big ol' breaky to beat the hangover",
                location: "House at Bridge of Lochay",
                time: "Morning",
                icon: coffee,
            },
            {
                heading: "Wee Hike",
                details: "A short outdoor adventure around Killin",
                location: "Killing",
                time: "Noon",
                icon: coffee,
            },
            {
                heading: "Pub trip",
                details: "A trip to the local pub",
                location: "House at Bridge of Lochay",
                time: "Evening",
                url: "https://www.fallsofdochartinn.co.uk/",
                icon: barrel
            },
        ]
    },
    {
        date: new Date(2022, 7, 18),
        title: "Monday",
        summary: "We have the House and The Bridge of Lochay booked until 10am on Monday morning. We should all make an effort to be ready to go by this time.",
        activities: [
            {
                heading: "Departure",
                details: "Final goodbyes",
                location: "House at Bridge of Lochay",
                time: "10am",
                icon: house
            },
        ]
    }
]
