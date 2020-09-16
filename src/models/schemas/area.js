const mongoose = require('mongoose');

const ZoneSchema = new mongoose.Schema({
  id: {
    type: String,
    // unique: true,
  },
  name: String,
  breachRules: [{
    id: String,
    type: String,
    distance: Number,
    time: Number,
  }],
});

const AreaSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  areaId: {
    type: String,
    unique: true,
  },
  areaName: String,
  coordinateSystemId: String,
  coordinateSystemName: String,
  zones: [ZoneSchema],
});

const AreaModel = mongoose.model('Area', AreaSchema, 'Area');

module.exports = {
  schema: AreaSchema,
  model: AreaModel,
  buildModel: (client) => client.model('Area', AreaSchema, 'Area'),
};
