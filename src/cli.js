import readlineSync from 'readline-sync';
import brain from '../bin/brain-even.js';

function Welcomer() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  brain(name);
}

export default Welcomer;
