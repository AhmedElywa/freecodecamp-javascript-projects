export function checkCashRegister(
  price: number,
  cash: number,
  cid: [string, number][]
) {
  const units: { [key: string]: number } = {
    PENNY: 1,
    NICKEL: 5,
    DIME: 10,
    QUARTER: 25,
    ONE: 100,
    FIVE: 500,
    TEN: 1000,
    TWENTY: 2000,
    'ONE HUNDRED': 10000,
  };
  let rest = 0;
  let difference = (cash - price) * 100;
  const change = [];
  for (const unit of cid.reverse()) {
    if (difference === 0) {
      break;
    }
    if (difference >= units[unit[0]] && unit[1] > 0) {
      if (difference >= unit[1] * 100) {
        difference -= unit[1] * 100;
        change.push(unit);
      } else if (difference >= units[unit[0]]) {
        const needed = Math.floor(difference / units[unit[0]]);
        difference -= needed * units[unit[0]];
        change.push([unit[0], (needed * units[unit[0]]) / 100]);
        if (rest === 0) {
          rest = unit[1] * 100 - needed * units[unit[0]];
        }
      }
    }
  }
  if (difference > 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  } else if (rest === 0) {
    return { status: 'CLOSED', change: cid.reverse() };
  } else {
    return { status: 'OPEN', change };
  }
}
