import bunyan from 'bunyan';
import colors from 'colors';
import { stringify } from '../../custom_modules/ObjectUtils.js';
import { log } from '../../custom_modules/Printer.js';
import users from '../data/users.js';
const logger = bunyan.createLogger({ name: 'api controller' });

// @desc        Get all contacts route
// @route       GET /api/contacts
// @access      Private
export const getContacts = (req, res) => {
  logger.info(`Requested URL: ${req.url}`);
  res.status(200).json({
    path: '/api/contacts',
    method: req.method,
    requestedUrl: `${req.url}`,
    payload: stringify(users),
  });
};

// @desc        Get single contact route
// @route       GET /api/contacts/:id
// @access      Private
export const getContact = (req, res) => {
  logger.info(`Requested URL: ${req.url}`);
  res.status(200).json({
    path: '/api/contacts/id',
    method: req.method,
    requestedUrl: `${req.url}`,
    payload: stringify(users.find((x) => x.id == req.params.id)) || null,
  });
};

// @desc        Get api index route
// @route       GET /api
// @access      Private
export const getIndex = (req, res) => {
  res.status(200).json({
    path: '/api',
    method: req.method,
    requestedUrl: req.url,
  });
};

// @desc        Create a new contact member
// @route       POST /api/contacts
// @access      Private
export const postContact = (req, res) => {
  const { fname, lname, email, phone, address, website } = req.body;
  log(
    `Received data for new contact: ${fname}, ${lname}, ${email}, ${phone}, ${stringify(
      address
    )} and ${website}`.brightBlue.bold.dim
  );

  res.status(200).json({
    path: '/api/contacts',
    method: req.method,
    requestedUrl: req.url,
  });
};

// @desc        Update contact
// @route       PUT /api/contacts/id
// @access      Private
export const putContact = (req, res) => {
  log(
    `Received update data for existing contact: ${stringify(req.body)}`
      .brightBlue.bold.dim
  );

  res.status(200).json({
    path: '/api/contacts',
    method: req.method,
    requestedUrl: req.url,
  });
};
