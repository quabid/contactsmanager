import asyncHandler from 'express-async-handler';
import bunyan from 'bunyan';
const logger = bunyan.createLogger({ name: 'User Controller' });
import User from '../models/UserModel.js';
import { generateToken } from '../../custom_modules/index.js';

import * as Msg from '../../custom_modules/Message.js';
import { cap } from '../../custom_modules/Capper.js';
import { stringify } from '../../custom_modules/ObjectUtils.js';

// @desc        Get user dashboard
// @route       GET /api/users/dashboard
// @access      Private
export const getUserDashboard = asyncHandler(async (req, res) => {
  logger.info(
    `getUserDashboard Route: GET /api/users/dashboard vs Requested URL: ${req.url}`
  );
  res.status(200).json({
    path: '/api/users/dashboard',
    status: 'sucess',
  });
});

// @desc        Update user profile
// @route       PUT /api/users/profile
// @access      Private
export const updateUserProfile = asyncHandler(async (req, res) => {
  logger.info(
    `updateUserProfile Route: PUT /api/users/profile vs Requested URL: ${req.url}`
  );
  console.log(req.body);
  res.status(200).json(req.body);
});

// @desc        Get user profile
// @route       GET /api/users/profile
// @access      Private
export const getUserProfile = asyncHandler(async (req, res) => {
  logger.info(
    `getUserProfile Route: GET /api/users/profile vs Requested URL: ${req.url}`
  );
  // @ts-ignore
  const user = await User.findById(req.user._id);

  if (user) {
    res.status(200).json({
      _id: user._id,
      // @ts-ignore
      name: user.name,
      // @ts-ignore
      email: user.email,
      // @ts-ignore
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc        Authenticate user and get token
// @route       POST /api/users/login
// @access      Public
export const authUser = asyncHandler(async (req, res) => {
  logger.info(`authUser Route: /api/users/login vs Requested URL: ${req.url}`);
  const { email, password } = req.body;

  const user = await User.findOne({ email: `${email}` });

  // @ts-ignore
  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      // @ts-ignore
      _id: user._id,
      // @ts-ignore
      'First Name': user.fname,
      // @ts-ignore
      'Last Name': user.lname,
      // @ts-ignore
      email: user.email,
      // @ts-ignore
      isAdmin: user.isAdmin || false,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid credentials');
  }
});

// @desc        Register a new user
// @route       POST /api/users/
// @access      Public
export const registerUser = asyncHandler(async (req, res) => {
  logger.info(`registerUser Route: /api/users vs Requested URL: ${req.url}`);
  const { fname, lname, email, password } = req.body;

  const userExists = await User.findOne({ email: `${email}` });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    fname,
    lname,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      // @ts-ignore
      _id: user._id,
      // @ts-ignore
      'First Name': user.fname,
      // @ts-ignore
      'Last Name': user.lname,
      // @ts-ignore
      email: user.email,
      // @ts-ignore
      isAdmin: user.isAdmin || false,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});
