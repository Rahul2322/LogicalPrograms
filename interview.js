function deepCopy(obj) {
  if (typeof obj == null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    const res = [];
    for (let i = 0; i < obj.length; i++) {
      res[i] = deepCopy(obj[i]);
    }
    return res;
  }
  const copyObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copyObj[key] = deepCopy(obj[key]);
    }
  }
  return copyObj;
}

let obj1 = {
  name: "john",
  age: 30,
  address: {
    street: "121322",
    city: "skjdhs",
    state: "e",
  },
};

const result = deepCopy(obj1);

result.address.street = "45635";
result.name = "rahul";

console.log(obj1.address.street, obj1.name, result.address.street, result.name);

function generateParenthesis(str, res, n, o, c) {
  if (o == n && c == n) {
    res.push(str);
    return;
  }
  if (o < n) {
    generateParenthesis(str + "(", res, n, o + 1, c);
  }

  if (o > c) {
    generateParenthesis(str + ")", res, n, o, c + 1);
  }

  return res;
}

console.log(generateParenthesis("", [], 3, 0, 0));

function subsequences(str) {
  let n = str.length;
  let indx = 0;
  let res = [];

  function generateSubsequence(str, indx, curr, res, n) {
    if (indx == n) {
      res.push(curr);
      return;
    }

    generateSubsequence(str, indx + 1, curr + str[indx], res, n);
    generateSubsequence(str, indx + 1, curr, res, n);
  }

  generateSubsequence(str, indx, "", res, n);

  return res;
}

console.log(subsequences("abc"));

function secMin(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  let secMin = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      secMin = min;
      min = arr[i];
    }
    if (arr[i] > min && arr[i] < secMin) {
      secMin = arr[i];
    }
  }
  return secMin;
}
console.log(secMin([3, 5, 8, 4, 2, 10, 9]));

function subArraySum(arr, targ) {
  //Brute Force
  //   for (let i = 1; i < arr.length; i++) {
  //     let sum = arr[i];
  //     for (j = i + 1; j <= arr.length; j++) {
  //       if (sum == targ) {
  //         return [i, j - 1];
  //       }
  //       if (sum > targ || j == arr.length) {
  //         break;
  //       }
  //       sum += arr[j];
  //     }
  //   }
  //   return -1;

  let sum = 0;
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    while (sum > targ) {
      sum -= arr[start];
      start++;
    }
    if (sum == targ) {
      return [start, i];
    }
    return [-1];
  }
}
console.log(subArraySum([1, 2, 3, 7, 5], 12));

function minJumps(arr) {
  let jumps = 0;
  let pos = 0;
  let destination = 0;
  for (let i = 0; i < arr.length; i++) {
    destination = Math.max(destination, arr[i] + i);
    if (pos == i) {
      pos = destination;
      jumps++;
    }
    if (pos >= arr.length - 1) {
      return jumps;
    }
  }
  return jumps;
}
console.log(minJumps([1, 3, 6, 3, 2, 3, 6, 8, 9, 5]));

function buySellStock(arr) {
  //Brute force
  let maxProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      maxProfit = Math.max(maxProfit, arr[j] - arr[i]);
    }
  }
  return maxProfit;
  //   let minValue = Infinity;
  //   let maxProfit = 0;
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     minValue = Math.min(minValue,arr[i])
  //     maxProfit = Math.max(maxProfit, arr[i] - minValue);
  //   }
  //   return maxProfit;
}
console.log(buySellStock([2, 4, 1, 7, 6, 9, 5]));

var a = 20;
var b = 20;
const c = 30;

const obj = {
  a: 10,
  arrow: () => {
    console.log(this.a, this.b, this.c);
  },

  regular: function () {
    console.log(this.a, this.b, this.c);
  },
};
console.log(obj.regular());
console.log(obj.arrow());

function checkBrackets(str) {
  const stack = [];
  let brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let matchingPairCount = 0;
  for (const char of str) {
    if (brackets[char]) {
      stack.push(char);
    } else if (Object.values(brackets).includes(char)) {
      if (stack.length == 0 || brackets[stack.pop] !== char) {
        return 0;
      }
      matchingPairCount++;
    }
  }
  return stack.length === 0 ? 1 + matchingPairCount : 0;
}

function longestIncreasingSubsequence(arr) {
  const sub = [];
  for (const num of arr) {
    const pos = binarySearch(sub, num);
    if (pos < sub.length) {
      sub[pos] = num;
    } else {
      sub.push(num);
    }
  }
  return sub.length;
}
function binarySearch(arr, targ) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < targ) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
const arr = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(longestIncreasingSubsequence(arr));

