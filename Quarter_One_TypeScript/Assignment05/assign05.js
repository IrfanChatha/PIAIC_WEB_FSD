"use strict";
//  - Create a function that takes an array, an index, and a value as parameters.
//    Inside the function, use the splice method to insert the value at the specified index in the array.
//    Return the modified array.
const myArray = [1, 2, 3, 5, 6, 7, 8];
const newIndex = 3;
const newValue = 4;
function insertValue(arr, index, value) {
    arr.splice(index, 0, value);
    return arr;
}
const modifiedArray = insertValue(myArray, newIndex, newValue);
console.log(modifiedArray);
//  - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
//  - Write a program that uses a while loop to print the first 25 integers.
var numInt = 1;
const numArr = [];
while (numInt <= 25) {
    numArr.push(numInt);
    numInt++;
}
console.log(numArr);
//  - Write a program that uses a while loop to print the first 10 even numbers.
var numIntg = 1;
const numArrg = [];
while (numIntg <= 20) {
    if (numIntg % 2 == 0) {
        numArrg.push(numIntg);
    }
    numIntg++;
}
console.log(numArrg);
//  - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
var number = 5;
function calculateFactorialOfAPositiveNumber(num) {
    if (num >= 0) {
        let factorial = 1;
        let count = 1;
        while (count <= num) {
            factorial *= count;
            count++;
        }
        console.log(`Factorial of Number: ${number} is: ${factorial}`);
    }
    else {
        console.log(`Given Number: ${num} is not a Positive Number`);
    }
}
calculateFactorialOfAPositiveNumber(number);
//  - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
//  - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
//  - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
