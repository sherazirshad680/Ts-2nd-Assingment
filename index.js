// var a: any = prompt(`Enter a 1st Value`)
// var b: any = prompt(`Enter a 2nd value`)
// if (a < b) {
//     console.log("b is Grater than a");
// } else if (a = b)
//     console.log("a is equal to b");
// else {
//     console.log("a is Less than b");
// }
// var c: any = prompt(`Enter a 1st Value`)
// var d: any = prompt(`Enter a 2nd value`)
// var e: any = prompt(`Enter a 3rd value`)
// if (c > d && c > e) {
//     console.log("c is Grater than d and e");
// } else if (d > c && d > e)
//     console.log("d is grater than c and e");
// else {
//     console.log("e is greater than d and c");
// }
// var f: any = prompt(`Enter a 1st Value`)
// if (f > 0) {
//     console.log(`This is positive number`);
// } else if (f < 0) {
//     console.log(`This is Negative number`);
// }
// else {
//     console.log(`num is equal to Zero`);
// }
// var a: any = prompt(`Enter a 1st Value`)
// var b: any = prompt(`Enter a 2nd Value`)
// if (a % 5 == 0) {
//     console.log(`is devided by 5`);
// } else if (b % 11 == 0) {
//     console.log(`is divded by 11`);
// } else {
//     console.log(`Enter a  valid value`);
// }
// var x = prompt("Enter a value");
// if (x % 2 == 0) {
//     console.log("This is Even Number");
// }
// else {
//     console.log("This is Odd Number");
// }
// var x: any = prompt(`alphabet, digit or special character`)
// if ((x >= 'a' && x <= 'z') || (x >= 'A' && x <= 'Z')) {
//     console.log("This is alphabet.");
// }
// else if (x >= '0' && x <= '9') {
//     console.log("This is digit.");
// }
// else {
//     console.log("This is special character.");
// }
// var x: any = prompt(`Enter a Alphabet`)
// if (x >= 'A' && x <= 'Z') {
//     console.log("This is Upper Case");
// } else if (x >= 'a' && x <= 'z') {
//     console.log("This is Lower Case");
// } else {
//     console.log(`Not an Alphabet Character`
//     );
// }
// var x: any = prompt(`Enter a Month Number (1-12)`)
// if (x == 1) {
//     console.log("31 days");
// }
// else if (x == 2) {
//     console.log("28 or 29 days");
// }
// else if (x == 3) {
//     console.log("31 days");
// }
// else if (x == 4) {
//     console.log("30 days");
// }
// else if (x == 5) {
//     console.log("31 days");
// }
// else if (x == 6) {
//     console.log("30 days");
// }
// else if (x == 7) {
//     console.log("31 days");
// }
// else if (x == 8) {
//     console.log("31 days");
// }
// else if (x == 9) {
//     console.log("30 days");
// }
// else if (x == 10) {
//     console.log("31 days");
// }
// else if (x == 11) {
//     console.log("30 days");
// }
// else if (x == 12) {
//     console.log("31 days");
// }
// else {
//     console.log("Invalid input! Please enter month number between (1-12).");
// }
// var week: any = prompt("Enter week number (1-7)")
// if (week == 1) {
//     console.log("Monday");
// }
// else if (week == 2) {
//     console.log("Tuesday");
// }
// else if (week == 3) {
//     console.log("Wednesday");
// }
// else if (week == 4) {
//     console.log("Thursday");
// }
// else if (week == 5) {
//     console.log("Friday");
// }
// else if (week == 6) {
//     console.log("Saturday");
// }
// else if (week == 7) {
//     console.log("Sunday");
// }
// else {
//     console.log("Invalid Input! Please enter week number between 1-7.");
// }
// var x: any = prompt(`Enter an vowel`)
// if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u' ||
//     x == 'A' || x == 'E' || x == 'I' || x == 'O' || x == 'U') {
//     console.log("This is Vowel.");
// }
// else if ((x >= 'a' && x <= 'z') || (x >= 'A' && x <= 'Z')) {
//     console.log("This is Consonant.");
// }
// else {
//     console.log("This is not an alphabet.");
// }
// var x: any = prompt(`enter marks of five subjects and find percentage and grade`)
// if (x >= 90) {
//     console.log(" (From Physics :), Grade A");
// }
// else if (x >= 80) {
//     console.log(" ((From Chemistery :), Grade B");
// }
// else if (x >= 70) {
//     console.log(" (From Biology :) Grade C");
// }
// else if (x >= 60) {
//     console.log(" (From Mathematics  :) Grade D");
// }
// else if (x >= 40) {
//     console.log(" (From Computer :) Grade E");
// }
// else {
//     console.log("Calculate percentage and grade according to following");
// }
// var units: any = prompt(`hello`)
// if (units <= 50) {
//     console.log(units * 0.50);
// } else if (units <= 150) {
//     console.log(50 * 0.50 + (units - 50) * 0.75);
// } else if (units <= 250) {
//     console.log(50 * 0.50 + 100 * 0.75 + (units - 150) * 1.20);
// } else {
//     console.log(50 * 0.50 + 100 * 0.75 + 100 * 1.20 + (units - 250) * 1.50)
// }
// var x: any = prompt(`Enter your bill units to know your bill`);
// if (x <= 50) {
//     console.log(`your bill is Rs.`, x * 0.5 + ((x * 0.5) / 50) * 100);
// } else if (x <= 150) {
//     console.log(`your bill is Rs.`, x * 0.75 + ((x * 0.75) / 150) * 100);
// } else if (x <= 250) {
//     console.log(`your bill is Rs.`, x * 0.75 + ((x * 0.75) / 150) * 100);
// }
// var x: any = prompt("Enter the selling price: ");
// var y: any = prompt("Enter the Buying  price: ");
// if (x > y)
//     console.log("Profit", x - y);
// else if (x < y)
//     console.log("Loss", y - x);
// else
//     console.log("No profit, no loss");
// var x: any = prompt(`Hi`)
// if (x) {
//     console.log();
// } else if (x) {
// } else if (x) {
// } else {
//     console.log();
// }
