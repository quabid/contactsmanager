import { Router } from 'express';
import * as Api from '../controllers/api.js';

const api = Router();

api.route('/').get(Api.getIndex);

api.route('/contacts').get(Api.getContacts).post(Api.postContact);

api.route('/contacts/:id').get(Api.getContact).put(Api.putContact);

export default api;
