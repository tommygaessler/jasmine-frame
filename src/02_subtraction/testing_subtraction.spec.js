var Subtraction = require('./subtraction.js');

describe('Subtraction function', function() {

  var subtraction = new Subtraction();

  it('Should return return the value of both arguments subtracted', function() {
    expect(subtraction.minus(10, 5)).toEqual(5);
  });
});
