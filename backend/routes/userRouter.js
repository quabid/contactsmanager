import { Router } from 'express';
import { protect } from '../middleware/AuthMiddleware.js';
import * as User from '../controllers/userController.js';

const user = Router();

user
  .route('/profile')
  .get(protect, User.getUserProfile)
  .put(protect, User.updateUserProfile);

user.route('/dashboard').get(protect, User.getUserDashboard);

user.route('/login').post(User.authUser);

user.route('/').post(User.registerUser);

export default user;
