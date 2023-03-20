import readlineSync from 'readline-sync';
import cli from '../cli.js';
import generateMassive from '../progress.js';

let tryAnswer = 0;

function StartEvent(name = undefined) {
  if (name === undefined) {
    // eslint-disable-next-line no-param-reassign
    name = cli();
  }
  if (tryAnswer === 3) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  // eslint-disable-next-line no-use-before-define
  const result = generateMassive();
  const validAnswer = result[Math.floor(Math.random() * result.length)];
  let text = 'What number is missing in the progression?\nQuestion:';
  for (let i = 0; i < result.length; i += 1) {
    if (result[i] === validAnswer) {
      text += ' ..';
    } else {
      text += ` ${result[i]}`;
    }
  }
  console.log(text);
  const answer = readlineSync.question('You answer ');
  if (answer === `${validAnswer}`) {
    tryAnswer += 1;
    console.log('Correct!');
    StartEvent(name);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${validAnswer}'.\n Let's try again, ${name}!`);
  }
}

export default StartEvent;
