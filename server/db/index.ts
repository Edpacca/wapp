import mongoose from 'mongoose';
import 'dotenv/config';

const { MONGO_URI } = process.env;

mongoose
    .connect(MONGO_URI as string)
    .catch(e => {
        console.error('Connection error', e.message)
    });

export default mongoose.connection;

