import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const Arrival = new Schema(
    {
        familyId: { type: String, required: true },
        family: { type: String, required: true },
        arrivalDay: { type: String, default: null },
        arrivalTime: { type: String, default: null },
        departureDay: { type: String, default: null },
        departureTime: { type: String, default: null },
    }
)

export = mongoose.model('arrival', Arrival)
