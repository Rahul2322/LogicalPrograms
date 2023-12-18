const prime = (n)=>{
  for(let i=2;i*i<=n;i++){
    if(n%i == 0){
      return false
    }
  }
  return `${n} is a prime number`
}

console.log(prime(12))


/*
Create the function fridayTheThirteenths that accepts a start year and an end year (inclusive), and returns all of the dates where the 13th of a month lands on a Friday in the given range of year(s).

The return value should be a string where each date is seperated by a space. The date should be formatted like 9/13/2014 where months do not have leading zeroes and are separated with forward slashes.

If no end year is given, only return friday the thirteenths during the start year.
*/

function getDaysInMonth(year, month) {
  return new Date(year, month);
}



function fridayTheThirteenths(startYear,EndYear){


while (startYear <= EndYear){
 
  for(let i =0;i<12;i++){
      const date = new Date(startYear,i,13);
      const currentYear = date.getFullYear();
      const currentMonth = date.getMonth() + 1;
      const currentDate = date.getDate();
    if(date.getDay() == 5 ) console.log(`${currentMonth}/${currentDate}/${currentYear}`)
    }
  startYear+= 1

}

}
// fridayTheThirteenths(1999,2000)

/*
Your task is to write a function named do_math that receives a single argument. This argument is a string that contains multiple whitespace delimited numbers. Each number has a single alphabet letter somewhere within it.
Example : "24z6 1x23 y369 89a 900b"
As shown above, this alphabet letter can appear anywhere within the number. You have to extract the letters and sort the numbers according to their corresponding letters.
Example : "24z6 1x23 y369 89a 900b" will become 89 900 123 369 246 (ordered according to the alphabet letter)
Here comes the difficult part, now you have to do a series of computations on the numbers you have extracted.
The sequence of computations are + - * /. Basic math rules do NOT apply, you have to do each computation in exactly this order.
This has to work for any size of numbers sent in (after division, go back to addition, etc).
In the case of duplicate alphabet letters, you have to arrange them according to the number that appeared first in the input string.
Remember to also round the final answer to the nearest integer.
Examples :
"24z6 1x23 y369 89a 900b" = 89 + 900 - 123 * 369 / 246 = 1299
"24z6 1z23 y369 89z 900b" = 900 + 369 - 246 * 123 / 89 = 1414
"10a 90x 14b 78u 45a 7b 34y" = 10 + 45 - 14 * 7 / 78 + 90 - 34 = 60


*/



function do_math(str){
  const months = str.split(" ")
  const opr = ['+','-','*','/'];
  const res = months.sort((a,b)=>{
  const x = a.match(/[a-z]/g);
  const y = b.match(/[a-z]/g);
  if(x < y ){
    return -1;
  }
  if(x > y ){
    return 1;
  }
})
.map(ele=>ele.replace(ele.match(/[a-z]/g),''))
let resp = ((Number(res[0])+Number(res[1])-Number(res[2]))*Number(res[3]))/Number(res[4])
return resp
}

// console.log(do_math("24z6 1x23 y369 89a 900b"));


function missingLetter(arr){
 for(let i=0;i<arr.length;i++){
  if((arr[i+1].charCodeAt(arr[i+1]) - arr[i].charCodeAt(arr[i])) > 1){
    const num = arr[i+1].charCodeAt(arr[i+1])
    console.log(num);
    return String.fromCharCode(num -1)
  }
 }
}

// console.log(missingLetter(['a','b','c','d','f']));
// console.log(missingLetter(['A','C','D','E','F']));



const missing_numbers = (arr)=>{
  let newArr = [];
  for(let i =0;i<arr.length - 1;i++){
    if(arr[i+1] < 0  && arr[i] < 0  && (arr[i+1] - arr[i]) > 1){
      for(let j = arr[i] + 1;j<arr[i+1];j++){
        newArr.push(j)
      }
    }

    if(arr[i+1] > 0  && arr[i] < 0 && (arr[i+1] - arr[i]) > 1){
      for(let j = arr[i] + 1;j < arr[i+1];j++){
        newArr.push(j)
      }

    }
  
    if(arr[i+1] > 0  && arr[i] > 0  && (arr[i+1] - arr[i]) > 1){
      for(let j = arr[i] + 1;j < arr[i+1];j++){
        newArr.push(j)
      }
    }
  }
  return newArr
}

console.log(missing_numbers([-3,-2,1,5]))


const factorial=(x)=>{
  if (x == 0) {
      return 1;
  }
  else {
      return x * factorial(x - 1);
  }
}

console.log('factorial', factorial(5))



function findMissing(arr){
  let i;
  let temp = [];
  for (i = 0; i <= arr.length; i++) {
            temp[i] = 0;
        }
 
        for (i = 0; i < arr.length; i++) {
            temp[arr[i] - 1] = 1;
        }
 
        // let ans = 0;
        // for (i = 0; i <=arr.length; i++) {
        //     if (temp[i] == 0)
        //         ans = i + 1;
        // }
        // console.log(ans);
        console.log(temp)
}

findMissing([ 1, 3, 7, 5, 6, 2 ])


const findMissingNumber = (arr) => {
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i - 1] !== i) {
      return i;
    }
  }
}
// const arr = [1, 2, 3, 4, 5, 6, 8, 10];
// console.log(findMissingNumber(arr));
// console.log(findMissingNumber([ 1, 3, 7, 5, 6, 2 ]));

let arr = [1, 2, 4, 6, 3, 7, 8];
let n = arr.length+1
// console.log(n)
let sum = n*(n+1);
sum = sum/2;
for(let i=0;i<n-1;i++)
{
    sum = sum - arr[i]
}

