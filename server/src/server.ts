import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';
import * as _ from 'lodash';
import cors from 'cors';
import db from '../db'
import { appRouter as routes } from './routes/routes';

const app = express();
const port = 5500;
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('combined'));

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-31phqkkj.eu.auth0.com/.well-known/jwks.json'
    }),

    audience: 'https://wapp-api',
    issuer: 'https://dev-31phqkkj.eu.auth0.com/',
    algorithms: ['RS256']
});

app.use(checkJwt);

routes(app);

const server = app.listen(port, function () {
    const address = server?.address();
    const port = _.isString(address) ? address : address?.port;
    console.log(`wapp server running on ${port}\n`);
}); 