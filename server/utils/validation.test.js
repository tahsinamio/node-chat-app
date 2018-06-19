const expect = require('expect');

const { isRealString } = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var number = 72;
    expect(isRealString(number)).toBe(false);
  });

  it('reject string with only spaces', () => {
    var string = '   ';
    expect(isRealString(string)).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var string = '  TEST   ';
    expect(isRealString(string)).toBe(true);
  });
});
