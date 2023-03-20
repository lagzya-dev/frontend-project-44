#!/usr/bin/env node
import readlineSync from 'readline-sync';
import cli from '../cli.js';
import isPrime from '../primecheck.js';

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
  const result = Math.floor(Math.random() * 100);
  // eslint-disable-next-line no-use-before-define
  const validAnswer = isPrime(result) ? 'yes' : 'no';
  const text = `Answer "yes" if given number is prime. Otherwise answer "no".\nQuestion: ${result}`;
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
