import { generateToken } from '../../custom_modules/JwtMaker.js';

export const users = [
  {
    fname: 'rick',
    lname: 'walker',
    email: 'quobod@gmail.com',
    password: generateToken('123456'),
    isAdmin: true,
  },
];
