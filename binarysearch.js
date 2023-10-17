//Given a sorted array of N integers and an integer x, write a program to find the lower bound of x.
//LowerBound ---> The index at which value must be greater than or equal to target
/*
Example 1:
Input Format: N = 4, arr[] = {1,2,2,3}, x = 2
Result: 1
Explanation: Index 1 is the smallest index such that arr[1] >= x.

Example 2:
Input Format: N = 5, arr[] = {3,5,8,15,19}, x = 9
Result: 3
Explanation: Index 3 is the smallest index such that arr[3] >= x.
*/

function lowerBound (arr,targ){
    let l = 0,h = arr.length -1,ans = arr.length -1
    
    while(l <= h){
        const mid = Math.floor((l+h)/2);
        if(arr[mid] >= targ){
            ans = mid
            h = mid -1
        }else {
               l = mid + 1; 
           }
    }
   
    return ans
   }
   const arr = [3,5,8,15,19]
   console.log(lowerBound(arr,9))


/*
Given a sorted array of N integers and an integer x, write a program to find the upper bound of x.
Example 1:
Input Format: N = 4, arr[] = {1,2,2,3}, x = 2
Result: 3
Explanation: Index 3 is the smallest index such that arr[3] > x.

Example 2:
Input Format: N = 6, arr[] = {3,5,8,9,15,19}, x = 9
Result: 4
Explanation: Index 4 is the smallest index such that arr[4] > x.
*/

const upperBound = (arr,tar)=>{
    let l =0,h=arr.length - 1,ans = arr.length;
    while(l<=h){
        const mid = Math.floor((l+h)/2);
        if(arr[mid] > tar){
            ans = mid ;
            h= mid - 1
        }else {
            l = mid + 1
        }
    }
    return ans;
}
console.log(upperBound(arr,16));

const searchInsert = (arr,tar)=>{
    let l = 0,h = arr.length -1,ans = arr.length -1
    
    while(l <= h){
        const mid = Math.floor((l+h)/2);
        if(arr[mid] >= tar  ){
            ans = mid
            h = mid -1
        }else {
               l = mid + 1; 
           }
    }
    return ans
}

// floor -The floor of x is the largest element in the array which is smaller than or equal to x, largest in arr <=x
//ceil - The ceiling of x is the smallest element in the array greater than or equal to x, largest in arr >=x
const floorAndCeil = (arr,targ)=>{

    function floor(arr,targ){
        let low = 0,high=arr.length-1,ans =-1
        while(low<=high){
            const mid = Math.floor((low+high)/2);
            if(arr[mid] <= targ){
                ans = mid;
                low=mid+1
            }else{
                high = mid - 1; 
            }
        }
        return ans
    }


    function ceil(arr,targ){
        let low = 0,high=arr.length-1,ans =arr.length
        while(low<=high){
            const mid = Math.floor((low+high)/2);
            if(arr[mid] >= targ){
                ans = mid;
                high=mid-1
            }else{
                low = mid + 1; 
            }
        }
        return ans
    }

    const floor1 = floor(arr,targ);
    const ceil1 = ceil(arr,targ);

    return {floor:arr[floor1],ceil:arr[ceil1]}
}

console.log(floorAndCeil([3, 4, 4, 7, 8, 10],5));
console.log(floorAndCeil([3, 4, 4, 7, 8, 10],8));


//Given a sorted array of N integers, write a program to find the index of the last occurrence of the target key. If the target is not found then return -1.

function firstAndLastOccurance (arr,targ){

    //using lower and upper bound
//    const lb = lowerBound(arr,targ);
//    if(lb == arr.length || arr[lb] !=targ){
//     return {first:-1,last:-1}
//    }

//    return {
//     first:lb,
//     last:upperBound(arr,targ) - 1
//    }

//first occurance
 function firstOccurance(arr,targ){
    let l=0,h=arr.length-1,first=-1
    while(l<=h){
        const mid = Math.floor((l+h)/2);
        if(arr[mid] == targ){
            first = mid,
            h = mid - 1
        }else if(arr[mid] < targ){
            l = mid + 1
        }else{
            h = mid - 1;
        }
    }
    return first
 }     

//last occurance
function lastOccurance(arr,targ){
    let l=0,h=arr.length-1,last=-1
    while(l<=h){
        const mid = Math.floor((l+h)/2);
        if(arr[mid] == targ){
            last = mid,
            l = mid + 1
        }else if(arr[mid] < targ){
            l = mid + 1
        }else{
            h = mid - 1;
        }
    }
    return last
 }

 return {
    first:firstOccurance(arr,targ),
    last:lastOccurance(arr,targ)
 }

   }
   const arr1 = [3,4,13,13,15,16,20,40,40]
   console.log(firstAndLastOccurance(arr1,40))



   //You are given a sorted array containing N integers and a number X, you have to find the occurrences of X in the given array.
   /*
   Example 1:
Input: N = 7,  X = 3 , array[] = {2, 2 , 3 , 3 , 3 , 3 , 4}
Output: 4
Explanation: 3 is occurring 4 times in 
the given array so it is our answer.

Example 2:
Input: N = 8,  X = 2 , array[] = {1, 1, 2, 2, 2, 2, 2, 3}
Output: 5
Explanation: 2 is occurring 5 times in the given array so it is our answer.
   */

