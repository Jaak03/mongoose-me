const { resolve } = require('path');

(require('dotenv'))
  .config({
    path: resolve(__dirname, '.env/local')
  });
require('./DEBUG');

const log = require('debug')('index');

const getClient = require('./src/functions/getClient');
const { processCommands } = require('./src/functions/callMongo');

let mongoClient;
(async () => {
  mongoClient = await getClient(mongoClient);
  const res = (await processCommands({
    schema: 'Tag',
    commands: [

      // BASIC FIND
      // {
      //   command: 'find',
      //   arguments: [{}]
      // }

      // MORE COMPLEX STATEMENTS
      // {
      //   command: 'findOneAndUpdate',
      //   arguments: [
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
      //   command: 'updateMany',
      //   arguments: [
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
      {
        command: 'aggregate',
        arguments: [[
          {
            $match: {},
          },
          {
            $group: {
              _id: '$name',
            },
          },
          {
            $project: {
              _id: 0,
              name: '$_id',
            },
          },
        ]],
      },
    ]},
    mongoClient,
  )).flat();

  log(res);
})();

