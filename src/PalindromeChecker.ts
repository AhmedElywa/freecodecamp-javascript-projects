export function palindrome(str: string) {
  const cleanWord = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  const reversed = cleanWord
    .split('')
    .reverse()
    .join('');
  return reversed === cleanWord;
}
