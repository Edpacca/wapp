import Guest from '../../models/guestModelSchema';
import Seat from '../../models/seatModelSchema';
import { v4 as uuid } from 'uuid';
import { GuestResponse } from '../../models/userResponseModel';

export async function CreateGuest(request, result) {

    const existingGuest = await Guest.findOne({family: request.body.family});
    let familyId = existingGuest ? existingGuest.familyId : uuid();

    try {
        const guest = new Guest({
            name: request.body.name,
            family: request.body.family,
            familyId: familyId,
            starter: null,
            main: null,
            dessert: null,
            diet: null,
            seat: null,
        });

        guest.save()
        .then(() => {
            return result.status(201).json({
                success: true,
                id: guest._id,
                message: `Created guest ${guest.name} of ${guest.family} group`
            });
        });
    } catch (error) {
        return result.status(400).json({
            error,
            message: 'Guest not created',
        })
    }
}

export async function GetGuest(request, result) {

    Guest.findById({_id: request.query.id}, (err, guest) => {
        
        if (!guest) {
            return result.status(404).json({
                success: false,
                error: 'User not found',
            })
        }

        return result.status(200).json({guest})
    })
}

export function GetGuests(request, result) {
    Guest.find({}, function(err, guests) {
        return result.status(200).json(guests)
    })
}

export async function GetGuestsByFamily(request, result) {
    const guests = await Guest.find({ 'family' : request.body.family})

    if (!guests || guests.length === 0){
        return result.status(400).json({
            success: false,
            error: 'No family found'
        })
    }

    return result.status(200).json(guests);
}

export async function GetGuestObjectByFamily(family) {
    const guests = await Guest.find({ 'family' : family})

    if (!guests || guests.length === 0){
        return [];
    }

    const guestResponse: GuestResponse[] = [];

    guests.forEach(guest => {
        guestResponse.push({
            id: guest._id,
            family: guest.family,
            familyId: guest.familyId,
            name: guest.name,
            starter: guest.starter,
            main: guest.main,
            dessert: guest.dessert,
            diet: guest.diet,
            seat: guest.seat
        });
    })

    return guestResponse;
}

export async function BatchUpdateGuests(request, result) {
    const { edits, deletes } = request.body;

    await edits.forEach(guest => {
        Guest.findByIdAndUpdate({_id: guest.id}, {
            "name": guest.name,
            "starter": guest.starter,
            "main": guest.main,
            "dessert": guest.dessert,
            "diet": guest.diet,
            "seat": guest.seat }, (err, guest) => {
            
            if (!guest || err) {
                return result.status(500).send(err);
            }
        })});

    const options = { upsert: true, new: true, setDefaultsOnInsert: true };

    await edits.forEach(guest => {
        Seat.findOneAndUpdate({'guestId': guest.id}, {
            "guestId": guest.id,
            "guestName": guest.name,
            "seatNumber": guest.seat
        }, options, (err, seat) => {
            if (err) {
                return result.status(500).send(err);
            }
        });
    });

    await deletes.forEach(guest => {
        Guest.findByIdAndDelete({_id: guest.id}, (err, guest) => {
            if (!guest || err){
                return result.status(500).send(err);
            }
    })});

    deletes.forEach(guest => {
        Seat.findOneAndDelete({'guestId': guest.id}, (err, seat) => {
            if (err) {
                return result.status(500).send(err);
            }
        });
    })

    return result.status(200).json("updated");
}

export async function PutUpdateGuest(request, result) {

    const body = request.body

    if (!body) {
        return result.status(400).json({
            success: false,
            error: 'You must provide a guest to update',
        })
    }

    Guest.findByIdAndUpdate({_id: request.body.id}, {
        "starter": body.starter,
        "main": body.main,
        "dessert": body.dessert,
        "diet": body.diet,
        "seat": body.seat }, (err, guest) => {
        
        if (!guest) {
            return result.status(404).json({
                success: false,
                error: 'User not found',
            })
        }

        if (err) {
            return result.status(500).send(err)
        }

        return result.status(200).json(guest)
    })
}
