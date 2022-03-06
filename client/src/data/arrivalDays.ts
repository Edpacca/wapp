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