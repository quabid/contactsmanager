import * as MSG from '../../custom_modules/Message.js';

export const ADDRESS = process.env.ADDRESS || '0.0.0.0';

export const PORT = process.env.PORT || 5000;

export const SERVER_STATUS = ((arg = `Server running on port ${PORT}`) => {
  console.clear();
  MSG.success(`\n\t\t${arg}`);
})();

export const SERVER_ADDRESS = ADDRESS;

export const SERVER_PORT = PORT;
