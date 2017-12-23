var makeTcProps = require('..');

describe('teamcity-properties', function() {
    var tcProps;

    beforeEach(function() {
        tcProps = makeTcProps();
    });

    describe('types', function() {
        it('should parse numbers', function() {
            assert.isNumber(tcProps['number']);
        });

        it('should parse booleans', function() {
            assert.isBoolean(tcProps['boolean']);
        });

        it('should parse string', function() {
            assert.isString(tcProps['string']);
        });
    });

    describe('strict access', function() {
        it('should return existing key', function() {
            assert.strictEqual(tcProps.get('foo.bar'), 'bar');
        });

        it('should throw on non-existing key', function() {
            assert.throws(function() { tcProps.get('foo.qux'); }, /"foo\.qux" is not defined/);
        });
    });

    describe('namespace access', function() {
        it('should return object', function() {
            var namespaces = tcProps.namespaces();

            assert.isObject(namespaces);
        });

        it('should return nested properties', function() {
            var namespaces = tcProps.namespaces();

            assert.strictEqual(namespaces['foo']['bar'], 'bar');
        });
    });
});
