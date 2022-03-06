import { ArrivalResponse } from '../../models/responses/ArrivalResponse';
import Arrival from '../../models/schema/arrivalModelSchema';

export async function GetArrivals() {

    const arrivals = await Arrival.find({});
    if (!arrivals || arrivals.length === 0) {
        return [];
    }

    const arrivalResponse: ArrivalResponse[] = [];

    arrivals.forEach(arrival => {
        arrivalResponse.push({
            family: arrival.family,
            familyId: arrival.familyId,
            day: arrival.day,
            time: arrival.time
        });
    })

    return arrivalResponse;
}
