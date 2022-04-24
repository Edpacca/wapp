import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import * as _ from 'lodash';
import cors from 'cors';
import db from '../db'
import { appRouter as routes } from './routes/routes';
import { registerAdmin } from './routes/controllers/adminController';
import 'dotenv/config';

morgan.token('body', (req, res) => [JSON.stringify(req.body)]);

const app = express();
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({credentials: true, origin: 
    [
        `${process.env.CLIENT_URL}`,
        `${process.env.CLIENT_URL_PORT}`,
        `${process.env.CLIENT_DOCKER_URL}`,
        `${process.env.CLIENT_LOCAL_URL}`,
    ]}));
app.use(morgan('dev'));
app.use(morgan(':body \n'));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

routes(app);

const server = app.listen(process.env.API_PORT, function () {
    registerAdmin();
    const address = server?.address();
    const port = _.isString(address) ? address : address?.port;
    console.log(`wapp server running on ${port}\n`);
}); 
