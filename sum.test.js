// const { expect, test } = require('@jest/globals');
const sum = require('./sum');

test('adds two numbers' , () =>{
    expect(sum(1,2)).toBe(3);
});
