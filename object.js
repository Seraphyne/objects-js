/* eslint-disable strict */

//https://courses.thinkful.com/ei-dev-env-v1/checkpoint/12

// Create an object called loaf using an object initializer ({}) with two properties: flour, which should be set to 300 and water which should be set to 210.
// Use console.log to print the flour and water properties.
// Add an empty method to the loaf object called hydration.
// Fill in the body of the method to return the hydration of the loaf (the water divided by the flour multiplied by 100).
// Call the hydration method and use console.log to print the result.

let loaf = {
flour: 300,
water: 210,   
hidration(){
   return (water/flour) *100; 
}
};

const {flour, water, hidration} = loaf;

console.log(water);
console.log(flour);
console.log(loaf);

console.log(hidration());

//-----------


// Create an object with five properties: foo, bar, fum, quux, and spam. Give each property a unique value of your choosing.
// Loop over the object using for ... in
// Use console.log to show each property name and its associated value.


let myObj = {
    foo: "1",
    bar: 2,
    fum: 3,
    quux: 4,
    spam: 5
};

for (const value in myObj) {
    console.log(`${value}: ${myObj[value]}`);
  }

console.log(myObj);

//-----------


// Create an object with a property called meals which is an array of strings: 'breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'.
// Use console.log to show the name of a hobbit's fourth meal of the day.
// Don't forget that humans and hobbits count from 1, but computers count from 0.


