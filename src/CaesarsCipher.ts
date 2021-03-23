export function rot13(str: string) {
  const original = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const coded = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';

  const originalArray = original.split('');
  const codedArray = coded.split('');
  return str
    .split('')
    .map((v) => {
      if (originalArray.includes(v)) {
        return codedArray[originalArray.indexOf(v)];
      } else {
        return v;
      }
    })
    .join('');
}
