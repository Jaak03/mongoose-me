const mongoose = require('mongoose');

const ServerSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  areaIds: [String],
});

module.exports = {
  schema: ServerSchema,
  model: mongoose.model('Server', ServerSchema, 'Server'),
  buildModel: (client) => client.model('Server', ServerSchema, 'Server'),
};
