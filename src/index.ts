import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

import router from './router';

const app = express();
app.use(
  cors({
    origin: 'https://adminpanel-fe-three.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const uri = process.env.MONGO_URI;
async function startServer() {
  try {
    await mongoose.connect(uri!);
    console.log('MongoDB Connected');

    const server = http.createServer(app);

    server.listen(8080, () => {
      console.log('Server listening on port 8080');
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

app.use('/', router());

// Connect to the database before starting the server
startServer();
