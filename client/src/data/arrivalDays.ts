export interface ArrivalDay {
    day: string,
    times: string[]
}

export const ARRIVAL_DAYS: ArrivalDay[] = [
    {
        day: "Friday",
        times: [
            "Afternoon",
            "Evening",
        ]
    },
    {
        day: "Saturday",
        times: [
            "Morning",
            "Noon",
            "Afternoon",
            "Evening"
        ]
    }
]

export const DEPARTURE_DAYS: ArrivalDay[] = [
    {
        day: "Saturday",
        times: [
            "Afternoon",
            "Evening",
        ]
    },
    {
        day: "Sunday",
        times: [
            "Morning",
            "Afternoon",
            "Evening"
        ]
    },
    {
        day: "Monday",
        times: [
            "Morning",
        ]
    }
]
