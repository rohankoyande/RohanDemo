let pencil = 10
let erasor = 3
let output = "the total price is"+ (pencil+ erasor) +" "+ "Rupees";
console.log(output)

// templete literals. they are used to add embedded expression in string
let output1 = `the total price is: ${pencil + erasor}`
console.log(output1)

// arithmatic operators: +,-,/,*,**,%
// unary ++, --
// assignment =, +=, -=, %=, /=, *=
// comparison >=, <=, >, <, ==, !=
// logical &&, ||, !
  let n = 5;
  let str =  "5"
  n == str //true. type is ignored
 n === str //type is also considered 
 "a">"A" //true. a is 61. A is 41
 "b">"B" //b is 62. B is 42. ASCII code.
 "*"<"&" //false

   let age = 12;
   if (age >= 18)
    {
        console.log("you can vote"); 
    }   
    else {
        console.log("minor")
    }

    let str1 = "apple";
    if (str1[0] === "a" && str1.length > 3 ) 
    {
      console.log("good string");
    } else {
      console.log("not a good string");
    }
 
    // everything in JS is true or flase in Boolean context 
    // this doesnt mean their value itself is false or true 
    // falsy values: false, 0, -0, On , "", null, undefined, NaN 
    // truthy values: everything else 

    if (true) {
      console.log("it has true value");
    } 
     else {
      console.log("it has false value");
     }

     let color = "red";
     switch(color) {
      case "red" :
        console.log("stop");
        break;
        case "yellow":
          console.log("slow down");
          break;
          case "green":
            console.log("Go");
            break; 
              default:
              console.log("broken light");
     }

console.error("this is an error msg");
console.warn("this is a warning msg");
//  let name1 =  prompt("enter your name:");
//  let msg = `Welocme ${name1}`
//  alert(msg) 

 let msg1 ="    Helllo     ";
 console.log(msg1.trim()); //trim method
//  a new string is created by trim. old string remains the same. strings are immutable

let str2 ="HeLlO";
console.log(str2.toLowerCase()); //lowercase
console.log(str2.toUpperCase()); //uppercase

//indexof returns the first index of occurrence
let str3 = "ilove photography";
console.log(str3.indexOf("love"));
console.log(str3.indexOf("j")) //-1 not found
console.log(str.indexOf("o"));

console.log(msg1.trim().toUpperCase()); //method chaining
console.log(str2.slice(0,4));  //hel (slicing)
console.log(str2.slice(-2)); //length-2 i.e "lo"
console.log(str3.replace("love","do")); //replace 
console.log(str2.repeat(2)); 

let students = ["Rohan", "Surabhi"];
let nums = [1,2,3,4];
console.log(nums[0]);
console.log(students);
console.log(nums.length);
console.log(typeof(nums)); //object
//different types can be combined in an array
let empArr = [];
console.log(empArr)
console.log(students[0][0]) //index zero, char zero
//arrays are mutable

let fruits = ["mango", "apple", "litchi"];
fruits[0] = "banana";
console.log(fruits);
fruits[10] = "papaya"  //directly future index is declared
console.log(fruits);

fruits.push("custard apple");
console.log(fruits);

fruits.pop(); 
console.log(fruits);

fruits.shift(); //deletes the starting index
console.log(fruits);

fruits.unshift("kiwi");
console.log(fruits);

let followers = ["shravani","sanika","surabhi"];
console.log(followers);
let blocked = followers.shift();
console.log(followers);
console.log(blocked); 
console.log(followers.indexOf("surabhi"));
console.log(followers.indexOf("Surabhi")); //capital gives error

console.log(fruits.includes("apple")); //true
console.log(fruits.concat(followers));
console.log(fruits.reverse());

let cars = ["lamborghini", "ferrari", "pagani", "buggati"];
console.log(cars);
console.log(cars.slice()); //copies a portion of a n array
console.log(cars.slice(2));
console.log(cars.slice(2,3));
console.log(cars.slice(-2));

//splice removes or replaces or adds elements in place
//slice makes changes to copy of an array
console.log(cars.splice(2));
console.log(cars.splice(0,1,"rolls royce","bentley"));
console.log(cars);
// first index is the starting index, second index is the delete index. third index is used to add elements.

