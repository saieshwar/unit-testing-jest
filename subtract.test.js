//const { expect, test } = require('@jest/globals');
const subtract = require('./subtract');

test('subs two numbers' , () =>{
    expect(subtract(1,2)).toBe(-1);
});
