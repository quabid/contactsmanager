import asyncHandler from 'express-async-handler';
import bunyan from 'bunyan';
const logger = bunyan.createLogger({ name: 'User Controller' });
import UserModel from '../models/UserModel.js';
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
  // @ts-ignore
  const user = await UserModel.findById(req.user._id);

  if (user) {
    // @ts-ignore
    user.fname = req.body.fname || user.fname;
    // @ts-ignore
    user.lname = req.body.lname || user.lname;
    // @ts-ignore
    user.email = req.body.email || user.email;

    if (req.body.password) {
      // @ts-ignore
      user.password = req.body.password;
    }

    // @ts-ignore
    const updatedUser = await user.save();

    res.json({
      // @ts-ignore
      _id: updatedUser._id,
      // @ts-ignore
      fname: updatedUser.fname,
      // @ts-ignore
      lname: updatedUser.lname,
      // @ts-ignore
      email: updatedUser.email,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc        Get user profile
// @route       GET /api/users/profile
// @access      Private
export const getUserProfile = asyncHandler(async (req, res) => {
  logger.info(
    `getUserProfile Route: GET /api/users/profile vs Requested URL: ${req.url}`
  );

  const id = req.params.id || 'No ID found';
  console.log(`Received User ID: ${id}`);
  // @ts-ignore
  const user = await UserModel.findById(req.user._id);

  if (user) {
    res.json({
      // @ts-ignore
      fname: user.fname,
      // @ts-ignore
      lname: user.lname,
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

  const user = await UserModel.findOne({ email: `${email}` });

  // @ts-ignore
  if (user && (await user.matchPassword(password))) {
    res.json({
      // @ts-ignore
      _id: user._id,
      // @ts-ignore
      fname: user.fname,
      // @ts-ignore
      lname: user.lname,
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

  const userExists = await UserModel.findOne({ email: `${email}` });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await UserModel.create({
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
