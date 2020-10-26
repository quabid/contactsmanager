import { Router } from 'express';
import * as Api from '../controllers/api.js';

const api = Router();

api.route('/').get(Api.getIndex);

api.route('/contacts').get(Api.getContacts).post(Api.createContact);

api
  .route('/contact/:id')
  .get(Api.getContact)
  .put(Api.updateContact)
  .delete(Api.deleteContact);

export default api;
