// const checkAnagram = (a,b)=>{
//   let str = ''
//   if(a.length !== b.length) false
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       if(a[i] === b[j]){
//         str+=b[j]
//       }

//     }

//   }
//   console.log(str);
//   return a === str
// }

const checkAnagram = (x, y) => {
  let a = x.split('')
  let b = y.split('')
  if (a.length !== b.length) false

  const res1 = a.sort((a, b) => a > b ? 1 : -1)
  const res2 = b.sort((a, b) => a > b ? 1 : -1)
  console.log(res1, res2);
  return res1.join('') === res2.join('')
}




// const result = checkAnagram('abcd','acdb')
// console.log(result);

// Find the reverse of the string
const reverseStr = (str) => {
  let result = ''
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result

}

console.log(reverseStr('shivani'))

// const res = reverseNumb(10);
// console.log(res);

// console.log('rahul' == 'rhul');



// const secondLargest = (...rest)=>{
// const result = rest.sort((a,b)=>b -a)
// const res = result[1]
// console.log(res);
// }

//WAP to find the second largest number in an array without sorting

const secondLargest = (...rest) => {
  let first = -1, second = -1
  for (let val of rest) {
    if (val > first) {
      second = first
      first = val
    } else if (val > second && val != first) {
      second = val
    }
  }
  console.log(second);
}

// secondLargest(1,3,2,4,5,19,23,18)

//  WAP to print Fibonacci series with recursion

const fibonacci = (n) => {
  // let a = 0,b=1,sum;
  //let arr = [a,b]
  // for(let i=2;i<n;i++){
  //  sum = a+b; 
  //  a =b
  //  b = sum;
  // }

  if (n <= 1) {
    return n
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1)
  }

}

// console.log(resu);

const prime = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false
    }
  }
  return true
}

function range(n) {
  for (let i = 1; i < n; i++) {
    if (prime(i)) {
      console.log('Prime', i)
    }
  }
}


range(9);


function availableMoves(pos) {
  // your code here
  const letter = pos.split('')[0].charCodeAt();
  const number = Number(pos.split('')[1]);
  let possibleMoves = [];
  for (let i = 1; i <= 8; i++) {
    if (i == number) {
      continue;
    }
    leftDiagonal = i + (letter - number);

    if (65 <= leftDiagonal && leftDiagonal <= 72) {
      possibleMoves.push(`${String.fromCharCode(leftDiagonal)}${i}`)
    }
    possibleMoves.push(`${String.fromCharCode(letter)}${i}`)
  }

  for (let j = 72; j >= 65; j--) {
    if (j == letter) {
      continue;
    }
    rightDiagonal = number + (letter - j);
    if (1 <= rightDiagonal && rightDiagonal <= 8) {
      possibleMoves.push(`${String.fromCharCode(j)}${rightDiagonal}`)
    }
    possibleMoves.push(`${String.fromCharCode(j)}${number}`)
  }
  return possibleMoves.sort()

}




// console.log(availableMoves('D4'))




function reverse(str) {
  let result = ''
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i])
    result += str[i]
  }
  return result
}

function power(x, n) {
  sum = 1;
  for (let i = 1; i <= n; i++) {
    sum *= x
  }
  return sum
}
console.log(power(3, 3))


//Code to find even numbers in a list
const even = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      console.log(arr[i])
    }
  }
}
even([1, 3, 2, 4, 5, 67, , 89, 0, 10])



// Given an array of strings, group the anagrams together. You can return the answer in any order.
// Input: str = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"

let anagramsGroup = (words) => {
  let anagrams = {}
  let anagramsArr = []
  //For of loop for array
  for (let word of words) {
    let letters = word.split('').sort().join('')
    anagrams[letters] = anagrams[letters] || []
    anagrams[letters].push(word)
  }
  for (let key in anagrams) {
    anagramsArr.push(anagrams[key])
  }
  return anagramsArr
}

let words = ["eat", "tea", "tan", "ate", "nat", "bat"]

const res = anagramsGroup(words)
console.log(res)



function string(str){
  let resStr = ''
  const isUpperCase = char=> char.charCodeAt()>=65 && char.charCodeAt()<=90
  
  const isLowerCase = char=> char.charCodeAt()>=97 && char.charCodeAt()<=122

  
for(let i=0;i<str.length;i++){
  if(isLowerCase(str[i])){
    console.log('isLowerCase(str[i])',isLowerCase(str[i]))
      resStr+=String.fromCharCode(str[i].charCodeAt(0) - 32)
  }
  else if(isUpperCase(str[i])){
    console.log('isUpperCase(str[i])',isUpperCase(str[i]))
      resStr+=String.fromCharCode(str[i].charCodeAt(0) + 32)
  }else{
    console.log('jsndjs')
      resStr+=str[i]
  }
}
return resStr
}

