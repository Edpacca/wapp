import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const Room = new Schema(
    {
        roomNumber: { type: String, required: true, unique: true },
        guestNames: { type: [ String ], required: true }
    }
)

export = mongoose.model('rooms', Room)
