var ENV_NAME = 'TEAMCITY_BUILD_PROPERTIES_FILE';

var filePath = process.env[ENV_NAME];
if (!filePath) {
    throw new Error('"' + ENV_NAME + '" environment variable is not set. Not running within TeamCity?');
}

var fileContents = require('fs').readFileSync(filePath, 'utf-8');
var teamcityProperties = require('properties').parse(fileContents);

/**
 * Fail-safe access to parameters.
 * @param {String} key
 * @returns {*}
 */
teamcityProperties.get = function(key) {
    if (key in teamcityProperties) return teamcityProperties[key];
    throw new Error('"' + key + '" is not defined in TeamCity build properties. Consider adding it as "system.' + key + '".');
};

module.exports = teamcityProperties;
