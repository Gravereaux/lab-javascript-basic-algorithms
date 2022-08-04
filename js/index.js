// Iteration 1: Names and Input
let hacker1 = "XXXX";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "YYYY";

console.log(`The navigator's's name is ${hacker2}`);

// Iteration 2: Conditionals
console.log('navigator'.localeCompare('driver'));


const str = "navigator";
console.log(`It seems that the navigator has the longest name, it has ${str.length} characters`);

if (hacker1.length > hacker2.length) {
  colsole.log(`the driver has the longest name, it has ${hacker1.length} characters`);
}
  else if (hacker1.length > hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}

else  {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
}


// Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let newDriversName = " ";
for (let i = 0; i < hacker1.length; i++) {
  newDriversName += hacker1[i].toUpperCase() + " ";
}
console.log(newDriversName.trim());

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let newNavigatorsName = " ";
for (let i = hacker2.length - 1; i >= 0; i--) {
  newNavigatorsName += hacker2[i];
}
console.log(hacker2.split('').reverse().join(''));
//3.3 Depending on the lexicographic order of the strings, print:
//- The driver's name goes first.
//- Yo, the navigator goes first definitely.
//- What?! You both have the same name?

if (hacker1 > hacker2) {
  console.log ("The driver's name goes first.");
}
else if (hacker1 < hacker2) {
  console.log ("Yo, the navigator goes first definitely.");
}
else {
  console.log("What?! You both have the same name?");
}