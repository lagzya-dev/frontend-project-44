import { getRandom } from '../utils.js';

function startEvent() {
  const opertaion = ['+', '-', '*'];
  const num = getRandom(100);
  const num2 = getRandom(100);
  const item = opertaion[getRandom(opertaion.length - 1)];
  const quest = `${num} ${item} ${num2}`;
  let validAnswer = 0;
  if (item === '+') {
    validAnswer = `${num + num2}`;
  } else if (item === '-') {
    validAnswer = `${num - num2}`;
  } else if (item === '*') {
    validAnswer = `${num * num2}`;
  }
  return [quest, validAnswer];
}
const lable = 'What is the result of the expression?';

export default { startEvent, lable };
