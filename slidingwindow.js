/**
 * 
There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints.

In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

Your score is the sum of the points of the cards you have taken.

Given the integer array cardPoints and the integer k, return the maximum score you can obtain.
 */

function maxScore(cardPoints, k) {
  let leftSum = 0,
    rightSum = 0,
    max = 0,
    n = cardPoints.length;
  for (let i = 0; i < k; i++) {
    leftSum += cardPoints[i];
  }
  max = leftSum;
  let rightIndx = n - 1;
  for (let i = k - 1; i >= 0; i--) {
    leftSum -= cardPoints[i];
    rightSum += cardPoints[rightIndx];
    rightIndx = rightIndx - 1;
    max = Math.max(max, leftSum + rightSum);
  }

  return max;
}

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));

//Problem Statement: Given a String, find the length of longest substring without any repeating character.

/**
 * 
Example 1:

Input: s = ”abcabcbb”

Output: 3

Explanation: The answer is abc with length of 3.

Example 2:

Input: s = ”bbbbb”

Output: 1

Explanation: The answer is b with length of 1 units.
 */

function longestSubstring(str) {
  let n = str.length;
  let max = 0;
  //Brute Force

  // for (let i = 0; i < n; i++) {
  //     let  hash = {};
  //   for (let j = i; j < n; j++) {
  //       if(hash[str[j]])break;
  //       else{
  //         hash[str[j]] = 1;
  //         max = Math.max(max,j-i+1);
  //       }
  //   }
  // }
  // return max;

  //Optimal Solution 2
  // let l = 0;
  // r = 0;
  // let hash = {};
  // while (r < n) {
  //   if (hash[str[r]] !== undefined) {
  //     if (hash[str[r]] >= l) {
  //       l = hash[str[r]] + 1;
  //     }
  //   }
  //   max = Math.max(max, r - l + 1);
  //   hash[str[r]] = r;
  //   r++;
  // }
  // return max;

  //Optimal another method

  let mpp = new Array(256).fill(-1); // Initialize an array of size 256 with -1
  let left = 0,
    right = 0;
  let len = 0;

  while (right < n) {
    if (mpp[str.charCodeAt(right)] !== -1) {
      left = Math.max(mpp[str.charCodeAt(right)] + 1, left);
    }

    mpp[str.charCodeAt(right)] = right;

    len = Math.max(len, right - left + 1);
    right++;
  }

  return len;
}

console.log(longestSubstring("abcabcbb"));

/**
 * 
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 */

function longestOnes(nums, k) {
  let n = nums.length,
    l = 0,
    r = 0,
    zeroes = 0,
    max = 0;
  //Brute force

  for (let i = 0; i < n; i++) {
    let zeroCount = 0;
    for (let j = i; j < n; j++) {
      if (nums[j] == 0) zeroCount++;
      if (zeroCount > k) break;
      max = Math.max(max, j - i + 1);
    }
  }

  //Optimal solution 1

  // while (r < n) {
  //   if (nums[r] == 0) zeroes++;
  //   while (zeroes > k) {
  //     if (nums[l] == 0) zeroes--;
  //     l++;
  //   }
  //   if(zeroes <= k){
  //     max = Math.max(max,r-l+1);
  //   }
  //   r++;
  // }

  //Optimal Solution 2
  // while (r < n) {
  //   if (nums[r] === 0) zeroes++;
  //   if (zeroes > k) {
  //     if (nums[l] == 0) {
  //       zeroes--;
  //     }
  //     l++;
  //   }
  //   if (zeroes <= k) {
  //     max = Math.max(max, r - l + 1);
  //   }
  //   r++;
  // }

  return max;
}

console.log(
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
);

/**
 * 
 * @param {*} arr 
 * @param {*} k 
 * @returns 
 * You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array of arr[], where arr[i]  is the type of fruit the ith tree produces.
You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow :

You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of the baskets.
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.

Given the integer array of fruits, return the maximum number of fruits you can pick.
Input: arr[]= [2, 1, 2]
Output: 3
Explanation: We can pick one fruit from all three trees. Please note that the type of fruits is same in the 1st and 3rd baskets.

Input: arr[] = [3, 1, 2, 2, 2, 2]
Output: 5
Explanation: It's optimal to pick from the last 5 trees. Please note that we do not pick the first basket as we would have to stop at thrid tree which would result in only 2 fruits collected.
 */

function totalFruits(arr) {
  let n = arr.length;
  let max = 0;
  let hashMap = new Map();
  let l = 0,
    r = 0;
  //Brute Force
  // for(let i=0;i<n;i++){
  //   let hashMap = new Map();
  //   for(let j=i;j<n;j++){
  //     hashMap.set(arr[j],(hashMap.get(arr[j]) || 0) + 1);
  //     if(hashMap.size <= 2){
  //       max = Math.max(max,j-i+1);
  //     }else{
  //       break;
  //     }
  //   }
  // }

  //Optimal Solution

  // while( r < n){
  //   hashMap.set(arr[r],(hashMap.get(arr[r]) || 0) + 1);
  //   if(hashMap.size > 2){
  //     while(hashMap.size > 2){
  //       l++;
  //       hashMap.set(arr[l],hashMap.get(arr[l]) - 1);
  //       if(hashMap.get(arr[l]) === 0){
  //         hashMap.delete(arr[l]);
  //       }
  //     }

  //   }

  //   if(hashMap.size <= 2){
  //     max = Math.max(max,r-l+1)
  //   }

  //   r++
  // }

  //Optimal Solution

  while (r < n) {
    hashMap.set(arr[r], (hashMap.get(arr[r]) || 0) + 1);
    if (hashMap.size > 2) {
      hashMap.set(arr[l], hashMap.get(arr[l]) - 1);
      if (hashMap.get(arr[l]) == 0) {
        hashMap.delete(arr[l]);
      }
      l++;
    }
    if (hashMap.size <= 2) {
      max = Math.max(max, r - l + 1);
    }
    r++;
  }

  return max;
}

