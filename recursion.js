//visualize using drawing stack diargram and recursive tree 
function num(n) {
    if (n == 0) {
        return 0;
    }
    console.log('before', n)   // order of n is diff
    num(n - 1);
    console.log('after', n)  // orer of n is diff
}

num(5)

// function fibo(n,a,b){
//     // if(n > 0) {
//     // //console.log(a)           // normal sequence
//     //  fibo(n-1,b,a+b);
//     //   console.log(a)        //revrse order print
     
//     // }

   
    
//     }
    
// fibo(5,0,1)



function fibo1(n){
    if(n<=1) return n;
    //recursive call
    return  fibo1(n-1) + fibo1(n-2)
}

for(let i=0;i<10;i++){
    fibo1(i)
}


// function pattern(n, arr, present, inc) {
//     arr.push(present)
//     if (inc) {
//         if (present == n) {
//             return;
//         } else {

//             pattern(n, arr, present + 5, true);
//         }
//     } else {
//         if (present - 5 > 0) {
//             pattern(n, arr, present - 5, false)
//         } else {
//             pattern(n, arr, present - 5, true)
//         }

//     }
//     return arr

// }


//Video link : https://youtu.be/01vLYmAEhcc

//visualize using drawing stack diargram and recursive tree 
function pattern(arr, present) {
    if(present <=0){
      arr.push(present)
      return ;
    }
    arr.push(present)
    pattern(arr,present - 5);
    arr.push(present)
    
    return arr;
}

console.log(pattern(new Array,16))

//Write a program to print pattern where A[0] = n in which A[i+1] = n-5 until A[i]>0,after that A[i+1] = n + 5 repeat untit A[i]=n
// when n = 16 output = [16,11,6,1,-4,1,6,11,16]
// when n = 10 output = [10,5,0,5,10]


//Given an array sorted in ascending order.Check if k is present in arr
function findEle(arr,n,k,l,h){
    // let l=0,h=arr.length - 1;
    // while(l<=h){
    //     let mid = Math.floor((l+h)/2);
    //     if(arr[mid] > k){
    //         h = mid - 1
    //     }else if(arr[mid] < k){
    //         l = mid + 1;
    //     }else{
    //         return 1;
    //     }
   // return -1
    // }

while(l>h){
    return -1;
}
mid = Math.floor((l+h)/2);
if(arr[mid] > k){
    findEle(arr,n,k,l,mid -1);
}else if(arr[mid] < k){
    findEle(arr,n,k,mid+1,h);
}else {
    return 1
}

}



// console.log(findEle([1,2,3,4,6,7,9,14,98],14))
const arr = [1,2,3,4,6,7,9,14,98];
const n = arr.length
const res = findEle(arr,n,14,0,n-1);
console.log(res)



function reverseStr(str){
    if(str.length == 0){
        return str
    }

    return str[str.length -1 ] + reverseStr(str.slice(0,str.length -1))

}

console.log(reverseStr('geeks'))

function palindrome(str,indx){
 if(indx>=Math.floor(str.length/2)) return true;
 if(str[indx]!=str[str.length - indx-1])return false;
 return palindrome(str,indx+1)
}

console.log(palindrome(`woow`,0))


//find all possible subsequences of string in lexotropically sorted order
//ex str = 'abc'
//sol: 'a ab abc ac b bc c' there is 7 and one '' total 8
// 2^n = possiblities where n is length of str
const possibleSeq = (str,indx,n,curr,res)=>{
    if(indx == n){
        res.push(curr)
        return;
    }

    //include
    possibleSeq(str,indx+1,n,curr+str[indx],res)

    //exclude
    possibleSeq(str,indx+1,n,curr,res)
    
    return res.sort()
}
const str = 'abc';
const len = str.length;
console.log(possibleSeq(str,0,len,'',new Array))


function subsets(res,indx,n,curr,result){
  if(indx == n){
    result.push([...curr]);
    return;
  }
  curr.push(res[indx])
  subsets(res,indx+1,n,curr,result)
  curr.pop()
  subsets(res,indx+1,n,curr,result)

  return result.sort()
}
const arr1 = [1,2,3] 
console.log(subsets(arr1,0,arr1.length,new Array,new Array))


