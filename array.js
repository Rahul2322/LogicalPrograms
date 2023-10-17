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
function sort(arr){
    for(let i=0;i<arr.length;i++){
      if(arr[i] !== i+1) return false
    }
 return true
  }
 
  console.log(sort([1,2,6,4,5]))
  console.log(sort([1,2,3,4,5]))
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

    if (d % 2 == 0) return arr

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

console.log(removeDuplicates([1,3,6,5,4,3,4,2]))






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
    let max = Number.MIN_SAFE_INTEGER, sum = 0;
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

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum > max) {
            max = sum
        }
        if (sum < 0) {
            sum = 0;
        }
    }

    return max;


}

console.log(maxSubArrSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))



/*
Problem Statement: Given an array consisting of only 0s, 1s, and 2s. Write a program to in-place sort the array without using inbuilt sort functions. ( Expected: Single pass-O(N) and constant space)
*/

function sort(arr) {
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

    let low = 0, mid = 0, high = arr.length - 1;

    while (mid <= high) {

        if (arr[mid] == 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]]
            low++;
            mid++;
        } else if (arr[mid] == 1) {
            mid++;
        } else {
            [arr[high], arr[mid]] = [arr[mid], arr[high]]
            high--;
        }
    }

    return arr;
}

console.log(sort([2, 0, 2, 0, 1, 1, 0]))
console.log(sort([2, 0, 1]))



//Pascal Traingle

//Variation 1: Given row number r and column number c. Print the element at position (r, c) in Pascal’s triangle.

function nCr(n, r) {
    let ans = 1;
    for (let i = 0; i < r; i++) {
        ans = ans * (n - i);
        ans = ans / (i + 1);
    }
    return ans;
}

function pascalTriangle(r, c) {
    const result = nCr(r - 1, c - 1);
    console.log(result)
}

pascalTriangle(5, 3)

//Variation 2: Given the row number n. Print the n-th row of Pascal’s triangle.

function pascalTriangle1(n) {
    let previous = 1;
    console.log(previous)
    for (let i = 1; i < n; i++) {
        previous = previous * (n - i);
        previous = previous / (i);
        console.log(previous)
    }
}
pascalTriangle1(5)

//Variation 3: Given the number of rows n. Print the first n rows of Pascal’s triangle.

function pascalTriangle2(n) {
    let res = [1], previous = 1;
    for (let i = 1; i < n; i++) {
        previous = previous * (n - i);
        previous = previous / (i);
        res.push(previous)
    }
    return res
}

function generatePascalTriangle(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(pascalTriangle2(i))
    }
    return result
}
const ans = generatePascalTriangle(5)
for (let i = 0; i < ans.length; i++) {
    console.log(ans[i].join(''))
}



/*
Problem Statement: Given an array, print all the elements which are leaders. A Leader is an element that is greater than all of the elements on its right side in the array.
*/
function leaderEle(arr) {

    //brute force
    let res = [], max = arr[arr.length - 1];
    // for (let i = 0; i < arr.length ; i++) {
    //     let  leader = true;
    //     for (let j = i + 1; j < arr.length; j++) {
    //         if (arr[i] < arr[j]) {
    //             leader = false
    //             break;
    //         }

    //     }
    //     if (leader) {
    //         res.push(arr[i])
    //     } 
    // }

    //OPtimal
    res.push(arr[arr.length - 1]);
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] > max) {
            res.push(arr[i]);
            max = arr[i]
        }
    }
    return res;
}

console.log(leaderEle([10, 22, 12, 3, 0, 6, 7, 40, 24, 20]))
console.log(leaderEle([10, 22, 12, 3, 0, 6]))



function spiralMat(arr) {
    let top = 0, bottom = arr.length - 1, left = 0, right = arr[0].length - 1, res = [];

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            res.push(arr[top][i])
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            res.push(arr[i][right])
        }
        right--;

        for (let i = right; i >= left; i--) {
            res.push(arr[bottom][i])
        }
        bottom--;
        for (let i = bottom; i >= top; i--) {
            res.push(arr[i][left])
        }
        left++;


    }
    return res

}

