//uc1 – Random Function Math.floor(Math.random() * 10); to get Single digit
let a = console.log(Math.floor(Math.random()*10)%10);

//uc2 - Use Random to get Dice Number between 1 to 6
let dice = console.log(Math.floor(Math.random() * 6 +1));

//uc3 - Add two Random Dice Number and Print the Result
let dice2 = (Math.floor(Math.random() * 6 +1));
let dice1 = (Math.floor(Math.random() * 6 +1));
let c = dice2 + dice1 ;
console.log("ADDITION OF TWO DICE IS:" +c);

/*uc4 - Write a program that reads 5 Random 2 Digit values,
then find their sum and the average */
let n1 = (Math.floor(Math.random() * 90 +10));
let n2 = (Math.floor(Math.random() * 90 +10));
let n3 = (Math.floor(Math.random() * 90 +10));
let n4 = (Math.floor(Math.random() * 90 +10));
let n5 = (Math.floor(Math.random() * 90 +10));
let sum = (n1 + n2 + n3 + n4 + n5);
console.log(+sum);
let avg = (sum/5);
console.log(+avg);