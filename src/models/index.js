const areaModel = require('./areaModel');
const zoneModel = require('./schemas/zone');
const standardModel = require('./schemas/standard');
const companyModel = require('./schemas/company');
const siteModel = require('./schemas/site');
const serverModel = require('./schemas/server');

module.exports = {
  'Area': { ...areaModel },
  'Zone': { ...zoneModel },
  'Standard': { ...standardModel },
  'Company': { ...companyModel },
  'Site': { ...siteModel },
  'Server': { ...serverModel },
};