const mongoose = require('mongoose');

const standardSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  type: String,
  distance: Number,
  time: Number,
  active: Boolean,
  siteId: mongoose.Types.ObjectId,
  default: Boolean,
});

const StandardModel = mongoose.model('Standard', standardSchema, 'Standard');

module.exports = {
  schema: standardSchema,
  model: StandardModel,
  buildModel: (client) => client.model('Standard', standardSchema, 'Standard'),
};
