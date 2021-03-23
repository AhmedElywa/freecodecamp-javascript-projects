import { convertToRoman } from '../RomanNumeralConverter';

describe('Roman Numeral ConverterPassed', () => {
  test('convertToRoman(2) should return the string II.', () => {
    expect(convertToRoman(2)).toEqual('II');
  });
  test('convertToRoman(3) should return the string III.', () => {
    expect(convertToRoman(3)).toEqual('III');
  });
  test('convertToRoman(4) should return the string IV.', () => {
    expect(convertToRoman(4)).toEqual('IV');
  });
  test('convertToRoman(5) should return the string V.', () => {
    expect(convertToRoman(5)).toEqual('V');
  });
  test('convertToRoman(9) should return the string IX.', () => {
    expect(convertToRoman(9)).toEqual('IX');
  });
  test('convertToRoman(12) should return the string XII.', () => {
    expect(convertToRoman(12)).toEqual('XII');
  });
  test('convertToRoman(16) should return the string XVI.', () => {
    expect(convertToRoman(16)).toEqual('XVI');
  });
  test('convertToRoman(29) should return the string XXIX.', () => {
    expect(convertToRoman(29)).toEqual('XXIX');
  });
  test('convertToRoman(44) should return the string XLIV.', () => {
    expect(convertToRoman(44)).toEqual('XLIV');
  });
  test('convertToRoman(45) should return the string XLV.', () => {
    expect(convertToRoman(45)).toEqual('XLV');
  });
  test('convertToRoman(68) should return the string LXVIII.', () => {
    expect(convertToRoman(68)).toEqual('LXVIII');
  });
  test('convertToRoman(83) should return the string LXXXIII.', () => {
    expect(convertToRoman(83)).toEqual('LXXXIII');
  });
  test('convertToRoman(97) should return the string XCVII.', () => {
    expect(convertToRoman(97)).toEqual('XCVII');
  });
  test('convertToRoman(99) should return the string XCIX.', () => {
    expect(convertToRoman(99)).toEqual('XCIX');
  });
  test('convertToRoman(400) should return the string CD.', () => {
    expect(convertToRoman(400)).toEqual('CD');
  });
  test('convertToRoman(500) should return the string D.', () => {
    expect(convertToRoman(500)).toEqual('D');
  });
  test('convertToRoman(501) should return the string DI.', () => {
    expect(convertToRoman(501)).toEqual('DI');
  });
  test('convertToRoman(649) should return the string DCXLIX.', () => {
    expect(convertToRoman(649)).toEqual('DCXLIX');
  });
  test('convertToRoman(798) should return the string DCCXCVIII.', () => {
    expect(convertToRoman(798)).toEqual('DCCXCVIII');
  });
  test('convertToRoman(891) should return the string DCCCXCI.', () => {
    expect(convertToRoman(891)).toEqual('DCCCXCI');
  });
  test('convertToRoman(1000) should return the string M.', () => {
    expect(convertToRoman(1000)).toEqual('M');
  });
  test('convertToRoman(1004) should return the string MIV.', () => {
    expect(convertToRoman(1004)).toEqual('MIV');
  });
  test('convertToRoman(1006) should return the string MVI.', () => {
    expect(convertToRoman(1006)).toEqual('MVI');
  });
  test('convertToRoman(1023) should return the string MXXIII.', () => {
    expect(convertToRoman(1023)).toEqual('MXXIII');
  });
  test('convertToRoman(2014) should return the string MMXIV.', () => {
    expect(convertToRoman(2014)).toEqual('MMXIV');
  });
  test('convertToRoman(3999) should return the string MMMCMXCIX.', () => {
    expect(convertToRoman(3999)).toEqual('MMMCMXCIX');
  });
});
