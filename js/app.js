'use strict';

console.log('hello world');

// User name input, followed by user-tailored greeting
let user = prompt('Hello! Welcome to my Bio page-- what\'s your name?')
  alert('Hey ' + user + ', here are a few quick questions about my Bio that are explained better on the page.');

// Question 1 - 'N' is true
let response1 = prompt('Am I from the Seattle area?').toLowerCase();

// response1Standardization using toLowerCase()

if (response1 === 'yes' || response1 === 'y'){
  // console.log('response to q1 is "yes"');
  alert('Nope, I\'m from the Rust Belt.')
} else if (response1 === 'no' || response1 === 'n'){
  // console.log('response to q1 is "no"');
  alert('That\'s right, I\'m from Upstate New York.')
} else {
  //console.log('response to q1 is invalid')
  alert('Uh... I\'m from Syracuse.')
};

// Question 2 - 'Y' is true
let response2 = prompt('Can I read ancient Greek?').toLowerCase();

if (response2 === 'yes' || response2 === 'y'){
  // console.log('response to q2 is "yes"');
  alert('Yeah, I\'d need a dictionary if I looked back at anything complicated now though.')
} else if (response2 === 'no' || response2 === 'n'){
  // console.log('response to q2 is "no"');
  alert('I can, actually. Yeah, some people DO spend their time and money on things like that.')
} else {
  alert('I can; was that what you were trying to type?')
  // console.log('response to q2 is invalid)
};

//Question 3 - 'N' is true
let response3 = prompt('Did I go to law school?').toLowerCase();

if (response3 === 'yes' || response3 === 'y'){
  // console.log('response to q3 is "yes"');
  alert('Nope, I just ended up sticking with a job in the legal field for a while.')
} else if (response3 === 'no' || response3 === 'n'){
  // console.log('response to q3 is "no"');
  alert('Right, I merely worked around lawyers for a few years.')
} else {
  alert('Is that...latin? I studied Greek.')
  // console.log('response to q3 is invalid)
};

// Question 4 - "Y" is true
let response4 = prompt('Can I play the guitar?').toLowerCase();
if (response4 === 'yes' || response4 === 'y'){
  // console.log('response to q4 is "yes"');
  alert('Yeah, it\'s been a rewarding hobby.')
} else if (response4 === 'no' || response4 === 'n'){
  // console.log('response to q4 is "no"');
  alert('Ouch! How well is debatable, but since I can do more than scales I\'d say "yes."')
} else {
  alert('Are you doing some shredding on your keyboard there yourself?')
  // console.log('response to q4 is invalid)
};

// Question 5 - "N" is true
let response5 = prompt('Do I live in Seattle now?').toLowerCase();
if (response5 === 'yes' || response5 === 'y'){
  // console.log('response to q5 is "yes"');
  alert('Nope-- just north of the county line.')
} else if (response5 === 'no' || response5 === 'n'){
  // console.log('response to q5 is "no"');
  alert('Mountlake Terrace is pretty nice--getting light rail access in a few years too.')
} else {
  alert('...Trying to guess my street address?')
  // console.log('response to q5 is invalid)
};
  alert('Welcome to the page, ' + user + '!');
