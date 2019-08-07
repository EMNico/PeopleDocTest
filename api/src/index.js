import * as Sentry from '@sentry/node';
import cors from 'cors';
import express from 'express';
import restaurantController from './controllers/restaurantController';


Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment: process.env.SENTRY_ENVIRONMENT,
});

const api = express();

api.use(Sentry.Handlers.requestHandler());

api.use(cors());
api.use(express.json());

api.use('/restaurant', restaurantController);

api.use((err, req, res, next) => {
    next(err);
});

api.use(Sentry.Handlers.errorHandler());

api.listen(3000);
