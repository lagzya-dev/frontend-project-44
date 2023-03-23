export function generateMassive() {
  const range = Math.floor(Math.random() * (10 - 5) + 5);
  const progress = Math.floor(Math.random() * 100);
  const startNumber = Math.floor(Math.random() * 100);
  const result = [];

  for (let i = 0; i <= range; i += 1) {
    const num = startNumber + (progress * i);
    result.push(num);
  }

  return result;
}

export function isPrime(num) {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

export function getRandom(arg1, arg2 = 0) {
  const min = Math.min(arg1, arg2);
  const max = Math.max(arg1, arg2);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function nod(x, y) {
  if (y > x) return nod(y, x);
  if (!y) return x;
  return nod(y, x % y);
}
