import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const Arrival = new Schema(
    {
        familyId: { type: String, required: true },
        family: { type: String, required: true },
        day: { type: String, default: null },
        time: { type: String, default: null },
    }
)

export = mongoose.model('arrival', Arrival)