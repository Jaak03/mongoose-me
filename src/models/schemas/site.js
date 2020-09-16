const mongoose = require('mongoose');

const SiteSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  serverIds: [mongoose.Types.ObjectId]
});

module.exports = {
  schema: SiteSchema,
  model: mongoose.model('Site', SiteSchema, 'Site'),
  buildModel: (client) => client.model('Site', SiteSchema, 'Site'),
};
