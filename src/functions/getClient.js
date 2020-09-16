const getMongoConnection = require('../connections/createMongoDBConnection');

module.exports = async (client) => {
  if (client) {
    return client
  }
  
  return getMongoConnection();
}