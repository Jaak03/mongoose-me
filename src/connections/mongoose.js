const mongoose = require('mongoose');
const log = require('debug')('connections:mongoose');
mongoose.Promise = Promise;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false,
  poolSize: 50,
};

mongoose.Promise = global.Promise;
module.exports = async () => {
  try {
    log(`Connecting to database with URI: ${process.env.MONGO_URI}.`);
    mongoose.connection.readyState || await mongoose.connect(process.env.MONGO_URI, options);

    mongoose.connection
      .once('open', () => {
        log('Connected to mongodb.');
      })
      .on('error', (e) => {
        log.extend('error')(`mongoose.error: ${e.message}`);
      });
  } catch (e) {
    log.extend('error')('Could not connect to the database.');
    process.exit(5);
  }
};
