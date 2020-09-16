const models = require('../models');

const log = require('debug')('functions:mongoDivider');

function dbAction(schema, actions, client) {
  return Promise.all(Object.keys(actions)
    .map((action) => {
      log({ action, model: models[schema] });
      return;
    }));
}

module.exports = {
  dbAction,
}