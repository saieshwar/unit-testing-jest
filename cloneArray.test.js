const { test, expect } = require('@jest/globals');
const { array } = require('yargs');
const cloneArray = require('./cloneArray');

test('cloning two arrays' , () => {
    const Array = [1,2,3];
    expect(cloneArray(Array)).toEqual(Array);
    expect(cloneArray(Array)).not.toBe(Array);
});