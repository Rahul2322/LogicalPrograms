/*
Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not. If the array is sorted then return True, Else return False.
*/

// function sortedArray(arr){
//  for(let i=0;i<arr.length;i++){
//  for(let j=i+1;j<arr.length;j++){
//   if(arr[i] > arr[j]) return false
//  }
//  }
//   return true
// }


// Time Complexity: O(N^2)
//Space Complexity: O(1)
function sortedArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true
}
// Time Complexity: O(N)
//Space Complexity: O(1)
const res = sortedArray([1, 2, 3, 4, 5])
console.log(res)


//Find pairs whose sum = 100;

function getPairsCount(arr, sum) {
    let result = []
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == sum) {
                result.push(`${arr[i]},${arr[j]}`)
            }
        }
    }
    console.log(result)
    return result.length
}
console.log(getPairsCount([80, 60, 10, 50, 30, 100, 0, 50], 100))



function secondLargestAndSecondSmallest(arr) {
    let max = -1, min = -1, small = Infinity, smallest = Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            min = max
            max = arr[i]
        } else if (arr[i] < max && arr[i] > min) {
            min = arr[i]
        } else if (arr[i] < small) {
            smallest = small
            small = arr[i]
        } else if (arr[i] > small && arr[i] < smallest) {
            smallest = arr[i]
        }
    }
    return {
        min,
        smallest
    }
}

secondLargestAndSecondSmallest([3, 5, 8, 1, 4, 2, 10, 9])
//  Time Complexity: O(N), We do two linear traversals in our array

//  Space Complexity: O(1)


//Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.

function consecutiveOnes(arr) {
    let count = 0, max = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            count++
        } else {
            max > count ? max : max = count
            count = 0
        }

    }
    return count > max ? count : max
}

console.log(consecutiveOnes([1, 1, 0, 1, 1, 1, 0]))
console.log(consecutiveOnes([1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1]))



// You are given an array of integers, your task is to move all the zeros in the array to the end of the array and move non-negative integers to the front by maintaining their orderYou are given an array of integers, your task is to move all the zeros in the array to the end of the array and move non-negative integers to the front by maintaining their order

// function moveZeros(arr){
//   let zeroArr = [],nonZeroArr=[];
//   for(let i=0;i<arr.length;i++){
//     if(arr[i] !== 0){
//       nonZeroArr.push(arr[i])
//     }else{
//       zeroArr.push(arr[i])
//     }
//   }
//   return [...nonZeroArr,...zeroArr]
// }



//Note:Best algo using pointer source:take2forward
function moveZeros(arr) {
    let j = -1;
    // Place the pointer j
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            j = i;
            break;
        }
    }

    // No non-zero elements
    if (j == -1) return arr;

    // Move the pointers i and j and swap accordingly
    for (let i = j + 1; i < arr.length; i++) {
        if (arr[i] != 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }
    return arr

}

// Time Complexity: O(N), N = size of the array.
// Reason: We have used 2 loops and using those loops, we are basically traversing the array once.

// Space Complexity: O(1) as we are not using any extra space to solve this problem

console.log(moveZeros([1, 0, 2, 3, 0, 4, 0, 1]))




//Given an array of N integers and an integer D, left rotate the array by D place.

const leftRotateArray = (arr, d) => {
    //First reverse the sub array 

    if (arr.length % 2 == 0) return arr

    for (let i = 0; i < Math.floor(d / 2); i++) {
        temp = arr[i];
        arr[i] = arr[d - i - 1];
        arr[d - i - 1] = temp
    }
    let n = arr.length - 1
    //then reverse the whole array
    for (let i = d; i < n; i++) {
        temp = arr[i];
        arr[i] = arr[n];
        arr[n] = temp;
        n--;
    }

    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
    return arr;
}
console.log(leftRotateArray([1, 2, 3, 4, 5, 6, 7], 2))


// Given an integer array sorted in non-decreasing order, remove the duplicates in place such that each unique element appears only once. The relative order of the elements should be kept the same


const removeDuplicates = (arr) => {
    //1
    // const result = arr.filter((ele,i,arr)=> arr.indexOf(ele) === i)

    //2.
    // let result = [];
    // for(let ele of arr){
    //   if(!result.includes(ele)){
    //     result.push(ele)
    //   }
    // }
    //return result

    //3.
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j];
        }
    }
    for (let k = 0; k < i + 1; k++) {
        console.log(arr[k])
    }

    // Time Complexity: O(N)

    // Space Complexity: O(1)

}

// console.log(removeDuplicates([1,3,6,5,4,3,4,2]))






function missingNumber(a, N) {
    const hash = new Array(N + 1).fill(0); // hash array

    // storing the frequencies:
    for (let i = 0; i < N - 1; i++) {
        hash[a[i]]++;
    }

    // checking the frequencies for numbers 1 to N:
    for (let i = 1; i <= N; i++) {
        if (hash[i] === 0) {
            return i;
        }
    }

    // The following line will never execute.
    // It is just to avoid warnings.
    return -1;
}

