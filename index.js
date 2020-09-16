require('dotenv').config('.env/local');
require('./DEBUG');


const log = require('debug')('index');

const getClient = require('./src/functions/getClient');
const { dbAction } = require('./src/functions/mongoDivider');

let mongoClient;
(async () => {
  mongoClient = await getClient(mongoClient);
  const res = dbAction(
    'Area',
    {
      'find': '*'
    },
    client
  );

  log(res);
})();

