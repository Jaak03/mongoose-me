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

    // BASIC FIND
    {
      'find': [{
        name: null
      }],
    },

    // MORE COMPLEX STATEMENTS
    // {
    //   'findOneAndUpdate': [
    //     { name: null },
    //     {
    //       $set: {
    //         name: 'no-name-tag',
    //       }
    //     },
    //     {
    //       many: true,
    //     }
    //   ]
    // },

    // {
    //   'updateMany': [
    //     { name: null },
    //     {
    //       $set: {
    //         name: 'no-name-tag',
    //       }
    //     },
    //     {
    //       runValidators: true,
    //     },
    //   ]
    // },

    // AND AGGREGATION, CHECK OUT THE DOUBLE []
    // {
    //   'aggregate': [[
    //     {
    //       $match: {},
    //     },
    //     {
    //       $group: {
    //         _id: '$name',
    //       },
    //     },
    //     {
    //       $project: {
    //         _id: 0,
    //         name: '$_id',
    //       },
    //     },
    //   ]],
    // },

    mongoClient,
  )).flat();

  log(res);
})();

