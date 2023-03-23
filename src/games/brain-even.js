import { getRandom } from '../utils.js';

function startEvent() {
  const num = getRandom(100);
  const quest = `${num}`;
  let validAnswer = 'no';
  if (num % 2 === 0) {
    validAnswer = 'yes';
  }
  return [quest, validAnswer];
}
const lable = 'Answer "yes" if the number is even, otherwise answer "no"';
export default { startEvent, lable };