function permutations(str,indx,n,arr){
   if(indx == n - 1){
    arr.push(str.join(''));
    return ;
   }

   for(let i = indx;i<n;i++){
       temp = str[indx];
       str[indx] = str[i];
       str[i] = temp;
   // [str[i],str[indx]] = [str[indx],str[i]];
        permutations(str,indx+1,n,arr)
   // [str[i],str[indx]] = [str[indx],str[i]];
        temp = str[indx];
        str[indx] = str[i];
        str[i] = temp;
   }

   return arr
}

const str2 = 'ABC'
console.log(permutations(str2.split(''),0,str2.length,new Array))


function permutationsWithSpaces(str,indx){
    const res = [];
    let curr = str[0];
    function possiblities(str,curr,res,indx){
        if(indx == str.length){
            res.push(curr);
            return;
        }
        //Include spaces
        possiblities(str,curr+" "+str[indx],res,indx+1)

        //excllude Spaces
        possiblities(str,curr+str[indx],res,indx+1)
    }

  possiblities(str,curr,res,indx) 

  return res
}

let str3 = 'ABC'
console.log(permutationsWithSpaces(str3,1))


function generateParenthesis(n){
    let res = [];
    let curr = ''

    function parenthesis(curr,o,c,n,res){
        if(o == n && c == n){
            res.push(curr);
            return;
        }

        //add open
        if(o < n){
            parenthesis(curr+'(',o+1,c,n,res);
        }

        //add close
        if(o > c){
            parenthesis(curr+')',o,c+1,n,res);
        }
    }

    parenthesis(curr,0,0,n,res)

    return res;

}

console.log(generateParenthesis(3))


function possibleWordsFromPhoneDigits(m,arr){
    let res = [];
    function helper(str,indx,n,m,res){
        if(indx == n){
            res.push(str);
            return;
        }
        // console.log(m.get(arr[indx]))
        for(let i=0;i< m.get(arr[indx]).length;i++){
            let val =  m.get(arr[indx])[i];
             helper(str + val,indx+1,n,m,res)
        }
    }
    helper('',0,arr.length,m,res)

    return res;
}

const m = new Map();
m.set(2 , ['a','b','c'])
m.set(3 , ['d','e','f'])
m.set(4 , ['g','h','i'])
m.set(5 , ['j','k','l'])
m.set(6 , ['m','n','o'])
m.set(7 , ['p','q','r','s'])
m.set(8 , ['t','u','v'])
m.set(9 , ['w','x','y','z'])

console.log(possibleWordsFromPhoneDigits(m,[2,3,4]))



//Print sums of all subsets 

function subsetSum(arr,indx,n,res,currSum){
    if(indx == n){
        res.push(currSum);
        return;
    }

    //Include
    subsetSum(arr,indx+1,n,res,currSum+arr[indx])

    //Exclude
    subsetSum(arr,indx+1,n,res,currSum)

    return res;
}

console.log(subsetSum([2,3,1],0,3,new Array,0))



//solve sudoko

const isSafe = (board,row,col,num)=>{
    for(let i=0;i<board.length;i++){
      if(  board[i][col] == num){
        return false;
      }
    }
    for(let i=0;i<board.length;i++){
        if(  board[row][i] == num){
            return false;
          }
    }

    //grid
    let sr = (Math.floor(row/3))*3; 
    let sc = (Math.floor(col/3))*3; 

    for(let i=sr;i<sr+3;i++){
        for(let j = sc;j<sc+3;j++){
            if(board[i][j] == num){
                return false
            }
        }
    }
return true;
}
 
const helper = (board,row,col)=>{
    if(row === board.length){
        return true
    }

    let nrow = 0;
    let ncol = 0;

    if(col == board.length){
        nrow=row + 1;
        ncol =0;
    }else{
        nrow = row;
        ncol = col + 1;
    }

    if(board[row][col] !== 0){
        if(helper(board,nrow,ncol)){
            return true;
        }
    }else{
        for(let i=1;i<=9;i++){
           if( isSafe(board,row,col,i)){
                board[row][col] = i
               if( helper(board,nrow,ncol)){
                 return true;
               }else{
                board[row][col] = 0;
               }
           }
        }
    }
    return false;
}

