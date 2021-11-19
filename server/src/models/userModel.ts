import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const User = new Schema(
    {
        family: { type: String, required: true },
        hash: { type: String, required: true },
        name: { type: String, required: true },
        starter: { type: Number},
        main: { type: Number},
        dessert: { type: Number},
        diet: { type: String},
    }
)

export = mongoose.model('users', User)