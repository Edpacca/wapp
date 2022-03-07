import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import * as _ from 'lodash';
import cors from 'cors';
import db from '../db'
import { appRouter as routes } from './routes/routes';
import 'dotenv/config';
import { registerAdmin } from './routes/controllers/adminController';

const app = express();
const { API_PORT } = process.env;
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({credentials: true, origin: [`${process.env.CLIENT_URL}`]}));
app.use(morgan('dev'));

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

routes(app);

const server = app.listen(API_PORT, function () {
    registerAdmin();
    const address = server?.address();
    const port = _.isString(address) ? address : address?.port;
    console.log(`wapp server running on ${port}\n`);
}); 