console.log(spiralMat([[1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9]]))



function rotate90Deg(arr) {
    //brute force
    // let rotateArr = new Array(3).fill(0).map(()=> new Array(3).fill(0));
    // let n = arr.length

    // for(let i=0;i<arr.length;i++){
    //     for(let j=0;j<arr.length;j++){
    //       rotateArr[j][n-i-1] = arr[i][j]
    // }

    // }
    // return rotateArr

    //Optimal
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let temp = 0;
            temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
        }
    }
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        for (j = 0; j < Math.floor(arr[0].length / 2); j++) {
            let temp = 0;
            temp = arr[i][j]
            arr[i][j] = arr[i][arr.length - 1 - j];
            arr[i][arr.length - 1 - j] = temp;

        }
    }
    return arr
}

console.log(rotate90Deg([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))



//Hard

/*
Problem Statement: Given an array of N integers, write a program to return an element that occurs more than N/2 times in the given array. You may consider that such an element always exists in the array.
Example 1:
Input Format: N = 3, nums[] = {3,2,3}
Result: 3
Explanation: When we just count the occurrences of each number and compare with half of the size of the array, you will get 3 for the above solution. 

Example 2:
Input Format:  N = 7, nums[] = {2,2,1,1,1,2,2}

Result: 2

Explanation: After counting the number of times each element appears and comparing it with half of array size, we get 2 as result.

Example 3:
Input Format:  N = 10, nums[] = {4,4,2,4,3,4,4,3,2,4}

Result: 4
*/
function majorityEle(arr) {
    // const obj = {}; const n = Math.floor(arr.length / 2);
    // for (let key of arr) {
    //     if (obj[key]) {
    //         obj[key] += 1
    //     } else {
    //         obj[key] = 1
    //     }
    // }
    // console.log(obj)
    // for (let key in obj) {
    //     if(obj[key] > n){
    //         return key
    //     }

    // }


//Optimal Approach: Moore’s Voting Algorithm:

let count=0,ele;
const n = Math.floor(arr.length / 2);
for(let i=0;i<n;i++){
    if(count==0){
        count++;
        ele=arr[i]
    }else if(arr[i] == ele){
        count++;
    }else{
        count--;
    }
}


 // Checking if the stored element is the majority element
for(let i=0;i<n;i++){
    if(arr[i]==ele){
        count++;
    }
}

if(ele > n ){
    return ele
}

return -1
}





console.log(majorityEle([2, 2, 1, 1, 1, 2, 2]))



/*
Given an array arr of distinct elements of size N, the task is to rearrange the elements of the array in a zig-zag fashion so that the converted array should be in the below form: 

arr[0] < arr[1]  > arr[2] < arr[3] > arr[4] < . . . . arr[n-2] < arr[n-1] > arr[n]. 


Input:
N = 7
Arr[] = {4, 3, 7, 8, 6, 2, 1}
Output: 3 7 4 8 2 6 1
Explanation: 3 < 7 > 4 < 8 > 2 < 6 > 1
*/

function zigzag(arr){
    let  temp;
    for(let i=0;i<arr.length -1;i++){
        if(i%2==0 && arr[i]>arr[i+1]){
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }else if(i%2==1 && arr[i]<arr[i+1]){
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    
    return arr
}

console.log(zigzag([4, 3, 7, 8, 6, 2, 1]))


function subArraySum(arr,sum){
    let currSum =arr[0],begin=0;
    for(let i=1;i<arr.length;i++){
        while(currSum > sum && begin < i - 1){
            currSum -= arr[begin];
            begin++;
        }
        if(currSum == sum){
            return {l:begin,r:i-1}
        }

        if(i<arr.length){
            currSum+=arr[i]
        }
    }

  
}

console.log(subArraySum([1,2,3,4,5,6,7,8],12))
console.log(subArraySum([1,2,3,7,5],12))






// JavaScript program to find next smallest
// palindrome


// Returns next palindrome of a given
// number num. This function is for
// input type 2 and 3
function generateNextPalindromeUtil(num , n)
{
	var mid = parseInt(n / 2);

	// end of left side is always 'mid -1'
	var i = mid - 1;
	
	// Beginning of right side depends
	// if n is odd or even
	var j = (n % 2 == 0) ? mid : mid + 1;
	
	// A bool variable to check if copy of left
	// side to right
	// is sufficient or not
	leftsmaller = false;

	// Initially, ignore the middle same digits
	while (i >= 0 && num[i] == num[j])
	{
		i--;
		j++;
	}
	
	// Find if the middle digit(s) need to
	// be incremented or not (or copying left
	// side is not sufficient)
	if (i < 0 || num[i] < num[j])
	{
		leftsmaller = true;
	}
	
	// Copy the mirror of left to tight
	while (i >= 0)
	{
		num[j++] = num[i--];
	}
	
	// Handle the case where middle digit(s)
	// must be incremented. This part of code
	// is for CASE 1 and CASE 2.2
	if (leftsmaller)
	{
		var carry = 1;
	
		// If there are odd digits, then increment
		// the middle digit and store the carry
		if (n % 2 == 1) {
			num[mid] += 1;
			carry = parseInt(num[mid] / 10);
			num[mid] %= 10;
		}
		i = mid - 1;
		j = (n % 2 == 0 ? mid : mid + 1);
		
		// Add 1 to the rightmost digit of the left
		// side, propagate the carry towards MSB digit
		// and simultaneously copying mirror of the
		// left side to the right side.
		//when carry is zero no need to loop through till i>=0
		while (i >= 0 && carry>0)
		{
			num[i] = num[i] + carry;
			carry = parseInt(num[i] / 10);
			num[i] %= 10;
			num[j] = num[i];// copy mirror to right
			i--;
			j++;
		}

	}
}

// The function that prints next palindrome
// of a given number num with n digits.
function generateNextPalindrome(num , n)
{
	
	
	// Input type 1: All the digits are 9,
	// simply o/p 1 followed by n-1 0's
	// followed by 1.
	if (isAll9(num, n)) {
		console.log("1");
		for (i = 0; i < n - 1; i++)
        console.log("0");
		console.log("1");

	}

	// Input type 2 and 3
	else {
		generateNextPalindromeUtil(num, n);
		printarray(num);
	}
}

// A utility function to check if num has all 9s
function isAll9(num , n) {
	for (i = 0; i < n; i++)
		if (num[i] != 9)
			return false;
	return true;
}

/* Utility that prints out an array on a line */
function printarray(num) {
	for (i = 0; i < num.length; i++)
    console.log(num[i]+"\n");
}


var num = [ 9, 4, 1, 8, 7, 9, 7, 8, 3, 2, 2 ];
generateNextPalindrome(num, num.length);

// This code is contributed by 29AjayKumar


const secondLargest = (arr)=>{
    let first = -1 ,second = -1
    for(let i=0;i<arr.length;i++){
      if(arr[i] > first){
        second = first 
        first = arr[i] 
      }else if (arr[i] > second && arr[i] != first){
        second = arr[i]
      }
    }
    console.log(second);
    }
  
  secondLargest([1,3,2,4,5,19,23,18])


function checkSubstring(string,substring){
return string.toLowerCase().includes(substring.toLowerCase())
}

const string = "foo";
const substring = "oo";

console.log(checkSubstring(string,substring))


var a = 10;
let  b = 20;
const c = 30;

const obj1 = {
    a : 10,
    arrow:()=>{
        console.log(this.a,this.b,this.c)
    },

    regular: function(){
        console.log(this.a,this.b,this.c)
    }


}

// function closure (){
//     let arr = []
//     for(let i=0;i<10000;i++){
//         arr[i] = i*i
//     }

//     return function(index){
//         console.log(arr[index])
//     }
// }
// const res = closure();
// res("6")
// console.time('6')
// console.log(first)
// console.time('6')


var obj  = {
    a:{
        b:{
            c:12
        }
    },
   findPath: function(path) {
        const keys = path.split('.');
        let current = this;
      
        for (let key of keys) {
          if (current[key] === undefined) {
            return undefined;
          }
          current = current[key];
        }
      
        return current;
      }
      
}

console.log(obj.findPath('a.b.c'))


//1.Syntax
function square(num){
    return num*num
}

const squareArr = (num)=>{
    return num*num
}

//2.Implicit "return" keyword
const squareArrow = (num)=> num*num

//3.arguments

function sum(){
    console.log(arguments) // will gives the all arg spass
    //   '0': 1,
//   '1': 2,
//   '2': 3
// }

}
sum(1,2,3)

const sumArr = ()=>console.log(arguments)  //arguments is not defined
sumArr(1,2,3)

//4.- "this" keyword
let user = {
    username:"rahul",
    arr:()=>{
        console.log("Subscribe to"+this.username )
    },
    regular:function(){
        console.log("Subscribe to"+this.username )
    }
}

class Animal {
    constructor = (name, numOfLegs) => {
      this.name = name
      this.numOfLegs = numOfLegs
    }
    
    sayName = () => {
    console.log(`My name is ${this.name}`)
  }
  }
  
  // Uncaught SyntaxError: Classes may not have a field named 'constructor'

//   Because arrow functions involve expressions that are assigned variables, JavaScript now sees constructor as a field. And in classes, you cannot have a field named constructor as that is a reserved name.

// But, we can use arrow functions for the methods in the class without getting errors. For example:

//6.5 Arrow functions cannot be accessed before initialization
//Hoisting is a concept where a variable or function is lifted to the top of its global or local scope before the whole code is executed. This makes it possible for such a variable/function to be accessed before initialization. Here's a function example:

printName()

console.log("hello")

function printName() {
  console.log("i am dillion")
}

// i am dillion
// hello


// As you can see here, we called printName before it was actually declared in the code. But we don't get any errors. printName() is executed (logging "i am dillion" to the console) before console.log("hello").

// What happens here is hoisting.

// The printName function is raised to the top of the global scope (the scope it is declared in) before the whole code is executed, thereby making it possible to execute the function earlier.

// But not all kinds of functions can be accessed before initialization. All functions and variables in JavaScript are hoisted, but only declared functions can be accessed before initialization.

// Here's an example with an arrow function:

printName()

console.log("hello")

const printName = () => {
  console.log("i am dillion")
}

// ReferenceError: Cannot access 'printName' before initialization
// Running this code, you get an error: ReferenceError: Cannot access 'printName' before initialization.

// As we saw in point 4, printName is not a declared function. It is a variable, declared with const which is assigned a function expression. Variables declared with let and const are hoisted, but they cannot be accessed before the line they are initialized.

// Let's say we use var for our arrow function:

printName()

console.log("hello")

var printName = () => {
  console.log("i am dillion")
}

// TypeError: printName is not a function
//Here, we have declared the printName variable with var. The error we get now is TypeError: printName is not a function. The reason for this is that variables declared with var are hoisted and accessible, but they have a default value of undefined. So attempting to access printName before the line it was initialized with the function expression is interpreted as undefined(), and as you know, "undefined is not a function".


//What will be logged to console?

let count = 0;
(function(){
    if(count == 0){
        let count = 1;
        console.log(count)
    }
    console.log(count)
})()


//write a function that allow you to do this

var addSix = createBase(6);

addSix(5);
addSix(6);

function createBase(x){
    return function(y){
        return x+y
    }
}

//Time optimization

function find(indx){
    let arr = [];
    for(let i=0;i<1000000;i++){
        arr[i] = i*i
    }
    console.log(arr[indx])
}

console.time("6");
find(6);
console.timeEnd("6") //81.74 ms
console.time("12")
find(12);
console.timeEnd("12") //76.98 ms