function main() {
    const N = 5;
    const a = [1, 2, 4, 5];
    const ans = missingNumber(a, N);
    console.log("The missing number is:", ans);
}

// main();





// setTimeout(function run(){
//   console.log('Running');
//   setTimeout(run,1000)
// },1000);




const numberThatAppearsOnce = (arr) => {
    const result = {};
    for (let key of arr) {
        if (result[key]) {
            result[key]++
        } else {
            result[key] = 1
        }

    }
    // console.log(result)
    for (let key in result) {
        if (result[key] == 1) {

            return key
        }
    }
}

console.log(numberThatAppearsOnce([4, 1, 2, 1, 2]))



// Problem Statement: Find the intersection of two sorted arrays. OR in other words, Given 2 sorted arrays, find all the elements which occur in both the arrays.

// Example 1:
// Input: 
// A: [1 2 3 3 4 5 6]
// , B: [3 3 5]
// Output: 3,3,5

const intersectionArrays = (arr1, arr2) => {
    let j = 0
    const largestArr = arr1.length > arr2.length ? arr1 : arr2;
    const smallestArr = arr1.length < arr2.length ? arr1 : arr2;
    for (let i = 0; i < largestArr.length; i++) {
        if (largestArr[i] == smallestArr[j]) {
            console.log(smallestArr[j])
            j++
        }

    }

}

// intersectionArrays([1 ,2, 3, 3, 4, 5, 6],[3 ,3 ,5])
// intersectionArrays([3,5],[1 ,2 ,3 ,3 ,4 ,5, 6])



// Example 1:
// Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 14
// Result: YES (for 1st variant)
//        [1, 3] (for 2nd variant)

const arraySum = (arr, target) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                return { x: i, y: j }
            }
        }
    }
}

console.log(arraySum([2, 6, 5, 8, 11], 14))








//Problem Statement: Given an array of N + 1 size, where each element is between 1 and N. Assuming there is only one duplicate number, your task is to find the duplicate number.
function duplicate(arr) {
    // let sortArr = arr.sort();
    // for(let i=0;i<arr.length;i++){
    //     if(sortArr[i] !== i+1){
    //         return sortArr[i]
    //     }
    // }
    // return false;

    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] = obj[arr[i]] + 1
        } else {
            obj[arr[i]] = 1
        }
    }
    for (let key in obj) {
        if (obj[key] > 1) return obj[key]
    }
    return false

}
console.log(duplicate([3, 1, 3, 4, 2]));



/*
Kadane’s Algorithm : Maximum Subarray Sum in an Array
Problem Statement: Given an integer array arr, find the contiguous subarray (containing at least one number) which
has the largest sum and returns its sum and prints the subarray.
*/

function maxSubArrSum(arr) {
    let max = Number.MIN_SAFE_INTEGER,sum =0;
    // for (let i = 0; i < arr.length; i++) {
     //   let sum = 0;
    //     for (let j = i; j < arr.length; j++) {
    //        
    //        
    //             sum+=arr[j];
    //        
    //         max = Math.max(sum,max);
    //     }
    // }
    // return max;

// -------------------------------------------------------------

for(let i=0;i<arr.length;i++){
    sum +=arr[i];
    if(sum > max){
        max = sum
    }
    if(sum < 0){
        sum = 0;
    }
}

return max;

   
}

console.log(maxSubArrSum([ -2, 1, -3, 4, -1, 2, 1, -5, 4]))



/*
Problem Statement: Given an array consisting of only 0s, 1s, and 2s. Write a program to in-place sort the array without using inbuilt sort functions. ( Expected: Single pass-O(N) and constant space)
*/

function sort(arr){
//     let zero = 0,one =0,two=0;
//          for(let j=0;j<arr.length;j++){
//              if(arr[j] == 0) zero++
//              else if(arr[j] == 1) one++
//              else two++
//      }
//  for(let i=0;i<zero;i++){
//      arr[i] = 0
//  }
//  for(let i=zero;i<zero+one;i++){
//      arr[i] = 1
//  }
//  for(let i=zero+one;i<arr.length;i++){
//      arr[i] = 2
//  }
//      return arr

//Optimal --dutch flag algorithm  //take 2 forward explanation

let low=0,mid=0,high=arr.length -1;

while(mid <= high){

    if(arr[mid] == 0){
        [arr[low],arr[mid]] = [arr[mid],arr[low]]
        low++;
        mid++;
    }else if(arr[mid] == 1){
        mid++;
    }else{
        [arr[high],arr[mid]] = [arr[mid],arr[high]]
        high--;
    }
}

return arr;
 }
 
 console.log(sort([2,0,2,0,1,1,0]))
 console.log(sort([2,0,1]))