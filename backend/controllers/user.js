import * as Msg from '../../custom_modules/Message.js';
import { cap } from '../../custom_modules/Capper.js';
import { stringify } from '../..//custom_modules/ObjectUtils.js';

// @desc        Get user dashboard route
// @route       GET /user/dashboard
// @access      Private
export const getDashboard = (req, res) => {
  try {
    res.status(200).json({
      path: '/user/dashboard',
      method: req.method,
      requestedUrl: req.url,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 'failure',
      message: err.message,
      cause: err.stackTrace,
    });
  }
};

// @desc        Get user profile route
// @route       GET /user/profile
// @access      Private
export const getProfile = (req, res) => {
  try {
    res.status(200).json({
      path: '/user/profile',
      method: req.method,
      requestedUrl: req.url,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 'failure',
      message: err.message,
      cause: err.stackTrace,
    });
  }
};

// @desc        Update user profile route
// @route       PUT /user/profile
// @access      Private
export const putProfile = (req, res) => {
  Msg.info(`\n\t${cap('PUT data')}: ${stringify(req.body)}`);

  try {
    res.status(200).json({
      path: '/user/profile',
      method: req.method,
      requestedUrl: req.url,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 'failure',
      message: err.message,
      cause: err.stackTrace,
    });
  }
};
