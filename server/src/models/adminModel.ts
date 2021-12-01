import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const Admin = new Schema(
    {
        name: { type: String, unique: true},
        password: { type: String },
        token: { type: String }
    }
)

export = mongoose.model('admin', Admin)