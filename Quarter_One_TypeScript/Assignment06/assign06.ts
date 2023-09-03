// - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.

let negArr:number[]= [-1,2,3,3,4,4,4,4,3,3,3,3,4,4,4,-4,5,-6,7,-8,9,-10];
console.log("Original Array: ",negArr);

let j:number=0
while(j<negArr.length){
    if(negArr[j]%2==0){
        negArr.splice(j,1);
    }else{
        j++;
    }
}
console.log("Filtered Array: ",negArr);

// - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.

const ArrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < ArrNumbers.length; i++) {
  if (ArrNumbers[i] % 2 === 0) {
    console.log(ArrNumbers[i]);
  }
}

// - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones

const newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < newNumbers.length; i++) {
  if (newNumbers[i] % 2 === 0) {
    newNumbers.splice(i, 1);
    i--; 
  }
}
console.log(newNumbers);

// - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.

function calculateCircleArea(radius: number): number {
    const area = 3.14 * radius**2;
    return area;
  }
  
  const circleRadius = 5; 
  const areaOfCircle = calculateCircleArea(circleRadius);
  console.log(`The area of the circle with radius ${circleRadius} is ${areaOfCircle}`);
  

// - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.

const grades = [65, 78, 32, 90, 45, 75, 22, 88, 95, 40];

for (let i = 0; i < grades.length; i++) {
  if (grades[i] < 50) {
    grades.splice(i, 1);
    i--;
  }
}

console.log(grades);

// - Write a program that uses a function to find the largest element in an array of numbers.

function sumOfFirstNEvenNumbers(n: number): number {
    let sum = 0;
  
    for (let i = 1; i <= n; i++) {
      sum += 2 * i; 
    }
  
    return sum;
  }
  
  const n = 5; 
  const resuls = sumOfFirstNEvenNumbers(n);
  console.log(`Sum of the first ${n} even numbers is ${resuls}`);