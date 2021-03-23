import { palindrome } from '../PalindromeChecker';

describe('Palindrome CheckerPassed', () => {
  test('palindrome("eye") should return true.', () => {
    expect(palindrome('eye')).toEqual(true);
  });
  test('palindrome("_eye") should return true', () => {
    expect(palindrome('_eye')).toEqual(true);
  });
  test('palindrome("race car") should return true', () => {
    expect(palindrome('race car')).toEqual(true);
  });
  test('palindrome("not a palindrome") should return false.', () => {
    expect(palindrome('not a palindrome')).toEqual(false);
  });
  test('palindrome("A man, a plan, a canal. Panama") should return true', () => {
    expect(palindrome('A man, a plan, a canal. Panama')).toEqual(true);
  });
  test('palindrome("never odd or even") should return true', () => {
    expect(palindrome('never odd or even')).toEqual(true);
  });
  test('palindrome("nope") should return false.', () => {
    expect(palindrome('nope')).toEqual(false);
  });
  test('palindrome("almostomla") should return false.', () => {
    expect(palindrome('almostomla')).toEqual(false);
  });
  test('palindrome("My age is 0, 0 si ega ym.") should return true.', () => {
    expect(palindrome('My age is 0, 0 si ega ym.')).toEqual(true);
  });
  test('palindrome("1 eye for of 1 eye.") should return false.', () => {
    expect(palindrome('1 eye for of 1 eye.')).toEqual(false);
  });
  test('palindrome("0_0 (: /- :) 0-0") should return true', () => {
    expect(palindrome('0_0 (: /- :) 0-0')).toEqual(true);
  });
  test('palindrome("five|_/|four") should return false.', () => {
    expect(palindrome('five|_/|four')).toEqual(false);
  });
});
