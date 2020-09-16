const mongoose = require('mongoose');
const  standardModel = require('./standard');

const BreachSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  startTime: Date,
  endTime: Date,
  tag1: {
    _id: String,
    path: [
      {
        x: Number,
        y: Number,
        distance: Number,
        time: Date,
      },
    ],
  },
  tag2: {
    _id: String,
    path: [
      {
        x: Number,
        y: Number,
        distance: Number,
        time: Date,
      },
    ],
  },
  area: {
    areaId: String,
    zone: {
      id: {
        type: String,
        index: true,
      },
      name: String,
    },
  },
  siteId: mongoose.Types.ObjectId,
  standard: standardModel.schema,
});

const BreachModel = mongoose.model('Breach', BreachSchema, 'Breach');

module.exports = {
  schema: BreachSchema,
  model: BreachModel,
  buildModel: (client) => client.model('Breach', BreachSchema, 'Breach'),
};
