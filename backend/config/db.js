// @ts-nocheck
import mongoose from 'mongoose';
import bunyan from 'bunyan';
import colors from 'colors';

const dbConnectionLogger = bunyan.createLogger({
  name: 'DB Connection Status',
});
const dbConnectionErrLogger = bunyan.createLogger({
  name: `db connection error`,
});

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    dbConnectionLogger.info(`DB Connected: ${conn.connection.host}`);
  } catch (err) {
    dbConnectionErrLogger.error(`DB Connection Error: ${err.message}`);
    process.exit(121);
  }
};

export default connectDB;
