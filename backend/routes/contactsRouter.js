import { Router } from 'express';
import { protect, admin } from '../middleware/AuthMiddleware.js';
import * as ContactsApi from '../controllers/contactsController.js';

const contacts = Router();

contacts
  .route('/')
  .get(protect, ContactsApi.getContacts)
  .post(protect, ContactsApi.createContact);

contacts
  .route('/:id')
  .get(protect, ContactsApi.getContact)
  .put(protect, ContactsApi.updateContact)
  .delete(protect, ContactsApi.deleteContact);

export default contacts;