const solveSudoko = (board)=>{
  const res =  helper(board,0,0);
  console.log(board)
}
const sudokoArr = [[3, 0 ,6, 5, 0, 8, 4, 0, 0],
[5, 2, 0, 0, 0, 0, 0, 0, 0],
[0 ,8 ,7 ,0 ,0 ,0 ,0 ,3 ,1 ],
[0 ,0, 3, 0, 1, 0, 0, 8, 0],
[9, 0, 0, 8, 6, 3, 0, 0, 5],
[0 ,5 ,0 ,0 ,9 ,0 ,6, 0, 0],
[1 ,3, 0, 0, 0, 0, 2, 5, 0],
[0, 0, 0, 0, 0, 0, 0, 7, 4],
[0 ,0, 5, 2, 0, 6, 3, 0, 0]]
console.log(solveSudoko(sudokoArr))



const myAtoi = (str,n)=>{
    // let result = 0,sign = 1,i=0;
    // if(str[0] == '-') {
    //     sign =-1 ;
    //     i++;
    // }
    // for(;i<str.length;++i){
    //     result = result*10 + str[i].charCodeAt() - '0'.charCodeAt(); 
    // }
    // return sign * result

    //-------------------------

   // return parseInt(str)

    //-------------------------------
    
    if (n == 1)
    {
        return str[0].charCodeAt() - '0'.charCodeAt();
    }

    // If more than 1 digits, recur for (n-1),
    // multiply result with 10 and add last digit
    return (10 * myAtoi(str, n - 1) + str[n - 1].charCodeAt() - '0'.charCodeAt());
}

console.log(myAtoi('9993',4))


function pow(x,n){
    if(n === 1){
        return x;
    }
    return x * pow(x,n-1)
}

console.log(pow(2,10))


function generateBinaryString(n){
    let res = [];
    let curr = '';
     function binary(n,curr,indx){
       if(curr.length ==  n){
          res.push(curr);
          return;
       }
       if(curr[indx - 1 ] == '0'){
          binary(n,curr+'0',indx+1);
          binary(n,curr+'1',indx+1)
       }else if(curr[indx -1 ] == '1'){
          binary(n,curr+'0',indx+1)
       }else{
          binary(n,curr+'0',indx+1);
          binary(n,curr+'1',indx+1);
       }
 
     }
      binary(n,curr,0);
      return res.join('|');
  }
 
  console.log(generateBinaryString(4))

/*
Given a digit ‘d’ and a range [L, R] where L < R, print all good numbers in given range that don’t contain digit ‘d’. A number is good if its every digit is larger than the sum of digits which are on the right side of that digit. For example 9620 is good number because 2 > 0, 6 > 2+0 and 9 > 6+2+0.

Input:  L = 410, R = 520, d = 3
Output: 410 420 421 510 520 
All the numbers in output are good (every digit is more
than sum of digits on right of it) and don't have digit 3.

Input:  L = 410, R = 520, d = 1
Output: 420 430 520 
All the numbers in output are good (every digit is more
than sum of digits on right of it) and don't have digit 1.
*/
function goodNumbers(a,b,digit){
    
    
    let res=[];
   
    function helper(a,b,digit){
        let sum =0;
        let num = a.toString().split('');
        if( a > b){
            return ;
        }
        if(a.toString().includes(digit.toString())){
            a++;
        }
    for(let i=0;i<num.length - 1;i++){
        for(let j=i+1;j<num.length;j++){
            sum+= parseInt(num[j])
        }
        if(parseInt(num[i]) > sum) {
            sum = 0;
        }
   }
    if(sum == 0){
        res.push(a);
    }
    
    helper(a+1,b,digit); 
   }

   helper(a,b,digit);

    return res;
}

console.log(goodNumbers(840,850,6))

function isPrime(n){
    let count =0;
    for(let i=1;i<=n;i++){
      if(n%i==0){
        count++;
      }
    }
    return count == 2 ? true :false
    }

