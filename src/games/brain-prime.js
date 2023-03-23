import { getRandom, isPrime } from '../utils.js';

function startEvent() {
  const result = getRandom(100);
  const validAnswer = isPrime(result) ? 'yes' : 'no';
  const quest = `${result}`;
  return [quest, validAnswer];
}

const lable = 'Answer "yes" if given number is prime. Otherwise answer "no"';
export default { startEvent, lable };
