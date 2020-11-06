import { Router } from 'express';
import { protect, admin } from '../middleware/AuthMiddleware.js';
import * as Api from '../controllers/contactsController.js';

const api = Router();

api.route('/').get(protect, Api.getContacts).post(protect, Api.createContact);

api
  .route('/contact/:id')
  .get(protect, Api.getContact)
  .put(protect, Api.updateContact)
  .delete(protect, Api.deleteContact);

export default api;
