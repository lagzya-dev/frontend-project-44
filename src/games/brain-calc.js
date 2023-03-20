#!/usr/bin/env node
import readlineSync from 'readline-sync';
import cli from '../cli.js';

let tryAnswer = 0;

// eslint-disable-next-line no-array-constructor
const opertaion = Array('+', '-', '*');

export default function StartEvent(name = undefined) {
  if (name === undefined) {
    // eslint-disable-next-line no-param-reassign
    name = cli();
  }
  if (tryAnswer === 3) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  console.log('What is the result of the expression?');
  const num = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const item = opertaion[Math.floor(Math.random() * opertaion.length)];
  console.log(`Question: ${num} ${item} ${num2}`);
  let validAnswer = 0;
  if (item === '+') {
    validAnswer = num + num2;
  } else if (item === '-') {
    validAnswer = num - num2;
  } else if (item === '*') {
    validAnswer = num * num2;
  }
  const answer = readlineSync.question('You answer ');
  if (answer === `${validAnswer}`) {
    console.log('Correct!');
    tryAnswer += 1;
    StartEvent(name);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${validAnswer}'.\n Let's try again, ${name}!`);
  }
}
