export function telephoneCheck(str: string): boolean | void {
  let hasTenDigits = false;
  let hasElevenDigits = false;
  let hasPermittedCharsOnly = false;

  const newStr = str.replace(/ /g, '');
  hasTenDigits = str.replace(/[^0-9]/g, '').length === 10;
  hasElevenDigits = str.replace(/[^0-9]/g, '').length === 11;
  hasPermittedCharsOnly = !newStr.match(/[^0-9\(\)-]/g);

  if (!hasTenDigits && !hasElevenDigits) {
    return false;
  } else if (!hasPermittedCharsOnly) {
    return false;
  } else if (hasTenDigits) {
    return (
      !!newStr.match(/^\d{3}-\d{3}-\d{4}$/gm) ||
      !!newStr.match(/^\(\d{3}\)\d{3}-\d{4}$/gm) ||
      !!newStr.match(/^\d+$/)
    );
  } else if (hasElevenDigits) {
    return (
      !!newStr.match(/^1\d{3}-\d{3}-\d{4}$/gm) ||
      !!newStr.match(/^1\(\d{3}\)\d{3}-\d{4}$/gm) ||
      (!!newStr.match(/^\d+$/) && newStr.startsWith('1'))
    );
  }
}
