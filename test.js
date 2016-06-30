var assert = require('assert');
var aguid = require('aguid');
var isGuid = require('./index').isGuid;

describe('Test string object type', function () {
    it('This is not a string', function () {
        assert.equal(false, isGuid(1));
    });
});

describe('Test invalid guid string', function () {
    it('This is not a valid guid string', function () {
        assert.equal(false, isGuid('abc'));
    });
});

describe('Test valid guid string', function () {
    it('Those are valid guid string', function () {
        assert.equal(true, isGuid('d3aa88e2-c754-41e0-8ba6-4198a34aa0a2'));
        assert.equal(true, isGuid('{d3aa88e2-c754-41e0-8ba6-4198a34aa0a2}'));
        assert.equal(true, isGuid('{DF8B6CD9-A928-4FA0-B106-DE183AC05DAA}'));
    });
});

describe('Test 50,000 guid strings', function () {
    it('validated 50,000 guids', function () {
        for (var i = 0; i < 50000; i++) {
            assert.equal(true, isGuid(aguid()));
        }
    });
});
