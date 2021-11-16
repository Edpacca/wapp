import express from 'express';
import * as _ from 'lodash';
import cors from 'cors';
import db from '../db'
import { appRouter as routes } from './routes/routes';


const app = express();
const port = 5500;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

routes(app);

const server = app.listen(port, function () {
    const address = server?.address();
    const port = _.isString(address) ? address : address?.port;
    console.log(`wapp server running on ${port}\n`);
}); 