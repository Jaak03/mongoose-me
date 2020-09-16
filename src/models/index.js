const areaModel = require('./schemas/area');
const zoneModel = require('./schemas/zone');
const standardModel = require('./schemas/standard');
const companyModel = require('./schemas/company');
const siteModel = require('./schemas/site');
const serverModel = require('./schemas/server');
const tagModel = require('./schemas/tag');

module.exports = {
  'Area': { ...areaModel },
  'Zone': { ...zoneModel },
  'Standard': { ...standardModel },
  'Company': { ...companyModel },
  'Site': { ...siteModel },
  'Server': { ...serverModel },
  'Tag': { ...tagModel },
};