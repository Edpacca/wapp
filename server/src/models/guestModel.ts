import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const Guest = new Schema(
    {
        family: { type: String, required: true },
        familyId: { type: String, required: true },
        name: { type: String, required: true },
        starter: { type: Number },
        main: { type: Number },
        dessert: { type: Number },
        diet: { type: String },
    }
)

export = mongoose.model('guests', Guest)