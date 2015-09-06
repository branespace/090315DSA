"use strict";

var push = require('../lib/push'),
    expect = require('chai').expect,
    array,
    result;

describe('push', function () {
    it('should return the new length', function () {
        array = [10, 11, 12];
        result = push.call(array, 15);
        expect(result).to.be.equal(4);
    });
    it('should add the item to the last index', function () {
        array = [10, 11, 12];
        result = push.call(array, 6);
        expect(array).to.be.deep.equal([10, 11, 12, 6]);
    });
    it('should make no changes on empty arguments', function () {
        array = [10, 11, 12];
        result = push.call(array);
        expect(result).to.be.equal(3);
    });
    it('should handle multiple arguments', function () {
        array = [5, 6, 7];
        result = push.call(array, 8, 9, 10, 11);
        expect(array).to.be.deep.equal([5, 6, 7, 8, 9, 10, 11]);
    });
});