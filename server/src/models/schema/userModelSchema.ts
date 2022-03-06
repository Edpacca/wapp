import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const User = new Schema(
    {
        family: { type: String, default: null, unique: true },
        familyId: {type: String },
        password: { type: String },
        token: { type: String },
        admin: { type: Boolean },
    }
)

export = mongoose.model('users', User)