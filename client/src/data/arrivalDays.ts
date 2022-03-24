import { days, times } from './constantsEngPol';

export interface ArrivalDay {
    day: string[],
    times: string[][]
}

export const ARRIVAL_DAYS: ArrivalDay[] = [
    {
        day: days.friday,
        times: [
            times.afternoon,
            times.evening
        ]
    },
    {
        day: days.saturday,
        times: [
            times.morning,
            times.noon,
            times.afternoon,
            times.evening,
        ]
    }
]

export const DEPARTURE_DAYS: ArrivalDay[] = [
    {
        day: days.saturday,
        times: [
            times.afternoon,
            times.evening,
        ]
    },
    {
        day: days.sunday,
        times: [
            times.morning,
            times.afternoon,
            times.evening
        ]
    },
    {
        day: days.monday,
        times: [
            times.morning
        ]
    }
]
