const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// The questions for the user to input
rl.question('What is your name? Nicknames are also acceptable! ', (answer) => {
  console.log(`Thank you for your valuable feedback, ${answer}`)
  rl.question('What is an activity you like doing? ', (answer1) => {
    console.log(`Thank you for your valuable feedback, ${answer}.`)
    rl.question('What do you listen to while doing that activity? ', (answer2) => {
      console.log(`Thank you for your valuable feedback, ${answer}.`)
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer3) => {
        console.log(`Thank you for your valuable feedback, ${answer}.`)
        rl.question('What is your favourite thing to eat for that meal? ', (answer4) => {
          console.log(`Thank you for your valuable feedback, ${answer}.`)
          rl.question('Which sport is your absolute favourite? ', (answer5) => {
            console.log(`Thank you for your valuable feedback, ${answer}.`)
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer6) => {
              console.log(`Thank you for your valuable feedback, ${answer}.`)
              rl.question('If you were to receive a gift, do you prefer socks, ties or nothing? ', (answer7) => {
                console.log(`Thank you for your valuable feedback, ${answer}.`)
                rl.question('Which do you prefer, PC or Consoles? Please choose one. ', (answer8) => {
                  console.log(`Thank you for your valuable feedback, ${answer}.`)
                  rl.close();
                  // Console logs out a pre made paragraph with the answers from the user
                  console.log(`${answer} loves listening to ${answer2} while ${answer1}, devouring ${answer4} for ${answer3}, prefers ${answer5} over any other sport, and is amazing at ${answer6}. ${answer} is also a ${answer8} enthusiast and also has a great collection of ${answer7}!`)
                });
              });
            });
          });
        });
      });
    });
  });
});