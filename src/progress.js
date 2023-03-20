export default function generateMassive() {
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