var countGoodNumbers = function(n) {
    let start = Math.pow(10,n-1);
    let end = Math.pow(10,n) - 1;
    console.log(start,end)
    let res = 0;
    for(let i=start;i<=end;i++){
        let a= i.toString();
        let even=true,prime=true;
        for(let j = 0;j<a.length;j++){
            var digit = parseInt(a[j],10);
            if(j%2 == 0 && digit%2 !=0){
                even = false;
                break; 
            }else if( j % 2 !=0 && !isPrime(digit) ){
                prime = false;
                break;
            }
           
        }
        // console.log(digit,even,prime)
       
        if(even && prime){
            // console.log(a)
            res++;
        }
    }
    return res
};

console.log(countGoodNumbers(4))



function subsequencesSumAllPoss(n,arr,indx,res,sum,k){
    if(indx == n ){
       if(sum == k){
        console.log('res',res)
       }
       
       return;
    }
    //Include
     res.push(arr[indx]);
     sum+=arr[indx]
     subsequencesSumAllPoss(n,arr,indx+1,res,sum,k);
     sum-=arr[indx]
     res.pop(arr[indx]);
     
    //Exclude
    subsequencesSumAllPoss(n,arr,indx+1,res,sum,k)

}

function subsequencesSum(n,arr,indx,res,sum,k){
    if(indx == n ){
       if(sum == k){
        console.log(res,'res')
       return true
       }   
       return false;
    }
    //Include
     res.push(arr[indx]);
     sum+=arr[indx]
     if(subsequencesSum(n,arr,indx+1,res,sum,k) == true){
        return true
     }
     sum-=arr[indx]
     res.pop(arr[indx]);
     
    //Exclude
    if(subsequencesSum(n,arr,indx+1,res,sum,k) == true){
        return true;
    }
    return false
}

function subsequencesSumCount(n,arr,indx,sum,k){
    if(indx == n ){
       if(sum == k){
       return 1
       }   
       return 0;
    }
    //Include
     sum+=arr[indx]
     let l = subsequencesSumCount(n,arr,indx+1,sum,k)
     sum-=arr[indx]
     
    //Exclude
     let r = subsequencesSumCount(n,arr,indx+1,sum,k);

     return l+r;
}

function helperSum(n,k,arr){
let res = [];
// subsequencesSumAllPoss(n,arr,0,res,0,k);
// subsequencesSum(n,arr,0,res,0,k) // print only one subsequence

 return subsequencesSumCount(n,arr,0,0,k) //print count of subsequence
}
console.log(helperSum(3,2,[1,2,1]))


/*Given an array of distinct integers and a target, you have to return the list of all unique combinations where the chosen numbers sum to target. You may return the combinations in any order
Example 1:

Input: array = [2,3,6,7], target = 7

Output: [[2,2,3],[7]]
*/


function combinationSum_I(arr,res,indx,k,n,ans){
    if(indx == n){
        if(k == 0){
         ans.push([...res])
        }
        return;
    }
    if(arr[indx] <= k){
    res.push(arr[indx])
    combinationSum_I(arr,res,indx,k - arr[indx],n,ans);
    res.pop(arr[indx]);
    }
    combinationSum_I(arr,res,indx+1,k,n,ans);
    return ans;
}


/*
Problem Statement: Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target. Each number in candidates may only be used once in the combination.
Note: The solution set must not contain duplicate combinations.
Input: candidates = [10,1,2,7,6,1,5], target = 8

Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]]

//take u forward algorithm check youtube video

//Another approach is you can use subsequencesSum function its just you then need to filter dupliate arrays 
*/
function combinationSum_II(arr,indx,targ,n,res,ans){
    if(targ == 0){
        ans.push([...res]);
        return;
     }
    for(let i = indx;i<n;i++){
        if( i > indx && (arr[i] == arr[i -1])) continue;
        if(arr[i] > targ) break;

        res.push(arr[i]);
        combinationSum_II(arr,i+1,targ - arr[i],n,res,ans);
        res.pop()
    }
return ans;
}

function result(arr,n,k){
let res =[],ans=[];
// const result = combinationSum_I(arr,res,0,k,n,ans);
const sortedArr = arr.sort((a,b)=>a-b);

const result = combinationSum_II(sortedArr,0,k,n,res,ans);
console.log('result',result)
}
// result([2,3,6,7],4,7);
result([1,1,1,2,2],5,4);
result([10,1,2,7,6,1,5],7,8);


