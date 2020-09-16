require('dotenv').config('.env/local');
require('./DEBUG');

const models = require('./src/models');
const log = require('debug')('index');

log(models);
