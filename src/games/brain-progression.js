import { getRandom, generateMassive } from '../utils.js';

function startEvent() {
  const result = generateMassive();
  const validAnswer = `${result[getRandom(result.length - 1)]}`;
  let text = 'What number is missing in the progression?\nQuestion:';
  for (let i = 0; i < result.length; i += 1) {
    if (result[i] === validAnswer) {
      text += ' ..';
    } else {
      text += ` ${result[i]}`;
    }
  }
  const quest = text;
  return [quest, validAnswer];
}
const lable = 'What number is missing in the progression?';
export default { startEvent, lable };
