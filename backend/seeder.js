// @ts-nocheck
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import { users } from './data/users.js';
import connectDB from './config/db.js';
import User from './models/UserModel.js';
// import Contact from './models/ContactModel.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    // await Contact.deleteMany();

    const createdUsers = await User.insertMany(users);

    console.log(`Data Imported!`.green.inverse);
    process.exit();
  } catch (err) {
    console.error(`Error: ${err.message}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    // await Contact.deleteMany();

    console.log(`Data Destroyed!`.bgBlack.green);
    process.exit();
  } catch (err) {
    console.error(`Error: ${err.message}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
