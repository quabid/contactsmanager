import { Router } from 'express';

import * as User from '../controllers/user.js';

const user = Router();

user.route('/profile').get(User.getProfile).put(User.putProfile);

user.route('/dashboard').get(User.getDashboard);

export default user;
