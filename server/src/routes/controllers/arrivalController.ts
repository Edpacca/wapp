import { ArrivalResponse } from '../../models/responses/ArrivalResponse';
import Arrival from '../../models/schema/arrivalModelSchema';

export async function getArrivals() {

    const arrivals = await Arrival.find({});
    if (!arrivals || arrivals.length === 0) {
        return [];
    }

    const arrivalResponse: ArrivalResponse[] = [];

    arrivals.forEach(arrival => {
        arrivalResponse.push({
            family: arrival.family,
            familyId: arrival.familyId,
            arrivalDay: arrival.arrivalDay,
            arrivalTime: arrival.arrivalTime,
            departureDay: arrival.departureDay,
            departureTime: arrival.departureTime,
        });
    })

    return arrivalResponse;
}

export async function updateArrival(request, result) {
    const arrival = request.body;

    const options = { upsert: true, new: true, setDefaultsOnInsert: true };

    Arrival.findOneAndUpdate({'familyId': arrival.familyId}, {
        "familyId": arrival.familyId,
        "family": arrival.family,
        "arrivalDay": arrival.arrivalDay,
        "arrivalTime": arrival.arrivalTime,
        "departureDay": arrival.departureDay,
        "departureTime": arrival.departureTime,
    }, options, (err) => {
        if (err) {
            return result.status(500).send(err);
        }
    });

    return result.status(200).json({ result: "SUCCESS", arrival });
}

export async function getArrivalsAdmin(request, result) {
    Arrival.find({}, function(err, arrivals) {
        return result.status(200).json(arrivals)
    })
}
