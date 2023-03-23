import { getRandom, nod } from '../utils.js';

function startEvent() {
  console.log('Find the greatest common divisor of given numbers.');
  const num = getRandom(10);
  const num2 = getRandom(10);
  const validAnswer = `${nod(num, num2)}`;
  const quest = `${num} ${num2}`;
  return [quest, validAnswer];
}
const lable = 'Find the greatest common divisor of given numbers.';
export default { startEvent, lable };