/*Given an array print all the sum of the subset generated from it, in the increasing order.
Input: N = 3, arr[] = {5,2,1}

Output: 0,1,2,3,5,6,7,8

[ [], [1], [2], [2,1], [5], [5,1], [5,2],[5,2,1]]*/

function sumOfAllSubsets(arr,res,sum,indx,ans){
if(indx == arr.length ){
    console.log('sum',sum)
    ans.push(sum)
    return;
}

//Pick 
res.push(arr[indx])
sum+= arr[indx]
sumOfAllSubsets(arr,res,sum,indx+1,ans);
sum-=arr[indx];
res.pop();
sumOfAllSubsets(arr,res,sum,indx+1,ans)
return ans.sort();

}
/*Given an array of integers that may contain duplicates the task is to return all possible subsets. Return only unique subsets and they can be in any order.
Input: array[] = [1,2,2]

Output: [ [ ],[1],[1,2],[1,2,2],[2],[2,2] ]
Important to understand concept 
*/
function sumOfAllSubsetsUnique(arr,res,indx,ans){
    ans.push([...res])
    for(let i = indx ;i < arr.length ;i++){
        if( i!=indx && arr[i] == arr[i -1]) continue;
        res.push(arr[i]);
        sumOfAllSubsetsUnique(arr,res,i+1,ans);
        res.pop()
    }
    return ans;
    }

function sumResult(arr){
    let res = [],ans=[];
//    return sumOfAllSubsets(arr,res,0,0,ans);
let sortedArr = arr.sort((a,b)=>a-b);
// console.log(sortedArr)
   return sumOfAllSubsetsUnique(sortedArr,res,0,ans);
}

// console.log(sumResult([5,2,1]));
console.log(sumResult([1,2,2]));




/*
You are given a string s, partition it in such a way that every substring is a palindrome. Return all such palindromic partitions of s.
Example 1:

Input: s = “aab”

Output: [ ["a","a","b"], ["aa","b"] ]	

Explanation: The first  answer is generated by  making three partitions. The second answer is generated by making two partitions.
*/

function partitionPalindrome(str,indx,res,newString){
    if(indx === str.length ){
        res.push([...newString]);
        return;
    }
    for(let i=indx;i<str.length;i++){
        if(isPalindrome(str,indx,i)){
        newString.push(str.substring(indx,i+1));
        partitionPalindrome(str,i+1,res,newString);
        newString.pop();
        }

    }

    return res;
}

function isPalindrome(str,start,end){
    while(start <= end){
        if(str.charAt(start) !== str.charAt(end)) return false;
        start++;
        end--;
    }
       return true
}

console.log(partitionPalindrome('aab',0,new Array,new Array));

const isQSafe = (row,col,board,n)=>{
    let duprow = row;
    let dupcol = col;
    //check upper diagonal
    while(row >= 0 && col >= 0){
      if(board[row][col] == 'Q') return false;
      row--;
      col--;
    }
   row = duprow;
   col = dupcol;
    //Check row 
    while(col >= 0){
       if(board[row][col] == 'Q') return false;
       col--
    }
    row = duprow;
    col = dupcol;
    //check lower diagonal
    while( row<n && col >=0){
       if(board[row][col] == 'Q') return false;
       row++;
       col--;
    }
 
    return true;
 }
 
 
 const nQueen = (n)=>{
    const board = new Array(n).fill(0).map(()=>new Array(n).fill('.'));
    let res = []
    const solve = (board,res,col,n)=>{
       if(col === n){
        res.push(board);
        return;
       }
       for(let row = 0;row<n ; row++){
          if(isQSafe(row,col,board,n)){
             board[row][col] = 'Q';
             solve(board,res,col+1,n);
             board[row][col] = '.';
          }
       }
       
    }
    solve(board,res,0,n);
    return res;
 }
 
 console.log(nQueen(4))


 /*Consider a rat placed at (0, 0) in a square matrix of order N * N. It has to reach the destination at (N – 1, N – 1). Find all possible paths that the rat can take to reach from source to destination. The directions in which the rat can move are ‘U'(up), ‘D'(down), ‘L’ (left), ‘R’ (right). Value 0 at a cell in the matrix represents that it is blocked and the rat cannot move to it while value 1 at a cell in the matrix represents that rat can travel through it.

Note: In a path, no cell can be visited more than one time.

Print the answer in lexicographical(sorted) order
Example 1:

Input:
N = 4
m[][] = {{1, 0, 0, 0},
        {1, 1, 0, 1}, 
        {1, 1, 0, 0},
        {0, 1, 1, 1}}

Output: DDRDRR DRDDRR
  Time Complexity: O(4^(m*n)),
  Space Complexity:  O(m*n)
 */

