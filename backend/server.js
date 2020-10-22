import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { customAlphabet } from 'nanoid';
import landing from './routes/landing.js';
import api from './routes/api.js';
import user from './routes/user.js';
import { serverStatus, serverAddress, serverPort } from './constants/index.js';

const nanoid = customAlphabet('02468ouqtyminv*^#%`~[;>|\\', 13);

const app = express();

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache,no-store,max-age=0,must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '-1');
  res.setHeader('X-XSS-Protection', '1;mode=block');
  //   res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('keep-alive', '-1');
  res.setHeader('Content-Type', 'application/json');
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
// app.use(cors());

// Views Path
// app.set("views", path.join(__dirname, "views"));

// Static Resources
app.use(express.static(path.join('../', 'public')));

// Routers
app.use('/', landing);
app.use('/api', api);
app.use('/user', user);

app.listen(serverPort, serverAddress, serverStatus);
