import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import bodyParser from 'body-parser';
import colors from 'colors';
import cors from 'cors';
import path from 'path';
import { customAlphabet } from 'nanoid';
import landing from './routes/landingRouter.js';
import contact from './routes/contactsRouter.js';
import user from './routes/userRouter.js';
import { serverStatus, serverAddress, serverPort } from './constants/index.js';

dotenv.config();
connectDB();

const nanoid = customAlphabet('02468ouqtyminv*^#%`~[;>|\\', 13);

const app = express();

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache,no-store,max-age=0,must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '-1');
  res.setHeader('X-XSS-Protection', '1;mode=block');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('keep-alive', '-1');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Content-Security-Policy', "script-src 'self'");
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('x-powered-by', 'Deez Nuts');
  res.setHeader('ETag', `${nanoid()}`);
  next();
});

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enable cors
app.use(cors());

// Views Path
// app.set("views", path.join(__dirname, "views"));

// Static Resources
app.use(express.static(path.join('../', 'public')));

// Routers
app.use('/', landing);
app.use('/api/contacts', contact);
app.use('/api/users', user);

app.listen(serverPort, serverStatus);
