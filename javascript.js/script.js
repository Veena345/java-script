// console.log("hello world") 
/* boolean
let x=2;
let y=5;
let z=Boolean(x>y);
console.log(z)

  string
let str= "calibriant";
let length= str.length;
console.log(length)
let slice=str.slice(3,8)
console.log(slice)
let slice1=str.substring(2,5)
console.log(slice1)

let text = "Please help meee,please";
let index = text.lastIndexOf("please");
let index1 = text.indexOf("meee");
console.log(index)
console.log(index1)

let array=[ "Banana", "Orange", "Apple", "Mango",]
let size= array.length;
console.log(size);
let string= array.toString()
console.log(string)
let string1=array.pop()
console.log(string1)

console.log(array.push("watermelon"))
console.log(array)
console.log(array.shift())
console.log(array)
console.log(array.unshift())
console.log(array)
let array1=["tomato","potato","carrot","onion"]
let newarray=array.concat(array1)
console.log(newarray)

console.log(array.indexOf("Apple"))
console.log(array.lastIndexOf("Apple") )

let a=56;
let b=87;
let x=3;
console.log(a++)
console.log(++a)
console.log(--b)
console.log(--a)
console.log(a!=b)
console.log(a&b)
console.log(a|b)
console.log(a<<b)
console.log(a>>b)
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a<b)
console.log(a>b)
console.log(a==b)
console.log(a<=b)
console.log(++x,x)

let x=3
let y=5
let z=2
if((x>y) && (x>z)){
  console.log("x is greatest")}
else if ((y>x)&&(y>z))
{  
console.log("y is gtratest")
}
else
{
  console.log("z is greatest")
}

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
  
}
console.log(day)

let text;
switch (new Date().getDay()) {
  default:
    text = "Looking forward to the Weekend";
    break;
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
} console.log(text)

sum =0
for(i=0;i<10;i++)
{ sum =sum+i
console.log(sum)
}

const person = {fname:"John", lname:"Doe", age:25};

let text = "hello";
for (let x in person) {
  text += person[x];
  console.log(text)
}

const cars = ["BMW", "Volvo", "Mini"];

let text = " audi";
for (let x of cars) {
  text += x 
}
console.log(text )

i=0
while (i < 10) {
  text = "The number is " + i;
  i++;
  console.log(text)
}
i=0;
do {
  console.log(text = "The number is " + i);
  i++;
}
while (i < 10);

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

while (cars[i]) {
  console.log(text = cars[i]);
  i++;
}

const fruits = new Map();
 console.log(fruits.set("apples", 500));
 console.log(fruits.set("bananas", 300));
 console.log(fruits.set("oranges", 200));
 console.log(fruits.set("apples", 200));
 console.log(fruits.get("apples")); 
 console.log(fruits.delete("apples"));
 console.log(fruits);
 console.log(fruits.has("apples"));

 const myFunction = new Function("a", "b", "return a * b");

 let x = myFunction(4, 3);
 console.log(x)

const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

 console.log(person.fullName.call(person2));


 const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

 console.log(person.fullName.call(person1, "Oslo", "Norway"));

 let myArray = [1, 2, 3];
 myArray.push(4); // Modifying the array in place
 console.log(myArray)
 
 let myString = "Hello";
 let newString = myString.toUpperCase(); // Creating a new string with modified state
 console.log(newString);



 //node js 

 http = require('node:http');
listener = function (request, response) {
   
   
   
   response.writeHead(200, {'Content-Type': 'text/html'});
  
   
   response.end('<h2 style="text-align: center;">Hello World</h2>');
};

server = http.createServer(listener);
server.listen(3000);



console.log('Server running at http:/127.0.0.1:3000/');

			

function sumArrayAsync(arr, callback) {
    let sum = 0;
    
    setTimeout(() => {
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        
        callback(null, sum);
    }, 1000);
}


const myArray = [1, 2, 3, 4, 5];


function sumCallback(error, result) {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Sum of array elements:", result);
    }
}


sumArrayAsync(myArray, sumCallback);



function maxArrayAsync(arr, callback) {
    
    setTimeout(() => {
        const max = Math.max(...arr);
    
        callback(null, max);
    }, 1000);
}

const myArray = [10, 5, 40, 15, 25];

function maxCallback(error, result) {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Maximum element in array:", result);
    }
}

maxArrayAsync(myArray, maxCallback);


//promise 
// Function to convert a string to uppercase asynchronously using promises
function toUpperCaseAsync(str) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof str !== 'string') {
                reject(new Error("Input is not a string"));
            } else {
                resolve(str.toUpperCase());
            }
        }, 1000);
    });
}


const myString = "hello, world";




toUpperCaseAsync(myString)
    .then(upperStr => {
        console.log("Uppercase string:", upperStr);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });

console.log("After converting string to uppercase asynchronously");

*/


// Function to reverse a string asynchronously without using built-in functions
function reverseStringAsync(str) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof str !== 'string') {
                reject(new Error("Input is not a string"));
            } else {
                let reversed = '';
                for (let i = str.length - 1; i >= 0; i--) {
                    reversed += str.charAt(i);
                }
                resolve(reversed);
            }
        }, 1000);
    });
}


const myString = "hello world";

console.log("Before reversing string asynchronously");


async function reverseString() {
    try {
        const reversedString = await reverseStringAsync(myString);
        console.log("Reversed string:", reversedString);
    } catch (error) {
        console.error("Error:", error.message);
    }
}


reverseString();

console.log("After reversing string asynchronously");



