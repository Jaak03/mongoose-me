const { resolve } = require('path');

(require('dotenv'))
  .config({
    path: resolve(__dirname, '.env/local')
  });
require('./DEBUG');

const log = require('debug')('index');

const getClient = require('./src/functions/getClient');
const { dbAction } = require('./src/functions/mongoDivider');

let mongoClient;
(async () => {
  mongoClient = await getClient(mongoClient);
  const res = (await dbAction(
    'Tag',
    {
      'find': [{}],
    },
    mongoClient,
  )).flat();

  log(res);
})();

