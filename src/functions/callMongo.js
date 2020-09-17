const models = require('../models');

const log = require('debug')('functions:mongoDivider');

/**
 * Runs all of the commands in the body on the given schema.
 * @param {object} request Request to the database.
 * @param {*} client Connection to the database.
 */
function processCommands({ schema, commands }, client) {
  log({ schema, commands });
  return Promise.all(commands.map(({ command, arguments }) => {
    if(!command || !arguments || arguments.length < 1) return;
    return models[schema].buildModel(client)[command](...arguments);
  }));
}

module.exports = {
  processCommands,
}