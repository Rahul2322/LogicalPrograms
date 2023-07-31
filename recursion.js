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

function palindrome(str){
  if(str.length <= 1){
    return true
  }else if(str[0]  !== str[str.length - 1]){
    return false
  }else{
    return palindrome(str.slice(1,str.length - 1))
  }
}

console.log(palindrome(`woaw`))


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


//Backtracking

function nQueen(n){
    const board = Array(n).fill(0).map(()=> new Array(n).fill('.'));
    const result = [];

    function isSafe(r,c){
        //If queen is in same col
        for(let i=0;i<r;i++){
            if(board[i][c] == 'Q'){
                return false
            }
        }
        //If queen is in upper-left diagonal
        for(let i=r,j=c;i>=0 && j>=0;i--,j--){
            if(board[i][j] == 'Q') return false
        }
        //If queen is in upper-right diagonal
        for(let i=r,j=c;i>=0 && j<n;i--,j++){
            if(board[i][j] == 'Q') return false
        }
    
        return true
    }
    function backtrack(row){
    if(row == n){
        result.push(board.map(r=>r.join('')));
        return;
    }

    for(let col=0;col<n;col++){
        if(isSafe(row,col)){
            board[row][col] = 'Q';
            backtrack(row+1);
            board[row][col] = '.';
        }
    }
}

backtrack(0);
return result
    
}
console.log(nQueen(4))


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

    function parenthesis(str,curr,o,c,n,res){
        if(o == n && c == n){
            res.push(curr);
            return;
        }

        //add open
        if(o < n){
            parenthesis(str,curr+'(',o+1,c,n,res);
        }

        //add close
        if(o > c){
            parenthesis(str,curr+')',o,c+1,n,res);
        }
    }

    parenthesis(str,curr,0,0,n,res)

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