console.log(cars.sort());  //sort
console.log([cars] == [cars]); //false
//every array variable has different memory allocation.  

let arr = ["a","ab"];
console.log(arr);
let arrcopy = arr;  //same values assigning
arrcopy.push("abc");
console.log(arr);
console.log(arr == arrcopy); //true

const ar = [1,2,3,4,5];
console.log(ar.push());
//const array can be pushed, popped but same name cannot be used in a new array
//array references

//nested array, multi dimensional array
let nu = [ [1,2], [3,4], [4,5]];
console.log(nu);
console.log(nu.length)
console.log(nu[0].length);
console.log(nu[0][0]);

for (let i=1; i<=5; i++) 
{
  console.log(i);
} //for(initialization; condition; updation)
// { do something}

//let nn = prompt("write your number");
nn = parseInt(n); //prompt is string. string to int convertor

for (let i =1; i<=3; i++) {
  console.log(`outer loop ${i}`);
  for (let j=1; j<=3; j++) {
    console.log(j);
  }  //nested loop
}
 
 let i=1;
 while (i<=5) {
  console.log(i);
  i++;
 }

//  let favourite = "Avator";
//  let guess = prompt("guess the movie");
//  while((guess != favourite) && (guess != "quit")) {
//   guess = prompt("wrong guess. please try again");
//  }
//  if (guess == favourite) {
//   console.log("congrats...");
// //  }

 let l=2;
 while(l<=5) {
  if(l == 3) {
    break;
  }
  console.log(l);
  l++;
 }
 console.log("we used break");  //break

 let fru = ["mango", "apple", "banana", "litchi", "orange"];
 for (let k=0; k <fru.length;  k++) {
  console.log(k, fru[k]);
 }    //loops with arrays


 //nested loops with arrays
let heroes = [ 
  ["ironman", "spiderman", "thor"], ["superman", "wonder women", "flash"]
]
for (let x=0; x<heroes.length; x++) {
   console.log(x, heroes[x], heroes[x].length);

   for (let y=0; y<heroes[x].length; y++) {

    console.log(`y=${y}, ${heroes[x][y]}`);
   }
}

let s = [ ["rohan",96], ["surabhi", 65], ["husky", 90] ];

for (let i=0; i<s.length; i++) {
  console.log(`info of students #${i+1}`);

  for (let j=0; j<s[i].length; j++) {
    console.log(s[i][j]);
  }
}

//for of loop
let eat  = ["mango", "apple", "banana", "litchi", "orange"];
for (fruit of eat) {
  console.log(fruit);
  }

for (char of "surabhi" ) {
  console.log(char);
}

//nested for of loop
let hero = [ 
  ["ironman", "spiderman", "thor"], ["superman", "wonder women", "flash"]
]
for ( list of hero) {
  for (superhero of list) {
    console.log(superhero);
  }
}


let todo = [];
//to do appp
// let req = prompt("enter your request");

// while(true) {

//   if ( req == "quit") {
//     console.log("quitting app");
//     break;
//   }

//   if (req == "list") {
//     console.log("----");

//     for (let i=0; i<todo.length; i++) {
//       console.log(i, todo[i]);
//     }
//     console.log("----");
//   }
//   else if (req == "add") {

//     let task = prompt("enter task you want to add");
//     todo.push(task);
//     console.log("task added");
//   }
//   else if (req == "delete") {
//     let idx = prompt("enter task index");
//     todo.splice(idx, 1);
//     console.log("task deleted");
//   }
//   else {
//      console.log("wrong request");
//   }
// }


//JS objects literals - used to store keyed collections & complex entities
//objects are a collection of properties.

let delhi = {
  latitude: "24.56 N",
  longitude: "77.107 E",
  color: ["red","black"] //array in a obj literal
};
console.log(delhi.latitude);
 
const stud = {
  name: "Rohan",
  age: 21,
  marks: 91,
  city: "Mumbai"
}; 

stud.city = "Tokyo"; //key change
stud.gender = "Male"; //new key
delete stud.age;
//JS automatically converts obj keys to strings.
console.log(stud);

//object of object
let classinfo = {
  rohan : {
    grade: "A+",
    city: "NYC"
  },
  surabhi : {
    grade: "A",
    city: "Seatle"
  },
  Husky : {
    grade: "B",
    city: "Atlanta"
  }
};
console.log(classinfo);