function twoSum(arr, targ) {
  //Brute
  // for(let i=0;i<arr.length;i++){
  //     for(let j=i+1;j<=arr.length-1;j++){
  //         if(arr[i] + arr[j] === targ){
  //             return [arr[i],arr[j]]
  //         }
  //     }
  // }
  // return -1;
  let hash = {},
  res = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = targ - arr[i];
    if (!hash[sum]) {
      hash[arr[i]] = arr[i];
    } else {
      res.push([arr[i],sum]);
    }
  }
  return res.length > 0 ? res : -1;
}
console.log(twoSum([1, 2, 4, 2, 5], 6));

function threeSum(arr, targ) {
  //Brute Force
  let res = [];
  // for(let i=0;i<arr.length-2;i++){
  //     for(let j=i+1;j<arr.length-1;j++){
  //         for(let k=j+1;k<arr.length;k++){
  //             if(arr[i]+arr[j]+arr[k] === targ){
  //                res.push([arr[i],arr[j],arr[k]])
  //             }

  //         }
  //     }
  // }
  // return res;
//   arr.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     let hash = new Set();
//     for (let j = i + 1; j < arr.length; j++) {
//       let third = targ - (arr[i] + arr[j]);
//       if (hash.has(third)) {
//         res.push([arr[i], arr[j], third]);
//       }
//       hash.add(arr[j]);
//     }
//   }
//   return res;

let n = arr.length;
arr.sort((a,b)=>a-b);
for(let i=0;i<n -2;i++){
    let l = i+1;
    let r = n-1;
    while(l<r){
        const curr_sum = arr[i]+arr[l]+arr[r];
        if(curr_sum == targ){
            res.push([arr[i],arr[l],arr[r]])
        }else if(curr_sum < targ){
            l++;
        }else{
            r--;
        }
    }
}
}
console.log(threeSum([2, 4, 1, 8, 9, 5, 3, 2], 9));

function subSort(arr) {
  let n = arr.length;
  let left = -1;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      left = i;
      break;
    }
  }
  if (left === -1) return 0;
  let right = -1;
  for (let i = n - 1; i > 0; i--) {
    if (arr[i] < arr[i - 1]) {
      right = i;
      break;
    }
  }

  let min = Math.min(...arr.splice(letf, right + 1));
  let max = Math.max(...arr.splice(letf, right + 1));

  while (left > 0 && arr[left - 1] > min) {
    left--;
  }

  while (right < n - 1 && arr[right + 1] < max) {
    right++;
  }
  return 1 + right - left;
}

function sumOfMaxAndMin(arr) {
  // Initialize min and max values
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  // Traverse the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  // Return the sum of max and min
  return max + min;
}

function countConsecutiveEle(str) {
  let count = 0;
  let maxCount = 0;
  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) === 1) {
      count++;
      maxCount = Math.max(maxCount, count + 1);
    } else {
      count = 0;
    }
  }
  return maxCount;
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function heightOfBinaryTree(root) {
  // Base case: If the tree is empty, height is -1
  if (root === null) {
    return -1;
  }

  // Recursively calculate the height of left and right subtrees
  const leftHeight = heightOfBinaryTree(root.left);
  const rightHeight = heightOfBinaryTree(root.right);

  // Height of the tree is max(leftHeight, rightHeight) + 1
  return Math.max(leftHeight, rightHeight) + 1;
}

// Example Usage
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(heightOfBinaryTree(root)); // Output: 2

function compressString(input) {
  if (input.length === 0) return "";

  let result = "";
  let count = 1;

  for (let i = 1; i < input.length; i++) {
    if (input[i] === input[i - 1]) {
      count++;
    } else {
      result += input[i - 1] + count; // Append character and its count
      count = 1; // Reset count for the new character
    }
  }

  // Append the last character and its count
  result += input[input.length - 1] + count;

  return result;
}

console.log(compressString("aaabbCCaaDD")); // Output: "a3b2C2a2D2"
console.log(compressString("aabbcc")); // Output: "a2b2c2"
console.log(compressString("")); // Output: ""

function countUniqueEle(arr) {
  if (arr.length == 0) return 0;
  let uniqueCount = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != arr[uniqueCount - 1]) {
      arr[uniqueCount] = arr[i];
      uniqueCount++;
    }
  }
  return uniqueCount;
}
const arr1 = [1, 1, 2, 3, 3, 4, 5, 5];
const uniqueCount = countUniqueEle(arr1);
console.log(arr.slice(0, uniqueCount));

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndx = i;
    for (let j = i + 1; j < n; j++) {
        if(arr[j] < arr[minIndx]){
            minIndx = j;
        }
    }
    if(minIndx !== i){
        [arr[i],arr[minIndx]] =[arr[minIndx],arr[i]]
    }
  }
  return arr;
}

function sumOfDigits(num){
    return num.split('').reduce((a,b)=>a+parseInt(b),0)
}

function sortByDigitSum(str){
    const numbers = str.split(" ");

    const sortedNumbers = numbers.sort((a,b)=>sumOfDigits(a) - sumOfDigits(b));

    return sortedNumbers.join(' ')

}
const input = "4444 102 306 508 905 77 213 667";

console.log(sortByDigitSum(input));