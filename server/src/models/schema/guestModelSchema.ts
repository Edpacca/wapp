import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const Guest = new Schema(
    {
        family: { type: String, required: true },
        familyId: { type: String, required: true },
        name: { type: String, required: true },
        surname: { type: String, default: null },
        starter: { type: Number, default: null },
        main: { type: Number, default: null },
        dessert: { type: Number, default: null },
        diet: { type: String, default: null },
        seat: {type: Number, default: null },
        room: {type: String, default: null }
    }
)

export = mongoose.model('guests', Guest)
