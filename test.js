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