"use strict";

var freq = require('../lib/frequency2'),
    expect = require('chai').expect,
    array,
    result;

describe('frequency2', function () {
    it('should return an null on an empty array', function () {
        array = [];
        result = freq(array);
        expect(result).to.be.equal(null);
    });
    it('should return a single letter if one is given', function () {
        array = ['e'];
        result = freq(array);
        expect(result).to.be.equal('e');
    });
    it('should return the most frequent letter', function () {
        array = ['easy', 'frog', 'rabbit', 'reader'];
        result = freq(array);
        expect(result).to.be.equal('r');
    });
    it('should handle capital letters', function () {
        array = ['ABCD', 'DD', 'ccc'];
        result = freq(array);
        expect(result).to.be.equal('c');
    });
    it('should handle all letters equally', function () {
        array = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz',
        'c'];
        result = freq(array);
        expect(result).to.be.equal('c');
    });
});
