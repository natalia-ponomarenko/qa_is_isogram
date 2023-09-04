'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return boolean', () => {
    const result = isIsogram('word');

    expect(typeof result).toMatch('boolean');
  });

  it('should return true for empty input', () => {
    const result = isIsogram('');

    expect(result).toBeTruthy();
  });

  it('should return true if letters don\'t repeat', () => {
    const result = isIsogram('playgrounds');

    expect(result).toBeTruthy();
  });

  it('should return false if some letters repeat', () => {
    const result = isIsogram('look');

    expect(result).toBeFalsy();
  });

  it('should be case insensitive', () => {
    const result = isIsogram('Adam');

    expect(result).toBeFalsy();
  });
});