console.log(sum)

// WAP to reverse an integer without converting it to a string, without using any builtin methods. 

function reverseNumb(num){
let result = 0;
while(num>0){
    rem = num % 10;
    num = Math.floor(num/10);
    result = result * 10 + rem
}
return result
}
console.log(reverseNumb(4567))


function palindrome(str){
  let compare_string = '';
  for(let i=str.length-1;i>=0;i--){
    compare_string+=str[i]
  }
  console.log(compare_string)
  return str === compare_string
}

console.log(palindrome('mom'))


function frequenctOfCharacter(str){
  let result='',string = str.toLowerCase(),freqObj = {}
  for(let char of string){
    freqObj[char] = freqObj[char] ? freqObj[char] + 1 : 1
  }
 for(let char in freqObj){
  result+=char + freqObj[char]
 }
 return result
}

console.log(frequenctOfCharacter('Engineer'))






//Swap Values without using any variable a=10, b=12

function swapNum(a,b){
  let x= a+b;
  let y = x-b;
  x = x - y
   return `swap numbers are a=${x} and b=${y}`
}
console.log(swapNum(10,5))


//logic for anagram program with its time complexity.
const checkAnagram = (a,b)=>{
  let str = ''
  if(a.length !== b.length) false
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if(a[i] === b[j]){
        str+=b[j]
      }
      
    }
    
  }
 
  return a === str
}

const result = checkAnagram('abcd','acdb')
console.log(result)
const checkAnagarm1 = (str1,str2)=>{
  let obj1={},obj2={};
  if(str1.length !== str2.length){
    return false;
  }

  for(let i = 0; i < str1.length; i++){
    if(!obj1[str1[i]]){
      obj1[str1[i]] = 1;
    }else{
      obj1[str1[i]]++;
    }
}

for(let i = 0; i < str2.length; i++){
  if(!obj2[str1[i]]){
    obj2[str1[i]] = 1;
  }else{
    obj2[str1[i]]++;
  }
}

for(let i = 0; i < str1.length; i++){
  if(obj1[str1[i]] !== obj2[str2[i]]){
     return false;
  } 
}

return true;
}

console.log(checkAnagarm1('abcd','aadb'))


//WAP to find missing elements from the array
const numArr = [3, 4, 7, 8];

const missing = [];

for (let i=0;i<numArr.length ; i++) {
  let x = numArr[i] - numArr[i - 1];
  console.log('cxx',x)
  let diff = 1;
  while (diff < x) {
    missing.push(numArr[i - 1] + diff);
    diff++;
  }
}

console.log(missing);


const fibonacci = (n)=>{
  let a = 0,b=1,sum;
  let arr = [a,b]
  for(let i=2;i<n;i++){
   sum = a+b; 
   a =b
   b = sum;
   arr.push(sum)
  }
  return arr
  }
  
  console.log(fibonacci(5));


  //with recurssion
  function fibonacci1(num) {
    if (num <= 1) {
      return [0, 1];
    } else {
      let fibArr = fibonacci(num - 1);
      fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
      return fibArr;
    }
  }
  
  console.log(fibonacci1(5));


  //WAP with 2 different logic, to find all duplicate number in an array
  const duplicateNumber = (arr)=>{
  //   newArr = [];
  //   for (let i = 0; i <  arr.length - 1; i++) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[i] === arr[j]) {
  //        newArr.push(arr[i]);
  //        }
  //     }
  //  }
  //return newArr

  //Using set 
  const seen = new Set();
  const duplicate = [];
  for(let ele of arr){
    if(seen.has(ele)){
      duplicate.push(ele)
    }else{
      seen.add(ele)
    }
  }
  
    return duplicate
  }
  
const arry = [1, 2, 1, 3, 4, 3, 5];

const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)
const duplicateElements = toFindDuplicates(arry)
console.log(duplicateElements);


console.log(duplicateNumber([1, 2, 1, 3, 4, 3, 5]))




function isPrime(n){
let count =0;
for(let i=1;i<=n;i++){
  if(n%i==0){
    count++;
  }
}
return count == 2 ? true :false
}


console.log(isPrime(5))

function sample(arr){
  for(let i=0;i<arr.length;i++){
    setTimeout(function(){
      console.log(arr[i])
    },i*1000)
  }
}




function count(){
  let count =0;
  function inner(){
    count++;
    console.log('first')
  }
  return inner
}

const counter = count();
console.log(counter());
console.log(counter());
console.log(counter());



let obj1 = {
  name:'john',
  age:30,
  address:{
    street:'121322',
    city:"skjdhs",
    state:'e'
  }
}
function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
      return obj;
  }

  if (Array.isArray(obj)) {
      const copyArr = [];
      for (let i = 0; i < obj.length; i++) {
          copyArr[i] = deepCopy(obj[i]);
      }
      return copyArr;
  }

  const copyObj = {};
  for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
          copyObj[key] = deepCopy(obj[key]);
      }
  }
  return copyObj;
}

const obj2 = deepCopy(obj1);
obj2.address.city = 'LosAnege'

function sumOfIndexes(arr, endIndex) {
  let sum = 0;
  for (let i = 0; i <= endIndex; i++) {
      sum += i;
  }
  return sum;
}

console.log(sumOfIndexes([1,2,3],2))

let x = {
  a:1,
  toString:function(){
    return this.a++;
  }
}
console.log(x,'x',x == 1,x==2,x.toString())
if(x == 1){
  console.log('helo')
}



