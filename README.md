# TeamCity properties

Access [TeamCity build parameters](http://confluence.jetbrains.com/display/TCD8/Configuring+Build+Parameters) from Node.js.

## Installation

Using npm:

```sh
npm install --save teamcity-properties
```

## Usage

```js
var tcProps = require('teamcity-properties');

// not fail-safe
var agentName = tcProps['agent.name'];

// throws if no such property
var projectName = tcProps.get('myCompany.project.name');
```

## References
  
  * [TeamCity Docs: Configuring Build Parameters](http://confluence.jetbrains.com/display/TCD8/Configuring+Build+Parameters)
  * [TeamCity Docs: Defining and Using Build Parameters in Build Configuration](http://confluence.jetbrains.com/display/TCD8/Defining+and+Using+Build+Parameters+in+Build+Configuration)
  * [TeamCity Docs: Predefined Build Parameters](http://confluence.jetbrains.com/display/TCD8/Predefined+Build+Parameters)
  * [Wikipedia: .properties file format](http://en.wikipedia.org/wiki/.properties)
  * Kudos to [node-properties](https://github.com/gagle/node-properties)

## LICENSE
MIT
