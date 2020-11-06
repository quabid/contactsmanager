import asyncHandler from 'express-async-handler';
import bunyan from 'bunyan';
import stringify from 'fast-safe-stringify';
import colors from 'colors';
import { log } from '../../custom_modules/Printer.js';
import Contacts from '../models/ContactModel.js';
import Contact from '../models/ContactModel.js';
const logger = bunyan.createLogger({ name: 'Contacts Controller' });

// @desc        Get contacts route
// @route       GET /api/contacts
// @access      Private
export const getContacts = asyncHandler(async (req, res) => {
  logger.info(
    `Route: getContacts, URL: /api/contacts, Requested URL: ${req.url}`
  );

  // @ts-ignore
  const contacts = await Contacts.find({ owner: req.user._id }).populate(
    'owner'
  );

  res.json({
    contacts: contacts ? stringify(contacts) : null,
  });
});

// @desc        Get contact route
// @route       GET /api/contacts/:id
// @access      Private
export const getContact = asyncHandler(async (req, res) => {
  const id = req.params.id;

  logger.info(`Route: /api/contact/id Requested URL: ${req.url}/${id}`);

  const contact = Contacts.findOne({
    $and: { _id: `${id}`, owner: `${req.user._id}` },
  });

  if (contact) {
    res.json({ contact });
  } else {
    res.status(404);
    throw new Error('Contact not found');
  }
});

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
export const createContact = asyncHandler(async (req, res) => {
  const { fname, lname, nname, email, phone, street, city, zipcode } = req.body;
  log(
    `Received data for new contact: ${fname}, ${lname}, ${email}, ${phone}, ${street} ${city} ${zipcode}`
      .blue.bold
  );

  const newContact = new Contact({
    // @ts-ignore
    owner: req.user,
    fname,
    lname,
    emails: [
      {
        category: 'home',
        email: email,
      },
    ],
    nname: nname || '',
    phones: [
      {
        category: 'home',
        phone: phone,
      },
    ],
    addresses: [
      {
        category: 'home',
        address: {
          street,
          city,
          zipcode,
        },
      },
    ],
  });

  const contact = newContact.save();

  if (contact) {
    res.json({
      contact: stringify(contact),
    });
  } else {
    console.log(`\n\tNew contact failed`);
    throw new Error('New contact creation failed');
  }
});

// @desc        Update contact route
// @route       PUT /api/contacts/id
// @access      Private
export const updateContact = (req, res) => {
  log(
    `Received update data for existing contact: ${stringify(req.body)}`.blue
      .bold
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

  log(`Received contact id for deletion: ${id}`.blue.bold);

  res.status(200).json({
    path: `/api/contacts/${id}`,
    method: req.method,
    requestedUrl: req.url,
  });
};
