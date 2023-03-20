export default function isPrime(num) {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) { 
      return false; 
    }
  }
  return num > 1;
}
