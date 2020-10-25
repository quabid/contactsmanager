import bunyan from 'bunyan';
import colors from 'colors';
import { stringify } from '../../custom_modules/ObjectUtils.js';
import { log } from '../../custom_modules/Printer.js';
import users from '../data/users.js';
const logger = bunyan.createLogger({ name: 'api controller' });

// @desc        Get contacts route
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

// @desc        Get contact route
// @route       GET /api/contacts/:id
// @access      Private
export const getContact = (req, res) => {
  const id = req.params.id;

  logger.info(`Requested URL: ${req.url}/${id}`);

  res.status(200).json({
    path: `/api/contacts/${id}`,
    method: req.method,
    requestedUrl: `${req.url}`,
    payload: stringify(users.find((x) => x.id == req.params.id)),
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

// @desc        Create contact route
// @route       POST /api/contacts
// @access      Private
export const createContact = (req, res) => {
  const { fname, lname, email, phone, street, city, zipcode } = req.body;
  log(
    `Received data for new contact: ${fname}, ${lname}, ${email}, ${phone}, ${street} ${city} ${zipcode}`
      .brightBlue.bold
  );

  res.status(200).json({
    path: `/api/contacts`,
    method: req.method,
    requestedUrl: req.url,
  });
};

// @desc        Update contact route
// @route       PUT /api/contacts/id
// @access      Private
export const updateContact = (req, res) => {
  log(
    `Received update data for existing contact: ${stringify(req.body)}`
      .brightBlue.bold
  );

  res.status(200).json({
    path: `/api/contacts`,
    method: req.method,
    requestedUrl: req.url,
  });
};

// @desc        Delete contact route
// @route       DELETE /api/contacts/id
// @access      Private
export const deleteContact = (req, res) => {
  const id = req.params.id;

  log(`Received contact id for deletion: ${id}`.brightBlue.bold);

  res.status(200).json({
    path: `/api/contacts/${id}`,
    method: req.method,
    requestedUrl: req.url,
  });
};
