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
  const result = Math.floor(Math.random() * 100);
  // eslint-disable-next-line no-use-before-define
  const validAnswer = isPrime(result) ? 'yes' : 'no';
  const text = `Answer "yes" if given number is prime. Otherwise answer "no".\nQuestion: ${result}`;
  console.log(text);
  const answer = readlineSync.question('You answer ');
  if (answer === `${validAnswer}`) {
    tryAnswer += 1;
    console.log('Correct');
    StartEvent(name);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${validAnswer}'.\n Let's try again, ${name}!`);
  }
}

function isPrime(n) {
  if (n < 2) {
    return 'Число должно быть больше 1';
  } if (n === 2) {
    return true;
  }

  let i = 2;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      return false;
    }
    i += 1;
  } 
  return true;
}
