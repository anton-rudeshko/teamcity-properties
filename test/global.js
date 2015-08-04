global.assert = require('chai').assert;

process.env['NODE_ENV'] = 'testing';
process.env['TEAMCITY_BUILD_PROPERTIES_FILE'] = './test/test.properties';
