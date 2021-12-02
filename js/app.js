'use strict';

console.log('hello world');

// User name input, followed by user-tailored greeting
let user = prompt('Hello! Welcome to my Bio page-- what\'s your name?')
alert('Hey ' + user + ', here are a few quick questions about my Bio that are explained better on the page.');

let gamescore = 0;

function responseOneF() {
  // Question 1 - 'N' is true
  let response1 = prompt('Am I from the Seattle area?').toLowerCase();

  // response1Standardization using toLowerCase()

  if (response1 === 'yes' || response1 === 'y') {
    // console.log('response to q1 is "yes"');
    alert('Nope, I\'m from the Rust Belt.')
  } else if (response1 === 'no' || response1 === 'n') {
    // console.log('response to q1 is "no"');
    alert('That\'s right, I\'m from Upstate New York.');
    gamescore++;
  } else {
    //console.log('response to q1 is invalid')
    alert('Uh... I\'m from Syracuse.')
  };
}

responseOneF();

function responseTwoF() {
  // Question 2 - 'Y' is true
  let response2 = prompt('Can I read ancient Greek?').toLowerCase();

  if (response2 === 'yes' || response2 === 'y') {
    // console.log('response to q2 is "yes"');
    alert('Yeah, I\'d need a dictionary if I looked back at anything complicated now though.');
    gamescore++;
  } else if (response2 === 'no' || response2 === 'n') {
    // console.log('response to q2 is "no"');
    alert('I can, actually. Yeah, some people DO spend their time and money on things like that.')
  } else {
    alert('I can; was that what you were trying to type?')
    // console.log('response to q2 is invalid)
  };
}

responseTwoF();

function responseThreeF() {
  //Question 3 - 'N' is true
  let response3 = prompt('Did I go to law school?').toLowerCase();

  if (response3 === 'yes' || response3 === 'y') {
    // console.log('response to q3 is "yes"');
    alert('Nope, I just ended up sticking with a job in the legal field for a while.')
  } else if (response3 === 'no' || response3 === 'n') {
    // console.log('response to q3 is "no"');
    alert('Right, I merely worked around lawyers for a few years.');
    gamescore++;
  } else {
    alert('Is that...latin? I studied Greek.')
    // console.log('response to q3 is invalid)
  };
}

responseThreeF();

function responseFourF() {
  // Question 4 - "Y" is true
  let response4 = prompt('Can I play the guitar?').toLowerCase();
  if (response4 === 'yes' || response4 === 'y') {
    // console.log('response to q4 is "yes"');
    alert('Yeah, it\'s been a rewarding hobby.');
    gamescore++;
  } else if (response4 === 'no' || response4 === 'n') {
    // console.log('response to q4 is "no"');
    alert('Ouch! How well is debatable, but since I can do more than scales I\'d say "yes."')
  } else {
    alert('Are you doing some shredding on your keyboard there yourself?')
    // console.log('response to q4 is invalid)
  };
}

responseFourF();

function responseFiveF() {
  // Question 5 - "N" is true
  let response5 = prompt('Do I live in Seattle now?').toLowerCase();
  if (response5 === 'yes' || response5 === 'y') {
    // console.log('response to q5 is "yes"');
    alert('Nope-- just north of the county line.')
  } else if (response5 === 'no' || response5 === 'n') {
    // console.log('response to q5 is "no"');
    alert('Mountlake Terrace is pretty nice--getting light rail access in a few years too.');
    gamescore++;
  } else {
    alert('...Trying to guess my street address?')
    // console.log('response to q5 is invalid)
  };
}

responseFiveF();

function responseSixF() {
  // Question 6 - "9" is true

  let q6guesscount = 0;

  while (q6guesscount < 4) {
    let response6 = prompt('How many years have I lived in the Seattle area (as of 12/01/21)? ');

    // attempt at data type check below. Outside of scope of lab,so removed for now
    // if (typeof response6 !== 'Number') {
    //   alert('Numbers only, please');
    //   };

    if (response6 < 9) {
      // console.log('response 6 too low');
      alert('Longer than that.');
      q6guesscount++;
      // prompt('How many years have I lived in the Seattle area (as of 12/01/21)? ');
    };

    if (response6 > 9) {
      // console.log('response 6 too high');
      alert('Not that long');
      q6guesscount++;
      // prompt('How many years have I lived in the Seattle area (as of 12/01/21)? ');
    };

    if (response6 == 9) {
      //console.log('response 6 is correct')
      alert('Yup, that\'s right.');
      gamescore++;
      q6guesscount = 4;
    };

  }

  if (q6guesscount = 4) {
    //console.log('alert for guesses exhausted OR correct guess')
    alert('Nine years is enough to get a sense of the area, and to leave if I didn\'t like it.');
  };
}

responseSixF();

function responseSevenF() {
  let q7answers = ['english', 'greek', 'french', 'spanish']

  let q7guesscount = 0;

  while (q7guesscount < 6) {

    let response7 = prompt('What\'s a language that I know?').toLowerCase();

    if (response7 === q7answers[0 || 1 || 2 || 3]) {
      gamescore++;
      alert('Yup--I\'m much better in some languages than others though.');
      q7guesscount = 6;
    } else {
      q7guesscount++;
      alert('I\'ve studied a few, but I\'m not fluent in that one');
    };
  };
}

responseSevenF();

alert('I\'ve studied English, Greek, French, and Spanish.');

alert('You guessed ' + gamescore + ' out of 7 questions correctly. Welcome to the page, ' + user + '!');
