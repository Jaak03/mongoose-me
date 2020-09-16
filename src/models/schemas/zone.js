const mongoose = require('mongoose');

const ZoneSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  id: String,
  areaId: String,
  breachRules: [mongoose.Types.ObjectId],
});

const ZoneModel = mongoose.model('Zone', ZoneSchema, 'Zone');

module.exports = {
  schema: ZoneSchema,
  model: ZoneModel,
  buildModel: (client) => client.model('Zone', ZoneSchema, 'Zone'),
};