let myMeals ={
    meals: ['breakfast', 'second breaksfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(myMeals.meals[3]);

//-------------------------


// Create 3-5 objects, each with a name and a jobTitle. Use people you know, or characters from fiction, or your own inventions.
// Store these objects in an array.
// Iterate over the array and use console.log to show each person's job title and name.


let threeObj = [
    {
        name: 'bob',
        jobTitle: 'manager'
    },
    {
        name: 'chris',
        jobTitle: 'teacher'
    },
    {
        name: 'john',
        jobTitle: 'barista'
    }
];

threeObj.forEach(element => console.log(element));

//-------------------------


// Expand on the previous example by adding a boss property to everyone except the owner of the company.
// Change the iteration to print out messages in this format: "${title} ${name} reports to ${boss}.". For example: Junior Engineer Bob reports to Fred..
// What gets printed out for the owner?
// Adjust the message so that people with no boss display "${title} ${name} doesn't report to anybody." - for example, Founder John doesn't report to anybody.


threeObj.forEach(element => {if (element.name !=='bob') element['boss'] = 'bob'});

threeObj.forEach(person => {
    if (person['boss']) {
        console.log(`${person['jobTitle']} ${person['name']} reports to ${person['boss']}`);
    } 
    else {
        console.log(`Founder bob doesn\'t report to anybody`)
    }
})
// --------------------------
//https://courses.thinkful.com/ei-js-v1/checkpoint/8


// Write a function called jediName which takes two arguments:

//     firstName - a person's first name
//     lastName - a person's last name

// The function should return the person's Jedi name. A Jedi name is formed from the first three letters of the last name, and the first two letters of the first name. For example, jediName('Beyonce', 'Knowles') should return 'KnoBe'.


function jediName(firstName, lastName){
    let first = lastName.slice(0,3);
    let second = firstName.slice(0,2);
    return first +second;
};

console.log(jediName('Beyonce', 'Knowles'));

//----------------------------------

// Write a function called beyond which takes a single argument, num and logs a different message depending on its value.

//     If num is infinite (either positive or negative) it should log out 'And beyond'.
//     If num is finite and positive it should log out 'To infinity'.
//     If num is finite and negative it should log out 'To negative infinity'.
//     If num is zero it should log out 'Staying home'.

function beyond(num){
    if(num > 0){
        return console.log('To infinity');
    }
    else if(num < 0){
        return console.log("To negative infinity");
    }
    else if(num === -Infinity | num === +Infinity){
        return console.log('And Beyond');
    }
    else (num === 0)
        return console.log('Staying home');
};

console.log(beyond(3));

//-------------------------

// A code has been invented which replaces each character in a sentence with a five letter word. The first letter of each encoded word determines which of the remaining four characters contains the decoded character according to this table:
// First letter 	Character number
// a 	2
// b 	3
// c 	4
// d 	5

// So for example, the encoded word 'cycle' would be decoded to the character 'l'. This is because the first letter is a 'c', so you look for the fourth character, which is 'l'.

// If the first letter of the encoded word isn't 'a', 'b', 'c', or 'd' (for example 'mouse') this should be decoded to a space.

// Write a function called decode which takes an encoded word as an argument, and returns the correct decoded character.

// Use your function to decode the following message: 'craft block argon meter bells brown croon droop'.

function decode(word) {
    let newWord = word.split(' ').map(letter => {
        if (letter[0] === 'a') {
            return letter[1];
        } else if (letter[0] === 'b') {
            return letter[2];
        } else if (letter[0] === 'c') {
            return letter[3];
        } else if (letter[0] === 'd') {
            return letter[4];
        }
        else{
          return ' ';
        }
    })
    return newWord;
}

console.log(decode('craft block argon meter bells brown croon droop'));

// Additionally, create a decodeWords function that utilizes your decode function to accept a single string of words, and then return the fully decoded message as a string.

function decodeWords(word) {
    let newWord = word.split(' ').map(letter => {
        if (letter[0] === 'a') {
            return letter[1];
        } else if (letter[0] === 'b') {
            return letter[2];
        } else if (letter[0] === 'c') {
            return letter[3];
        } else if (letter[0] === 'd') {
            return letter[4];
        }
        else{
          return ' ';
        }
    }).join(' ');
    return newWord;
}

console.log(decodeWords('craft block argon meter bells brown croon droop'));


//----------------------------

// Write a function that takes the arguments month (string) and leapYear (boolean, optional) and use a switch statement to return a sentence explaining how many days there are in that month.

// For example if the argument provided is 'January', the function should return "January has 31 days". For February, it should return the appropriate 29 for leap years and 28 for non-leap. If the string doesn't match a valid month, throw an error with the message: 'Must provide a valid month.'

function monthOfTheYear(month, leapYear){
    switch(month) {
        case "January":
        case "March":
        case "May":
        case "July":
        case "August":
        case "October":
        case "December":
        console.log(`${month} has 31 days.`);
        break;
        case "April":
        case "June":
        case "September":
        case "November":
        console.log (`${month} has 30 days.`);
        break;
        case "February":
        console.log(`${month} has 28 days.`);
        break;
        default:
            console.log('Must provide a valid month.');
    }
    switch (month, leapYear){
        case "February", true:
        console.log(`${month} has 29 days`);
    }
}
    
console.log(monthOfTheYear('February'));

//------------------------

// In the game Rock Paper Scissors, two players simultaneously choose one of the three options: rock, paper, or scissors. If both players choose the same option, the result is a tie. Otherwise the winner is determined as follows:

//     Rock beats scissors
//     Scissors beats paper
//     Paper beats rock

// Create a game in which you are playing against the computer. The computer randomly chooses rock, paper, or scissors. Your function should take a number as an argument of 1, 2, or 3 to represent rock, paper, or scissors, respectively, and determine the winner. If you enter anything other than a number between 1-3, throw an error.

let options = ["rock", "paper", "scissors"];
let map = {};

options.forEach(function(userChoice,a) {
    map[userChoice] = {};
    for(let b = 0, half = (options.length-1)/2; b < options.length; b++) {
        let opposition = (a+b)%options.length
        if (!b)
            map[userChoice][userChoice] = "It is a tie!"
        else if (b <= half)
            map[userChoice][options[opposition]] = `${options[opposition]} + " wins!!"`
        else
            map[userChoice][options[opposition]] = `${userChoice} + " wins!!"`
    }
})

function results(option1, option2) {
    return(map[option1] || {})[option2] || "Invalid choice";
}

console.log(results('rock', 'rock'));

//----------------

// LOTR

function createCharacter(name, nickname, race, origin, attack, defense, weapon ){
  return{
    name: name,
    nickname: nickname,
    race: race,
    origin: origin,
    attack: attack,
    defense: defense,
    weapon: weapon,
    describe: function(){
      return `${name} is a ${race} from ${origin} who uses ${weapon}.`},
    fight: function(char){
      return `Your opponent takes ${attack} damage and you receive ${char.attack} damage.`
    }
  }
}
  
let users = [
  createCharacter('Gandalf the White','gandalf', 'Wizard', 'Middle Earth', 10, 6, 'a wizard staff'),
  createCharacter('Bilbo Baggins','bilbo', 'Hobbit', 'The Shire', 2, 1, 'the Ring'),
  createCharacter('Frodo Baggins','gandalf', 'Hobbit', 'The Shire', 3, 2, 'a String and Barrow Blade'),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man' ,'Dunnedain', 6, 8, 'a Anduril'),
  createCharacter('Legolas ', 'legolas ', 'Elf' ,'Woodland Realm', 8, 5, 'a Bow and Arrow'),
  createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 8, 5, 'a Hadhafang')
];
  
  
console.log('Find Aragorn')
function findAragorn(user){
  return user.nickname === 'aragorn';
}
console.log(users.find(findAragorn))
  
function findHobbit(user){
  return user.race === 'Hobbit';
}
  
let theHobbits = users.filter(findHobbit);
console.log(theHobbits);
  
  
function dmg(user){
  return user.attack >= 5;
}
  
let theAttackers = users.filter(dmg);
console.log(theAttackers);
  
console.log(users[1]['describe']());


