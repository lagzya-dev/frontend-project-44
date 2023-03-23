import readlineSync from 'readline-sync';
import gamepicker from './gamepicker.js';

const maxtrycount = 3;

export default (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gamepicker[game].lable);
  for (let turn = 1; turn <= maxtrycount; turn += 1) {
    const [quest, validAnswer] = gamepicker[game].startEvent();
    console.log(`Question: ${quest}`);
    const playerAns = readlineSync.question('Your answer: ');

    if (playerAns === validAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAns}' is wrong answer ;(. Correct answer was '${validAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
