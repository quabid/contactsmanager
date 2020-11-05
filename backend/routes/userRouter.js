import { Router } from 'express';
import { protect, admin } from '../middleware/AuthMiddleware.js';
import * as UserController from '../controllers/userController.js';

const user = Router();

user.route('/profile/:id').get(protect, UserController.getUserProfile);

user.route('/profile').put(protect, UserController.updateUserProfile);

user.route('/dashboard').get(protect, admin, UserController.getUserDashboard);

user.route('/login').post(UserController.authUser);

user.route('/').post(UserController.registerUser);

export default user;
