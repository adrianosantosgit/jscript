const fahrenheit = [72, 68, 70, 74, 77, 75, 79];
const celsius = [];
for (const element of fahrenheit){ // Convert Fahrenheit to celsius
    let c = (element - 32) * (5/9);
    celsius.push(c);
}
console.log(celsius);

console.log("*************************");

const states = ['sp', 'mg', 'rj']; // Tornar maiusculas usando arrow function
const upperCaseStates = states.map((element) => element.toUpperCase());
console.log(upperCaseStates);

console.log("*************************");

const values = [1, 2, 3, 4, 5, 6];
const valuesSquares = values.map(element => element*element);
console.log(valuesSquares); //Use of arrow function to calc the square of a value
const valuesDoubled = values.map(element => element*2);
console.log(valuesDoubled); //Use of arrow function to calc the double of a value

console.log("*************************");

const testScores = [72, 85, 95, 90, 71, 75];
const aGrades = testScores.filter(element => element >= 90);
console.log(aGrades); // Array filter and Arrow function

console.log("*************************");

const finishers = ['Sarah', 'Sally', 'Jake', 'Alex', 'Toni'];
const top3 = finishers.filter((finisher, place) => place < 3);
console.log(top3)

console.log("*************************");

const tripMiles = [33, 96, 78];
const totalTripMiles = tripMiles.reduce((preVal,curVal) => preVal + curVal);
console.log(totalTripMiles);

console.log("*************************");

const words = ['The', 'House', 'is', 'White.'];
const sentence = words.reduce((preVal,curVal) => preVal + ' ' + curVal);
console.log(sentence);

console.log("*************************");

let initials = ['BR', 'US', 'CN']; // Use of lowercase function
let lowercaseInitials = initials.map(element => element.toLowerCase);
console.log(lowercaseInitials);

console.log("*************************");

let searchVisitorsByInitial = ['Cris', 'Andrew', 'Christian', 'Delia'];
let cInitials = searchVisitorsByInitial.filter((element) => element[0] == "C");
console.log(cInitials);

console.log("*************************");

