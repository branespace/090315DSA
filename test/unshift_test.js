"use strict";

var unshift = require('../lib/unshift'),
    expect = require('chai').expect,
    array,
    result;

describe('unshift', function () {
    it('should return the new length', function () {
        array = [10, 11, 12];
        result = unshift.call(array, 15);
        expect(result).to.be.equal(4);
    });
    it('should add the item to the first index', function () {
        array = [10, 11, 12];
        result = unshift.call(array, 6);
        expect(array).to.be.deep.equal([6, 10, 11, 12]);
    });
    it('should make no changes on empty arguments', function () {
        array = [10, 11, 12];
        result = unshift.call(array);
        expect(result).to.be.equal(3);
    });
    it('should handle multiple arguments', function () {
        array = [5, 6, 7];
        result = unshift.call(array, 8, 9, 10, 11);
        expect(array).to.be.deep.equal([8, 9, 10, 11, 5, 6, 7]);
    });
});