const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: {
    type: String,
    unique: true,
  },
});

module.exports = {
  schema: CompanySchema,
  model: mongoose.model('Company', CompanySchema, 'Company'),
  buildModel: (client) => client.model('Company', CompanySchema, 'Company'),
};
