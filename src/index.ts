import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';

import router from './router';

const app = express();
app.use(
  cors({
    origin: 'https://adminpanel-fe-three.vercel.app',
    // origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});

const MONGO_URI =
  'mongodb+srv://admin:admin@cluster0.xf6wbsn.mongodb.net/?retryWrites=true&w=majority';

mongoose.Promise = Promise;
mongoose.connect(MONGO_URI);
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());
