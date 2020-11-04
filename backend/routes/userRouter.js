import { Router } from 'express';
import { protect } from '../middleware/AuthMiddleware.js';
import * as UserRoute from '../controllers/userController.js';

const user = Router();

user
  .route('/profile')
  .get(protect, UserRoute.getUserProfile)
  .put(protect, UserRoute.updateUserProfile);

user.route('/dashboard').get(protect, UserRoute.getUserDashboard);

user.route('/login').post(UserRoute.authUser);

user.route('/').post(UserRoute.registerUser);

export default user;