// function solveMaze(i,j,arr,n,ans,str,vis){
//     //base condn
//     if(i === n -1 && j === n - 1){
//         ans.push(str);
//         return;
//     }

//     //downward
//     if(i+1 < n && vis[i+1][j] == 0 && arr[i+1][j] == 1){
//         vis[i][j] = 1 ;
//         solveMaze(i+1,j,arr,n,ans,str+"D",vis);
//         vis[i][j] = 0;
//     }

//     //leftward
//     if( j-1 >= 0 && vis[i][j - 1] == 0 && arr[i][j - 1] == 1){
//         vis[i][j] = 1 ;
//         solveMaze(i,j -1,arr,n,ans,str+"L",vis);
//         vis[i][j] = 0;
//     }

//     //rightward
//     if( j+1 < n && vis[i][j + 1] == 0 && arr[i][j + 1] == 1){
//         vis[i][j] = 1 ;
//         solveMaze(i,j + 1,arr,n,ans,str+"R",vis);
//         vis[i][j] = 0;
//     }

//     //upward
//     if(i-1 >=0 && vis[i-1][j] == 0 && arr[i-1][j] == 1){
//         vis[i][j] = 1 ;
//         solveMaze(i-1,j,arr,n,ans,str+"U",vis);
//         vis[i][j] = 0;
//     }
// }


//Another approach
function solveMaze(i,j,arr,n,ans,str,vis,diri,dirj){
    if(i === n - 1 && j === n - 1){
                ans.push(str);
                return;
            }
    let string = 'DLRU';
    for(let indx=0;indx< 4;indx++){
        let nexti = i + diri[indx];
        let nextj = j + dirj[indx];
        if(nexti >=0 && nextj >=0 && nexti < n && nextj < n && vis[nexti][nextj] == 0 && arr[nexti][nextj] == 1 ){
            vis[i][j] = 1;
            solveMaze(nexti,nextj,arr,n,ans,str+string.charAt(indx),vis,diri,dirj);
            vis[i][j] = 0;
        }
    }

}
function mazeSol(arr,n){
    let ans = [];
    const vis  =  Array(n).fill(0).map(()=>Array(n).fill(0)); 
    const diri = [1,0,0,-1];
    const dirj = [0,-1,1,0];
    // if(arr[0][0] == 1 )solveMaze(0,0,arr,n,ans,"",vis);
    if(arr[0][0] == 1 )solveMaze(0,0,arr,n,ans,"",vis,diri,dirj);
    return ans;
}

console.log(mazeSol([ [ 1, 0, 0, 0 ], [ 1, 1, 0, 1 ], [ 1, 1, 0, 0 ], [ 0, 1, 1, 1 ] ],4))

const isValid = (board,row,col,c)=>{
    for(let i=0;i<9;i++){
        if(board[i][col] == c){
            return false
        }
        if(board[row][i] == c){
            return false
        }

        if(board[3 * Math.floor((row/3) + Math.floor(i/3))][3 * Math.floor((col/3)) + i%3] == c){
            return false
        }
    }
    return true;
}
const solveSudoko1 = (board)=>{
    for(let i = 0; i < 9; i++){
        for(let j = 0;j < 9; j++){
            if(board[i][j] == 0){
                for(let c=1; c <= 9;c++){
                    if(isValid(board,i,j,c)){
                        board[i][j] = c;
                        if(solveSudoko1(board)) return true;
                        else board[i][j] = 0
                    }
                }
                return false;
            }
        }
    }
    return true;
}

const main = (board)=>{
    const result = solveSudoko1(board);
    return board;
}

console.log(main(sudokoArr))