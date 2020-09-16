const mongoose = require("mongoose");

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

module.exports = () => {
    return mongoose.createConnection(process.env.MONGO_URI, dbOptions);
}