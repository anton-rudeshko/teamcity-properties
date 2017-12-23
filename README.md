# TeamCity properties

Access [TeamCity build parameters](http://confluence.jetbrains.com/display/TCD8/Configuring+Build+Parameters) from Node.js.

:warning: **Important:** from TeamCity build you can only access `system.*` parameters.

## Installation

Using npm:

```sh
npm install --save teamcity-properties
```

## Usage

```properties
# test.properties
myCompany.project.name = example
```

```js
var tcPropsFactory = require('teamcity-properties');
var tcProps = tcPropsFactory();

// may fail silently (return undefined)
var agentName = tcProps['agent.name'];

// throws if no such property
var projectName = tcProps.get('myCompany.project.name');

// get properties as namespaces (nested objects);
var asObject = tcProps.namespaces();
asObject.myCompany.project.name; // example
```

## References
  
  * [TeamCity Docs: Configuring Build Parameters](http://confluence.jetbrains.com/display/TCD8/Configuring+Build+Parameters)
  * [TeamCity Docs: Defining and Using Build Parameters in Build Configuration](http://confluence.jetbrains.com/display/TCD8/Defining+and+Using+Build+Parameters+in+Build+Configuration)
  * [TeamCity Docs: Predefined Build Parameters](http://confluence.jetbrains.com/display/TCD8/Predefined+Build+Parameters)
  * [Wikipedia: .properties file format](http://en.wikipedia.org/wiki/.properties)
  * Kudos to [node-properties](https://github.com/gagle/node-properties)

## LICENSE
MIT
