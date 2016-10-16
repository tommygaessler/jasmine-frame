// get value of the addition file and assign it to the varible Addition
var Addition = require('./addition.js');


// unit test
describe('Addition function', function() {
  var addition = new Addition();

  // case statement
  it('should return the value of both arguments combined', function() {
    expect(addition.sum(5, 11)).toEqual(16);
    expect(addition.sum(5, 20)).toEqual(25);
  });
});