console.log(totalFruits([3, 1, 2, 2, 2, 2]), "totalfruits");

/**
 * 
 Given a string s, you need to print the size of the longest possible substring with exactly k unique characters. If no possible substring exists, print -1.
 */

function longestKSubstr(arr, k) {
  let n = arr.length;
  let max = 0;
  let l = 0,
    r = 0,
    hashMap = new Map();

  //Brute force
  // for(let i=0;i<n;i++){
  //   let hashMap = new Map();
  //   for(let j=i;j<n;j++){
  //     hashMap.set(arr[j],(hashMap.get(arr[j]) || 0) + 1);
  //     if(hashMap.size <=k){
  //       max= Math.max(max,j-i+1);
  //     }else{
  //       break;
  //     }
  //   }
  // }

  //Optimal Solution
  // while (r < n) {
  //   hashMap.set(arr[r], (hashMap.get(arr[r]) || 0) + 1);

  //   while (hashMap.size > k) {
  //     hashMap.set(arr[l], hashMap.get(arr[l]) - 1);
  //     if (hashMap.get(arr[l]) === 0) {
  //       hashMap.delete(arr[l]);
  //     }
  //     l++;
  //   }

  //   if (hashMap.size <= k) {
  //     max = Math.max(max, r - l + 1);
  //   }
  //   r++;
  // }


  //OPtimal Solution

  while (r < n) {
    hashMap.set(arr[r], (hashMap.get(arr[r]) || 0) + 1);

    if (hashMap.size > k) {
      hashMap.set(arr[l], hashMap.get(arr[l]) - 1);
      if (hashMap.get(arr[l]) === 0) {
        hashMap.delete(arr[l]);
      }
      l++;
    }

    if (hashMap.size <= k) {
      max = Math.max(max, r - l + 1);
    }
    r++;
  }
  return max;
}

console.log(longestKSubstr("aabacbebebe", 3), "longestKSub");

function binarySubarrayWithSum(arr, k) {
  function atMost(k) {
    let l = 0,
      r = 0,
      sum = 0,
      count = 0;

    if (k < 0) return 0;

    while (r < arr.length) {
      sum += arr[r];

      while (sum > k) {
        sum -= arr[l];
        l++;
      }
      count += r - l + 1;
      r++;
    }

    return count;
  }
  return atMost(k) - atMost(k - 1);
}

// console.log(binarySubarrayWithSum([1, 0, 1, 0, 1], 2));

function countGoodSubarrays(arr, k) {
  function atMost(k) {
    let l = 0,
      r = 0,
      sum = 0,
      count = 0;

    if (k < 0) return 0;

    while (r < arr.length) {
      sum += arr[r] % 2;

      while (sum > k) {
        sum -= arr[l] % 2;
        l++;
      }
      count += r - l + 1;
      r++;
    }

    return count;
  }
  return atMost(k) - atMost(k - 1);
}
// console.log(countGoodSubarrays([1, 1, 2, 1, 1], 3));
// console.log(countGoodSubarrays([1, 2, 1, 2, 3], 2));

function largestSubarray(arr) {
  const n = arr.length;
  let maxSize = -1,
    startIndex = -1,
    endIndex = -1,
    sum = 0;
  const map = new Map();
  //   for (let i = 0; i < n - 1; i++) {
  //     sum = arr[i] == 0 ? -1 : 1;
  //     for (let j = i + 1; j < n; j++) {
  //         if(arr[j] === 0){
  //             sum+=-1
  //         }else{
  //             sum+=1
  //         }
  //         if(sum == 0 && maxSize < j - i +1){
  //             maxSize = j - i + 1;
  //             startIndex = i;
  //         }
  //     }

  //   }
  //   endIndex = maxSize + startIndex - 1;

  //   console.log(startIndex + " " + endIndex);

  //   return maxSize

  for (let i = 0; i < n; i++) {
    arr[i] = arr[i] === 0 ? -1 : 1;
  }

  for (let i = 0; i < n; i++) {
    sum += arr[i];

    // If the sum is 0, the subarray starts from index 0 to i
    if (sum === 0) {
      maxSize = i + 1;
      startIndex = 0;
      endIndex = i;
    }

    // If the sum is already in the map, check the subarray length
    if (map.has(sum)) {
      const prevIndex = map.get(sum);
      if (i - prevIndex > maxSize) {
        maxSize = i - prevIndex;
        startIndex = prevIndex + 1;
        endIndex = i;
      }
    } else {
      // Store the first occurrence of the sum
      map.set(sum, i);
    }
  }

  return maxSize;
}

console.log(largestSubarray([1, 0, 1, 1, 1, 0, 0]));
console.log(largestSubarray([1, 1, 1, 1]));

function removeAdjacentDuplicates(arr) {
  let res = [];
  if (arr.length < 2) return arr;
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === arr[i + 1]) {
      while (i < arr.length && arr[i] === arr[i + 1]) {
        i++;
      }
    } else {
      res.push(arr[i]);
      i++;
    }
  }
  return JSON.stringify(res) === JSON.stringify(arr)
    ? res
    : removeAdjacentDuplicates(res);
}

console.log(removeAdjacentDuplicates([1, 2, 2, 3, 4, 5, 5]));
