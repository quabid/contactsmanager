import mongoose from 'mongoose';
import bunyan from 'bunyan';
import colors from 'colors';

const dbConnectionLogger = bunyan.createLogger({ name: 'db connection' });
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
    dbConnectionLogger.info(
      `\tConnected MongoDB: ${conn.connection.host}`.bold.brightGreen
    );
  } catch (err) {
    dbConnectionErrLogger.error(`Error: ${err.message}`.bold.brightRed);
    process.exit(121);
  }
};

export default connectDB;