console.log(string('HITESH RAMDIN'))


function find(){
  let arr = [];
  for(let i=0;i<1000000;i++){
      arr[i] = i*i
  }
  return function (indx){
    console.log(arr[indx])
  }
}
const closure = find();
console.time("6");
closure(6);
console.timeEnd("6") //1.1ms
console.time("12")
closure(12);
console.timeEnd("12") //0.5ms


//block scope and settimeout

// for(var i=0;i<3;i++){
//   setTimeout((i) => {
//     console.log(i)
//   }, i*1000,i);
// }


// for(var i=0;i<3;i++){
//  function inner(i){
//   setTimeout(() => {
//     console.log(i)
//   }, i*1000);
//  }
//  inner(i)
// }

//How would you use a closure to create a private counter

function counter (){
  var _counter = 0;

  function add(increment){
    _counter += increment         
  }

  function retrive(){
    return 'Counter=' + _counter
  }
  return {
    add,
    retrive
    
  }
}

const c = counter();
c.add(5);
c.add(15);
console.log(c.retrive())

//make this run only once
let view;
function like(){
  let counter = 0;
  view = "rahul";
  return function(){
    if(counter ==  0){
      console.log(view);
      counter++;
    }
    console.log('already ran')
  }
  
}

const called = like();
called();
called();
called();
called();

//or polyfill

function once(func,context){
  let ran;
  return function(){
    if(func){
      ran = func.apply(context || this,arguments);
      func = null
    }
    return ran;
  }
}

const hello = once(()=>console.log("hello"));
hello();
hello();
hello();

// Caching/Memoize function

function memoize(fn){
  let res = {};
  return function (...args){
    let argsCache = JSON.stringify(args);
    console.log(argsCache)
    if(!res[argsCache]){
      // res[argsCache] = fn(...args)
      res[argsCache] = fn.call( this,...args)
    }
    return res[argsCache]
  }
}

function clumsySquare (num1,num2){

  for(let i=0;i<100000000;i++){}
    return num1*num2
   
}

const result = memoize(clumsySquare);
console.log(result(33,33))

//Currying is a process in which a function takes one argument at a time and retuns another function expecting a argument and so on 

function f(a){
  return function(b){
    return a+b;
  }
}
console.log(f(5)(6))

//evaluate("sum")(4)(2) => 6
//evaluate("subtract")(4)(2) => 2
//evaluate("multiply")(4)(2) => 8
//evaluate("divide")(4)(2) => 2


function evaluate(operator){
  return function (a){
      return function (b){
        if(operator === 'sum') return a+b;
        else if(operator === 'subtract') return a-b;
        else if(operator === 'multiply') return a*b;
        else if(operator === 'divide') return a/b;
        else return 'Invalid Operator'
      }
  }
}

const mul = evaluate("multiply");
console.log(mul(2)(3))



//Infinite currying ---> sum(1)(2)(3).....(n)

function add(a){
  return function (b){
    if(b) return add(a+b);
    return a;
  }
}

const resp = add(5)(6)(7)(8)();
console.log(resp)


//curry implementation convert f(a,b,c,d) into f(a)(b)(c)(d)
function curry(fn){
  return function curriedFunc(...args){
    console.log(args.length)
      if(args.length >= fn.length){
        return fn(...args)
      }else{
        return function(...next){
          return curriedFunc(...args,...next)
        }
      }
  }
}

const sums = (a,b,c,d)=>a+b+c+d;
const totalSum = curry(sums);
console.log(totalSum(1)(2)(3)(4));



//what will be the output

const func = (function(a){
  delete a;            //delete is only  used to delete property from object and not a local variable
  return a;

})(5)
console.log(func) //5

//How to add dynamic property and value in obj

const property = 'firstName';
const name = "Rahul";

const user={
  // property : name;// --->wrong property : Rahul
  [property] : name //---> firstName:Rahul
}

const a = {};
const b = {key :"b"};
const d = {key :"d"};

a[b]=123;
a[c]=456;
console.log(a)
console.log(a[b])

//what be the output
console.log([..."rahul"])

//what be the output
const settins = {
  username:"rahul",
  level:20,
  health:20
}
const data = JSON.stringify(settins,["level","health"]);
console.log(data)  //{"level":20,"health":20}  ---> only the provided value in array is stringified

//What be the output
const  shape = {
  radius:10,
  diameter: function(){
    return this.radius*2;
  },
  perimiter:()=>2*Math.PI*this.radius

}

console.log(shape.diameter());//20
console.log(shape.perimiter());//Nan

//Nested destructuring
const user1={
  name:"rahul",
  age:20,
  fullName:{
    first:"rahul",
    last:"Singh"
  }
}
const {name:username} = user1
console.log(username)
const {fullName:{first}} = user1;
console.log(first)


//Output

