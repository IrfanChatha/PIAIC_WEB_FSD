// Assignment for this week is:

//  - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
var tempCelsius:number = 36;
var tempFahrenheit: number = (tempCelsius * 9/5) + 32;
console.log("Temperature in Farhenheit is :" + tempFahrenheit);

tempCelsius = (tempFahrenheit - 32) * 5/9;
console.log("Temperature in Celsius is :" + tempCelsius);

//  - Write a program that calculates the percentage.
var partNumber:number = 35;
var wholeNumber:number = 200;
var percentage:number = (partNumber / wholeNumber) * 100;
console.log(percentage);

//  - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
var totalDays:number = 27;
var calcWeek:number = totalDays / 7;
var calcDays:number = totalDays % 7;
console.log(Math.floor(calcWeek)+" weeks and "+calcDays+" days.");

//  - Write a program that calculates the discount for a product based on its price.
//    If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
var productPrice:number = 1000;
if (productPrice > 100) {
var discountPrice:number = productPrice*(10/100);
}
else {
    discountPrice = productPrice*(5/100);
}
console.log(discountPrice);

//  - Create a program that determines the category of a user-provided age.
//    If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." 
//    Otherwise, print "Adult."
var userAge:number = 15;
if (userAge > 0 && userAge <=12) {
    console.log("User is Child.");
} 
else if (userAge > 12 && userAge <=19) {
    console.log("User is Teenager.");
}
else {
    console.log("User is Adult.");
}

//  - Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
var currentTempCelsius:number = 10;
if(currentTempCelsius < 15){
    console.log("It's cold. Wear warm clothes.")
}
else {
    console.log("It's hot. Wear summer clothes.")
}

//  - Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
var numDiv: number = 92;
if (numDiv % 3 == 0 && numDiv % 5 != 0){
console.log("Number is divisible by 3");
} else if (numDiv % 3 != 0 && numDiv % 5 == 0){
    console.log("Number is divisible by 5");
} else if (numDiv % 3 == 0 && numDiv % 5 == 0){
console.log("Number is divisible by 3 and 5");
} else {
console.log("Number is not divisible by 3 or 5");
}

//  - Write a program that checks if the given year is leap year or not.

//  - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.

//  - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
//    Where the tax amount will be calculated by the amount of bill.
