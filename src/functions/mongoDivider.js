const models = require('../models');

const log = require('debug')('functions:mongoDivider');

function dbAction(schema, actions, client) {
  return Promise.all(Object.keys(actions)
    .map((action) => {
      return models[schema].buildModel(client)[action](...actions[action]);
    }));
}

module.exports = {
  dbAction,
}