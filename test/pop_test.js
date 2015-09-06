"use strict";

var pop = require('../lib/pop'),
    expect = require('chai').expect,
    array,
    result;

describe('pop', function () {
    it('should return the last element from the array', function () {
        array = [10, 11, 12];
        result = pop.call(array);
        expect(result).to.be.equal(12);
    });
    it('should remove the last element from the array', function () {
        array = [10, 11, 12];
        result = pop.call(array);
        expect(array).to.be.deep.equal([10, 11]);
    });
    it('should return undefined on empty array', function () {
        array = [];
        result = pop.call(array);
        expect(result).to.be.equal(undefined);
    });
    it('should empty a 1-element array', function () {
        array = [5];
        result = pop.call(array);
        expect(array).to.be.deep.equal([]);
    });
});