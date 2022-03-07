import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const Seat = new Schema(
    {
        guestId: { type: String, required: true },
        guestName: { type: String, required: true },
        seatNumber: { type: String, required: true }
    }
)

export = mongoose.model('seats', Seat)
