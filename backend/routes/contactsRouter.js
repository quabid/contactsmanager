import { Router } from 'express';
import { protect, admin } from '../middleware/AuthMiddleware.js';
import * as Api from '../controllers/contactsController.js';

const api = Router();

api.route('/').get(protect, Api.getContacts).post(protect, Api.createContact);

api
  .route('/contact/:id')
  .get(Api.getContact)
  .put(Api.updateContact)
  .delete(Api.deleteContact);

export default api;