let person = {
  name:'singh'
}
const members = [person];
person = null;
console.log(members)

//We are not changing the property of person obj we are changing the variable person but if we did perosn.name = null then it will affrct members[0]


//Whats the output
function changeAgeAndReference(person){
  person.age = 25
  person = {                   //we are reassinng the object 
    name:"rahul",
    age:30
  }
  return person
}
const person2 = {
  name:"alex",
  age:38
}

const perosnObj = changeAgeAndReference(person2);
console.log(perosnObj);
console.log(person2)




//This
let user2  = {
name:"rahul",
age:24,
// getDetails(){
//   console.log(this.name)
// }
getDetails:()=>{
  console.log(this.name) //here it will point to its parent function hence the window object
}
}

user2.getDetails();

let user3  = {
  name:"rahul",
  age:24,
 childObj:{
  newName:"Singh",
  getDetails(){
    console.log(this.newName + this.name) //This will always point to its parent object here its childobj
  }
 },
 getDetails(){
  const nestedArr = ()=>console.log(this.name); //here the nestedArr is pointing it to its normal function getdetails which refers to user3 but if you change it to arrow getDetails it will point to window
  nestedArr()
 }
  }

user3.childObj.getDetails()
user3.getDetails()


//What is the output

const obj = {
  name:"rahul",
  getName(){
  const name = "singh"
   return this.name
  }
}

console.log(obj.getName())

//What is the result of accesing its ref and why?

function makeUser(){
  return{
    name:"john",
    ref:this
  }
}

let userRes = makeUser();        //since we are calling and in  return we are getting {} this obj point to its parent obj i.e window
console.log(userRes)             // this will {name:'john',ref:windowObj}
console.log(userRes.ref.name);

//Above example
let newObj = {
  name:'rahul',
  ref:this
}

console.log(newObj.ref.name)

function makeUser1(){
  return{
    name:"john",
    ref(){
      return this
    }
  }
}
// let userR = makeUser1(); 
// console.log(userR.ref().name);


//What is the output

const user4 = {
  name:"Rohit",
  logMessage(){
    console.log(this.name)
  }
}

// setTimeout(user4.logMessage,1000) --->undefined here its using as callback rather than method hence has no reference to parent but window
// setTimeout(function(){
//   user4.logMessage()
// },1000)


//create an object calculator

// const calculator = {
//   read(){
//     this.a = Number(prompt('enter the number1:',0));
//     this.b = Number(prompt('enter the number2:',0));
//   },
//   sum(){
//     return this.a + this.b
//   },
//   mul(){
//     return this.a * this.b
//   }
// }

// console.log(calculator.read());
// console.log(calculator.sum());
// console.log(calculator.mul());

//what is the output
var length = 4;
function callbakc(){
  console.log("this",this.length)
}

const object = {
  length:5,
  method(fn){
    fn()
  }
}
object.method(callbakc);  // iT wil give 4 beacuse fn() the inner fun points to global obj;

//Modification
const object1 = {
  length:5,
  method(){
    console.log(arguments)
    // arguments[0]() // [callback] --> this then will point to parent obj which is array which is an object hence length 1
    arguments[0]() // [callback] --> this then will point to array which is an object hence length 4
  }
}
object1.method(callbakc);  // bj;
object1.method(callbakc,2,34,5);  // bj;


//implement calc
//const result1 = calc.add(10).multiply(20).subtract(30).add(10);

const calc = {
  total:0,
  add(a){
    this.total+=a
    return this             //here i am returning the whole object so that further method in chain has access to the obj
  },
  subtract(b){
    this.total-=b
    return this
  },
  multiply(c){
    this.total*=c
    return this
  }

}
const result1 = calc.add(10).multiply(20).subtract(30).add(10);

console.log(result1.total)


var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();
/*
Neither 21, nor 20, the result is undefined

It’s because JavaScript initialization is not hoisted.

(Why doesn’t it show the global value of 21? The reason is that when the function is executed, it checks that there’s a local x variable present but doesn’t yet declare it, so it won’t look for global one.)
*/

(function () {
  try {
      throw new Error();
  } catch (x) {
      var x = 1, y = 2;
      console.log(x);
  }
  console.log(x);
  console.log(y);
})();

(function () {
  var x, y; // outer and hoisted
  try {
      throw new Error();
  } catch (x /* inner */) {
      x = 1; // inner x, not the outer one
      y = 2; // there is only one y, which is in the outer scope
      console.log(x /* inner */);
  }
  console.log(x);
  console.log(y);
})();


var bi = 1;
function outer(){
   	var bi = 2
    function inner(){
        bi++;
        var bi = 3;
        console.log(bi)
    }
    inner();
}
outer();

function inner () {
  var b; // b is undefined
  b++; // b is NaN
  b = 3; // b is 3
  console.log(b); // output "3"
}
