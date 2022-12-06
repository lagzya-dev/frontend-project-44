#!/usr/bin/env node
import readlineSync from 'readline-sync';
import cli from '../src/cli.js';

let tryAnswer = 0;

export default function StartEvent(name) {
  if (name === undefined) {
    // eslint-disable-next-line no-param-reassign
    name = cli();
  }
  if (tryAnswer === 3) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  const num = Math.floor(Math.random() * 100);
  console.log(`Question:  ${num}`);

  const answer = readlineSync.question('You answer ');
  if (answer !== 'yes' && answer !== 'no') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was ${num % 2 === 0 ? 'yes' : 'no'}.\n Let's try again, ${name}!`);
    return;
  }
  if (num % 2 === 0 && answer === 'yes') {
    console.log('Correct!');
    tryAnswer += 1;
    StartEvent(name);
  } else if (num % 2 !== 0 && answer === 'no') {
    console.log('Correct!');
    tryAnswer += 1;
    StartEvent(name);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was ${num % 2 === 0 ? 'yes' : 'no'}.\n Let's try again, ${name}!`);
  }
}
