"use strict";

var unique = require('../lib/unique'),
    expect = require('chai').expect,
    array,
    result;

describe('unique', function () {
    it('should return an empty array if given one', function () {
        array = [];
        result = unique(array);
        expect(result).to.be.deep.equal([]);
    });
    it('should return a single item array unchanged', function () {
        array = [10];
        result = unique(array);
        expect(array).to.be.deep.equal([10]);
    });
    it('should return an array with no duplicates', function () {
        array = [10, 11, 12, 10, 11, 12, 13, 14];
        result = unique(array);
        expect(result).to.be.deep.equal([10, 11, 12, 13, 14]);
    });
});