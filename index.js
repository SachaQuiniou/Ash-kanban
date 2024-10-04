import 'dotenv/config';
import express from 'express';
import { router } from './server/src/routers/router.js';
import {
    errorHandler,
    notFound,
} from './server/src/middlewares/errorHandlers.js';

const app = express();

app.use(express.json());

app.use(router);

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.BASE_URL}:${process.env.PORT}`);
});
