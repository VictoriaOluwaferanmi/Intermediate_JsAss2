// Question1
//• Design a for loop that returns an array of even numbers from 1-100

for (let i = 1; i <= 100; i++) {
    if(i % 2==0){
        console.log(i);
    }
}

//Question 2
//Create a function that returns even numbers between two numbers A and B


function EvenNumbers(A,B){
for(let i=A; i<=B;i++)
if(i % 2==0){
        console.log(i);
    }
}

EvenNumbers(4,8);

//Question 3
//(d) when you want to loop through a group of statements.

//Question 4
//Create a function with a function name firstFunction( ) and return the sum of two integers(numbers)

function firstFunction(a,b){
    return(a+b);

}
console.log(firstFunction(10,5));

//Question 5
//Create a function with a function name printSum( ) and print the sum of two numbers.//
function printSum(i,j){
let sum=i+j;
console.log(sum)
}

printSum(9,17);


//Quesion 6: Create a function that returns an array of the names of 10 of your course mates.

function classMates(names){
    for (let index = 0; index < names.length; index++) {
    console.log(names[index]);
        }
            }
let names=["Funmi","Femi", "Shade","Pelumi","Lola", "Sayo", "Ade", "Ola", "Teju", "Wunmi"];
classMates(names);


//Question 7 :• Add an element to the end of this array [1,2,4]
let myArray=[1,2,4];
myArray.push(15);
console.log(myArray);

//Question 8:Remove the last element in this array [1,2,3,8]
let theArray=[1,2,3,8];
theArray.pop();
console.log(theArray);

//Question 9:Remove the first element in this array [23.77,80,45]
let elements=[23.77,80,45];
elements.shift();
console.log(elements);

//Question10:Add an element to the beginning of the array [[20,30,80],[10,50,55]]
let arrayOfNumbers=[[20,30,80],[10,50,55]];
arrayOfNumbers.unshift(25)
console.log(arrayOfNumbers);