//array of objects are also used.

//Math is a inbuild object.
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-12));
console.log(Math.pow(2,4));
console.log(Math.floor(-3.6415));  //round off
console.log(Math.ceil(5.05));      //round off (towords highest)
console.log(Math.random());

let rando = Math.floor( Math.random() * 10); 
console.log(rando + 1);

//generate a random number between 21 to 25.
let rand = Math.floor( Math.random() * 5) + 21;
console.log(rand);

// const max = prompt("enter max number");
// const random = Math.floor( Math.random() * max) + 1;
//guess the number game.

// let guess = prompt("guess the number");
// while(true) {
//   if (guess == "quit") {
//     console.log("user quit");
//     break;
//   }
//   if (guess == random) {
//     console.log("u are right!");
//     break;
//   }
//   else if (guess < random) {
//     guess = prompt("ur guess was too small");
//   }
//   else {
//     guess = prompt("ur guess was too large");

//   }
// } 

function hello() {
  console.log("hello");
}

hello();

function rolldice() {
  let random = Math.floor(Math.random()*6)+1;
  console.log(random); }

rolldice();

// argument function 
function printName(name, age) {
  console.log(`${name}'s age is ${age}.`);
}
printName("Rohan",21);
printName("Surabhi",23);
printName("R",20);

function sum(a,b) {
  return a+b; 
  // return keyword. line of code after return is unreachable.
}

sum(1,2);
sum(2+98);

function calcAvg(a,b,c) {
  let Avg = (a+b+c)/3; 
  // var avg cannot be acessed from outside of the function. function scope
  console.log(Avg); }

calcAvg(34,35,33);

function table(n) {
  for(let i=n; i<=n*10; i+=n) {
    console.log(i)
  }
}

table(69);

function getsum(n) {
  let sum = 0;
  for(let i=1; i<=n; i++); {
    sum +=i;
  }
  return sum;
}

getsum(100);

// string function 
let st = ["hi","hello","bye","!"]; //global variable scope
function concat(st) {
  let result = ""; //function scope
  // inside the function: function scope > global 
  //outside: global > func
  

  for(let i=0; i<st.length; i++) {
    result += st[i];
  }
  return result;
}

concat(st);

// var declared inside a {} block cannot be acessed from outside the block 

function outer {
  
  function inner() { //func scope
    console.log(x);
    // lexical scope - a var defined outside a func can be accessed inside
    // aother function defined after the var declaration. opp. is not true. 
  }
  let x = 4;
  let y = 5;
  // hoisting- var be used before even defining it. 
  inner();
}

let greet = "hello"; //global scope
function changegreet() {
  let greet = "konichiwa"; //func scope
  console.log(greet);

  function innergreet() {
    console.log(greet); //lexical scope
  }
  innergreet();
}
console.log(greet);
changegreet();

let sum = function(a,b) { //var function/ nameless func
  return a+b;
}
sum();

//multiple function
function multiplegreet(func, count) {
  for(let i=1; i<=count; i++) {
    func();
  }
}
let gree = function() {
  console.log("hello");
}
multiplegreet(gree, 5);


function oddevenfactory(request) {
  if(request == "odd") {
    let odd = function(n) {
      console.log(!(n%2 == 0));
    }
    return odd;
  }
  else if(request == "even") {
    let even = function(n) {
      console.log(n%2 == 0);
    }
    return even;
  }
  else {
    console.log("wrong request");
  }
}

let request = "odd"; //even
let func = oddevenfactory(request);
func(3);

const calculator = {
  num: 55,
  add: function(a,b) {
    return a+b;
  },
  sub: function(a,b) {
    return a-b;
  },
  mul: function(a,b) {
    return a*b;
  }
};  //methods- functions in object

calculator.num;
console.log(calculator.add(1,9));

const calcu = {
  add(a,b) {
    return a + b;
  },
  sub(a,b) {
    return a-b;
  }
};

const student = {
  name: "shradha",
  age: "21",
  eng: "90",
  getAvg() {
    let avg = (this.eng + this.name) / 3;
    console.log(avg);
  }
}
//this keyword refers to an object that is executing the current piece of code

function getAvg() {
  console.log(this); //window














                     