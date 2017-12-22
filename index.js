var properties = require('properties');

var ENV_NAME = 'TEAMCITY_BUILD_PROPERTIES_FILE';
var filePath = process.env[ENV_NAME];

module.exports = function() {
	if (!filePath) throw new Error('"' + ENV_NAME + '" environment variable is not set. Not running within TeamCity?');

	var fileContents = require('fs').readFileSync(filePath, 'utf-8');
	var teamcityProperties = properties.parse(fileContents);

	function declareMethod(name, method) {
		if (name in teamcityProperties) {
			console.warn('Property "%s" is conflicting with public method. Method skipped, property left unchanged.', name);
		} else {
			teamcityProperties[name] = method;
		}
	}

	/**
	 * Access property with presence check.
	 * @param {String} key
	 * @returns {String|Number|Boolean}
	 * @throws when requested key is not defined
	 */
	declareMethod('get', function(key) {
		if (key in teamcityProperties) return teamcityProperties[key];
		throw new Error(
			'"' + key + '" is not defined in TeamCity build properties. Consider adding it as "system.' + key + '".'
		);
	});

	/**
	 * Return parsed properties as namespaces (nested objects).
	 * @returns {Object}
	 */
	declareMethod('namespaces', function() {
		return properties.parse(fileContents, { namespaces: true });
	});

	return teamcityProperties;
};
