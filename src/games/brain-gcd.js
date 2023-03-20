#!/usr/bin/env node
import readlineSync from 'readline-sync';
import cli from '../cli.js';

let tryAnswer = 0;

// eslint-disable-next-line no-array-constructor
function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}
export default function StartEvent(name) {
  if (name === undefined) {
    // eslint-disable-next-line no-param-reassign
    name = cli();
  }
  if (tryAnswer === 3) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  console.log('Find the greatest common divisor of given numbers.');
  const num = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const validAnswer = NOD(num, num2);

  console.log(`Question: ${num} ${num2}`);
  const answer = readlineSync.question('You answer ');
  if (answer === `${validAnswer}`) {
    console.log('Correct!');
    tryAnswer += 1;
    StartEvent(name);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${validAnswer}'.\n Let's try again, ${name}!`);
  }
}
