// Exercise 1:  Write a program that calculates the area of a rectangle.
var heightRectangle: number = 20;
var widthRectangle: number = 10;
var areaRectangle: number = heightRectangle * widthRectangle;
console.log(areaRectangle);

// Exercise 2: Write a program that calculates the volume of a cube.
var sideLength:number = 5;
var volumeCube:number = Math.pow((sideLength),3);
console.log(volumeCube);

// Exercise 3:  Write a program that checks if a given number is positive, negative, or zero.
var numOne:number = 11;
if (numOne > 0){
    console.log(numOne + " is positive number");
}
else if (numOne < 0){
    console.log(numOne + " is negative number");    
}
else {
    console.log(numOne + " is zero number");
}

// Exercise 4:   Write a program that checks if a given number is even or odd.
if (numOne % 2 == 0){
    console.log(numOne + " is even number");    
}
else {
    console.log(numOne + " is odd number");
}

// Exercise 5:  Write a program that determines if a person is eligible to vote based on their age.
var personAge:number = 20;
if (personAge < 18){
    console.log("Not eligible for vote");
}
else {
    console.log("Eligible for vote");
}

// Exercise 6:  Write a program that calculates the result of a mathematical expression.	((10 + 5) * 3 - 2) / (4 % 3)  - 7
var calculateResult:number = ((10+5)*3-2)/(4%3)-7;
console.log("Result is: ", calculateResult);
