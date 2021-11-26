import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import * as _ from 'lodash';
import cors from 'cors';
import db from '../db'
import { appRouter as routes } from './routes/routes';
import 'dotenv/config';

const app = express();
const { API_PORT } = process.env;
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('combined'));

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

routes(app);

const server = app.listen(API_PORT, function () {
    const address = server?.address();
    const port = _.isString(address) ? address : address?.port;
    console.log(`wapp server running on ${port}\n`);
}); 