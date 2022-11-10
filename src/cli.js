import readlineSync from 'readline-sync';

function Welcomer() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(name);
}

export default Welcomer;