const count = (arr,targ)=>{
    function firstOccurance (arr){
        let l=0,h=arr.length-1,first=-1;
        while(l<=h){
            const mid = Math.floor((l+h)/2)
            if(arr[mid] == targ){
               first = mid
                h = mid - 1
            }else if(arr[mid] < targ){
                l = mid + 1
            }else{
                h=mid-1
            }
        }
        return first
    }

    function lastOccurance (arr){
        let l=0,h=arr.length-1,last=-1;
        while(l<=h){
            const mid = Math.floor((l+h)/2)
            if(arr[mid] == targ){
               last = mid
                l = mid + 1
            }else if(arr[mid] < targ){
                l = mid + 1
            }else{
                h=mid-1
            }
        }
        return last
    }

    let first = firstOccurance(arr);
    let last = lastOccurance(arr);
     if(first == -1) return 0;
     return last - first + 1
}

console.log(count([2, 4, 6, 8, 8, 8, 8,11, 13],8))
console.log(count([1, 1, 2, 2, 2, 2, 2, 3],1))


//Given an integer array arr of size N, sorted in ascending order (with distinct values) and a target value k. Now the array is rotated at some pivot point unknown to you. Find the index at which k is present and if k is not present return -1.

/*
Example 1:
Input Format: arr = [4,5,6,7,0,1,2,3], k = 0
Result: 4
Explanation: Here, the target is 0. We can see that 0 is present in the given rotated sorted array, nums. Thus, we get output as 4, which is the index at which 0 is present in the array.

Example 2:
Input Format: arr = [4,5,6,7,0,1,2], k = 3
Result: -1
Explanation: Here, the target is 3. Since 3 is not present in the given rotated sorted array. Thus, we get the output as -1.
*/
const search = (arr,targ)=>{
    let l=0,h=arr.length-1;
    while(l<=h){
        const mid = Math.floor((l+h)/2);
        if(arr[mid] == targ){
            return  mid;

        }
         //if left part is sorted: 
        if(arr[l] <= arr[mid]){                     
            if(arr[l] <= targ && targ <=arr[mid]){
                h = mid - 1
            }else {
                l = mid + 1
            }
        }else {//if right part is sorted:
            if(arr[h]>= targ && targ >=arr[mid]){         
                l= mid + 1
            }else{
                h = mid - 1
            }
        }
    }
return  - 1
}

console.log(search([4,5,6,7,0,1,2,3],0))
console.log(search([7, 8, 9, 1, 2, 3, 4, 5, 6],1))


/*
 Given an integer array arr of size N, sorted in ascending order (may contain duplicate values) and a target value k. Now the array is rotated at some pivot point unknown to you. Return True if k is present and otherwise, return False. 

 Example 1:
Input Format: arr = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6], k = 3
Result: True
Explanation: The element 3 is present in the array. So, the answer is True.

Example 2:
Input Format: arr = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6], k = 10
Result: False
Explanation: The element 10 is not present in the array. So, the answer is False.
*/
const search1 = (arr,targ)=>{
    let l=0,h=arr.length-1;
    while(l<=h){
        const mid = Math.floor((l+h)/2);
        if(arr[mid] == targ){
            return true;

        }else if(arr[l] == arr [mid] == arr[h]){          //Edge case:
            l = mid + 1;
            h = mid - 1;
            continue;

        }else if(arr[l] <= arr[mid]){                      //left half is sorted 
            if(arr[l] <= targ && targ <=arr[mid]){
                h = mid - 1
            }else {
                l = mid + 1
            }
        }else {
            if(arr[h]>= targ && targ >=arr[mid]){         //right half is sorted
                l= mid + 1
            }else{
                h = mid - 1
            }
        }
    }
return  false
}

console.log(search1([7, 8, 1, 2, 3, 3, 3, 4, 5, 6],3))
console.log(search1([7, 8, 1, 2, 3, 3, 3, 4, 5, 6],10))



/*
Problem Statement: You have been given a non-empty grid ‘mat’ with ‘n’ rows and ‘m’ columns consisting of only 0s and 1s. All the rows are sorted in ascending order.
Your task is to find the index of the row with the maximum number of ones.
*/

function rowWithMax1s(matrix,n,m){
let cnt_max = 0,index = -1;
for(let i=0;i<n;i++){
    console.log('lower',lowerBound(matrix[i],1))
    let cnt_ones = m - lowerBound(matrix[i],1)
    if(cnt_ones > cnt_max){
        cnt_max = cnt_ones;
        index = i
    }
}
return index
}
const matrix = [ [0, 0, 1], [1, 1, 1],[0, 0, 0]];
const n = 3, m = 3;
console.log(rowWithMax1s(matrix,n,m))





function binarySearch(nums, target) {
    let n = nums.length; // size of the array
    let low = 0, high = n - 1;

    // Perform the steps:
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) return true;
        else if (target > nums[mid]) low = mid + 1;
        else high = mid - 1;
    }
    return false;
}


function searchMatrix(matrix, target) {
    let n = matrix.length;
    let m = matrix[0].length;

    for (let i = 0; i < n; i++) {
        if (matrix[i][0] <= target && target <= matrix[i][m - 1]) {
            return binarySearch(matrix[i], target);
        }
    }
    return false;
}
let matrix1 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
let result = searchMatrix(matrix1, 8);
console.log(result ? "true" : "false");



  
  
 
  
  
  
  