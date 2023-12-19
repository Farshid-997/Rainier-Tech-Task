import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

import cookieParser from 'cookie-parser';

import routes from './app/routes';


const app: Application = express();

app.use(cors());
app.use(cookieParser());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);

app.get('/', (req: Request, res: Response) => {
  res.send('Course Server is hearing 📚!');
});

//global error handler
app.use(globalErrorHandler);

export default app;
