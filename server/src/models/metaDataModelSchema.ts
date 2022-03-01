import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const MetaData = new Schema(
    {
        family: { type: String, required: true },
        familyId: { type: String, required: true },
        arrival: { type: String, default: null },
    }
)

export = mongoose.model('metadata', MetaData)