"use strict";

var shift = require('../lib/shift'),
    expect = require('chai').expect,
    array,
    result;

describe('shift', function () {
    it('should return the first element in the array', function () {
        array = [10, 11, 12];
        result = shift.call(array);
        expect(result).to.be.equal(10);
    });
    it('should remove the first element from the array', function () {
        array = [10, 11, 12];
        result = shift.call(array);
        expect(array).to.be.deep.equal([11, 12]);
    });
    it('should return undefined on empty array', function () {
        array = [];
        result = shift.call(array);
        expect(result).to.be.equal(undefined);
    });
    it('should empty a 1-element array', function () {
        array = [5];
        result = shift.call(array);
        expect(array).to.be.deep.equal([]);
    });
});