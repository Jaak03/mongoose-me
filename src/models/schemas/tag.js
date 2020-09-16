const mongoose = require('mongoose');

const OwnerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  period: {
    from: Date,
    to: Date,
  },
});

const TagSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  tagId: {
    type: String,
    index: true,
    unique: true,
  },
  name: String,
  owners: [OwnerSchema],
  serverIds: [mongoose.Types.ObjectId]
});

module.exports = {
  schema: TagSchema,
  model: mongoose.model('Tag', TagSchema, 'Tag'),
  buildModel: (client) => client.model('Tag', TagSchema, 'Tag'),
};
