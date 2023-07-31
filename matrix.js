/*
Given an m*n 2D matrix and an integer, write a program to find if the given integer exists in the matrix.

Given matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row
*/

const arr = [[1, 3, 5, 7],
[10, 11, 16, 20],
[23, 30, 34, 60]]
const twodMatrix = (arr, target) => {
    //  const resArr = [];
    //  for(let i=0;i<arr.length;i++){
    //     resArr.push(...arr[i])
    //  }

    //  for(let i=0;i<resArr.length;i++){
    //     if(resArr[i] == target) return true
    //  }

    //  return false


    // binary search 
    let lo = 0, n = arr.length, m = arr[0].length, hi = m * n - 1, mid;
    while (lo <= hi) {
        mid = Math.floor((lo + hi) / 2);
        console.log(mid)
        if (arr[Math.floor(mid / m)][mid % m] == target) return true;
        if (arr[Math.floor(mid / m)][mid % m] < target) lo = mid + 1;
        else hi = mid - 1;
    }

    return false
}

console.log(twodMatrix(arr, 3))




const matrix = (mat) => {
    const arr = []
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] == 0) {
                arr.push({ i: i, j: j })
            }
        }
    }
    console.log(arr)
    for (let key of arr) {
        for (let k = 0; k < mat.length; k++) {
            mat[key.i][k] = 0
        }
        for (let m = 0; m < mat.length; m++) {
            console.log(key.j, m)
            mat[m][key.j] = 0
        }
    }
    return mat
}

// console.log(matrix([[1,1,1],[1,0,1],[1,1,1]]))
// console.log(matrix([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))
console.log(matrix([[0, 1, 1, 0], [1, 1, 0, 1], [1, 1, 1, 1]]))


const setZero = (mat) => {
    let row_flag = false, col_flag = false
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (i == 0 && mat[i][j] == 0) row_flag = true;
            if (j == 0 && mat[i][j] == 0) col_flag = true;
            if (mat[i][j] == 0) {
                mat[0][j] = 0
                mat[i][0] = 0
            }
        }
    }
    console.log(mat)
    for (let i = 1; i < mat.length; i++) {
        for (let j = 1; j < mat[0].length; j++) {

            if (mat[0][j] == 0 || mat[i][0] == 0) {
                mat[i][j] = 0;
            }
        }

    }
    if (row_flag == true) {
        for (let i = 0; i < mat[0].length; i++) {
            mat[0][i] = 1;
        }
    }

    if (col_flag == true) {
        for (let i = 0; i < mat.length; i++) {
            mat[i][0] = 1;
        }
    }
    return mat
}

// console.log(setZero([[1, 0, 0, 1],[0, 0, 1, 0],[0, 0, 0, 0]]))



//Print Spiral Matrix


const printSpiralMatrix = (mat) => {
    let top = 0, bottom = mat.length - 1, left = 0, right = mat[0].length - 1, dist = 1, result = ''
    while (top <= bottom) {
        if (dist == 1) {
            for (let i = left; i <= right; i++) {
                result += `${mat[top][i]}`

            }
            ++top;
            dist = 2
        } else if (dist == 2) {
            for (let i = top; i <= bottom; i++) {
                result += `${mat[i][right]}`
            }
            right--;
            dist = 3
        } else if (dist == 3) {
            for (let i = right; i >= left; i--) {
                result += `${mat[bottom][i]}`
            }
            bottom--;
            dist = 4
        } else if (dist == 4) {
            for (let i = bottom; i >= top; i--) {
                result += `${mat[i][left]}`
            }
            left++;
            dist = 1
        }


    }
    console.log(result)
}

printSpiralMatrix([[1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9]])


const diagonalMatrix = (n) => {
    let str = ''
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i == j) {
                str += i
            } else if (i + j == n - 1) {
                str += j
            } else {
                str += ' '
            }
        }
        str += '\n'
    }
    return str
}

console.log(diagonalMatrix(5))


//Create a spiral matrix from a given array

/*
Input: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25
 
Output:
 
[ 1   2   3   4   5 ]
[ 16  17  18  19  6 ]
[ 15  24  25  20  7 ]
[ 14  23  22  21  8 ]
[ 13  12  11  10  9 ]*/

const spiralMatrix = (...arr) => {
    let top = 0, bottom = arr.length ** 0.5 - 1, left = 0, right = (arr.length ** 0.5) - 1, dist = 1
    const spiralArr = new Array(arr.length ** 0.5);
    for (let i = 0; i < spiralArr.length; i++) {
        spiralArr[i] = new Array(arr.length ** 0.5)
    }

    let count = 0;

    // Moving from left to right

    while (top <= bottom) {
        if (dist == 1) {
            for (let i = left; i <= right; i++) {

                spiralArr[top][i] = arr[count];
                count++
            }
            top++;
            dist = 2;

        } else if (dist == 2) {
            for (let i = top; i <= bottom; i++) {
                spiralArr[i][right] = arr[count];
                count++;
            }
            right--;
            dist = 3;
        } else if (dist == 3) {
            for (let i = right; i >= left; i--) {
                spiralArr[bottom][i] = arr[count];
                count++;
            }
            bottom--;
            dist = 4;
        } else if (dist == 4) {
            for (let i = bottom; i >= top; i--) {
                spiralArr[i][left] = arr[count];
                count++;

            }
            left++;
            dist = 1;
        }


        //Moving from top to bottom
    }
    console.log(spiralArr, count)

}

spiralMatrix(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25)




console.log(Promise.resolve(1) instanceof Promise)

//promse.resolve return a new fulfilled promise.However this is still apromise object and thus is instance of promise

// console.log(Promise.resolve(1).then(res=>console.log(res)))
// Promise.resolve(1).then(res=>console.log(res))


//Shift all matrix elements by 1 in spiral order

const shiftSpiralMatrix = (mat) => {
    let top = 0, left = 0, right = mat[0].length - 1, bottom = mat.length - 1;
    prev = mat[0][0]
    while (true) {
        if (left > right) {
            break;
        }
        //change top row
        for (let i = left; i <= right; i++) {
            temp = mat[top][i];
            mat[top][i] = prev;
            prev = temp;
        }
        top++;

        if (top > bottom) {
            break;
        }
        //change right column;
        for (let i = top; i <= bottom; i++) {
            temp = mat[i][right];
            mat[i][right] = prev;
            prev = temp;
        }
        right--;

        if (left > right) {
            break;
        }

        //change bottom row;
        for (let i = right; i >= left; i--) {
            temp = mat[bottom][i];
            mat[bottom][i] = prev;
            prev = temp;
        }
        bottom--;

        if (top > bottom) {
            break;
        }

        for (let i = bottom; i >= top; i--) {
            temp = mat[i][left];
            mat[i][left] = prev;
            prev = temp;
        }
        left++;
    }
    mat[0][0] = prev;
    return mat
}

console.log(shiftSpiralMatrix([[1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9]]))



/*Replace the middle element of matrix with sum of surrounding elements*/
const sumOfMiddle = (matr) => {
    let m = matr.length, n = matr[0].length;

    upperTopMid = matr[Math.floor(n / 2) - 1][Math.floor(m / 2)]
    lowerBottomMid = matr[Math.floor(n / 2) + 1][Math.floor(m / 2)]
    leftOfMid = matr[Math.floor(m / 2)][Math.floor(m / 2) - 1]
    rightOfMid = matr[Math.floor(m / 2)][Math.floor(m / 2) + 1]

    matr[Math.floor(m / 2)][Math.floor(m / 2)] = upperTopMid + lowerBottomMid + leftOfMid + rightOfMid
    console.log(matr)

}
// const input = [ [2, 1, 7], 
// [3, 7, 2], 
// [5, 4, 9] ]

const input = [[1, 3, 5, 6, 7],
[3, 5, 3, 2, 1],
[1, 2, 3, 4, 5],
[7, 9, 2, 1, 6],
[9, 1, 5, 3, 2]]


sumOfMiddle(input)

/*
Problem Statement: You are given an array of prices where prices[i] is the price of a given stock on an ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and 
sell on day 5 (price = 6), profit = 6-1 = 5.

Note: That buying on day 2 and selling on day 1 
is not allowed because you must buy before 
you sell.

*/


// const prices = [7,6,4,3,1]
const prices = [7, 1, 5, 3, 6, 4]
const maxProfit = (arr) => {
    let minPrice = Math.min(...arr);
    const minPriceIndx = arr.indexOf(minPrice);
    let profit = 0;
    for (let i = minPriceIndx + 1; i < arr.length; i++) {
        if (arr[i] - arr[minPriceIndx] > 0 && arr[i + 1] - arr[minPriceIndx] > profit) {
            profit = arr[i + 1] - arr[minPriceIndx]
        }
    }
    return profit
}

console.log(maxProfit(prices))

/*
Problem Statement:

There’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements. Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values.

Note: Start the array with positive elements.
*/
function rearrange(arr) {
    let even = 0, odd = 1, res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            res[even] = arr[i];
            even += 2;
        } else {
            res[odd] = arr[i];
            odd += 2;
        }
    }
    return res

    // let pos = [],neg = [];
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i]>0){
    //         pos.push(arr[i])
    //     }else{
    //         neg.push(arr[i])
    //     }
    // }
    // console.log(pos,neg)
    // for(let i=0;i<arr.length/2;i++){
    //     arr[2*i] = pos[i]
    //     arr[2*i+1] = neg[i]
    // }
    // return arr;
}

// console.log(rearrange([1,2,-3,-1,-2,3]))
console.log(rearrange([1, 2, -3, -1, -2, 3, 4, 7, -3, -2]))


/*
Problem Statement:

There’s an array ‘A’ of size ‘N’ with  unequal number of positive and negative elements. Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values.

Note: Start the array with positive elements.
*/

function rearrange1(arr) {
    let pos = [], neg = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            pos.push(arr[i])
        } else {
            neg.push(arr[i])
        }
    }
    // If positives are lesser than the negatives.
    if (pos.length < neg.length) {
        // First, fill array alternatively till the point 
        // where positives and negatives are equal in number.
        for (let i = 0; i < pos.length; i++) {
            arr[2 * i] = pos[i];
            arr[2 * i + 1] = neg[i];
        }

        // Fill the remaining negatives at the end of the array.
        let index = pos.length * 2
        for (let i = pos.length; i < neg.length; i++) {
            arr[index] = neg[i];
            index++;
        }

    }
    // If negatives are lesser than the positives.
    else {
        // First, fill array alternatively till the point 
        // where positives and negatives are equal in number.
        for (let i = 0; i < neg.length; i++) {
            arr[2 * i] = pos[i];
            arr[2 * i + 1] = neg[i];
        }
        // Fill the remaining positives at the end of the array.
        let index = neg.length * 2;
        for (let i = neg.length; i < pos.length; i++) {
            arr[index] = pos[i];
            index++;
        }

    }
    console.log(arr)
}

rearrange1([1, 2, -4, -5, 3, 4])

/*
Problem Statement: Given a matrix m X n, count paths from left-top to the right bottom of a matrix with the constraints that from each cell you can either only move to the rightward direction or the downward direction.
*/

function possibleWays(m,n){
   
    function ways(i,j,m,n){
        if( i>=m || j>=n){
            return 0
        }else if( i == m -1 && j == n-1){
            return 1
        }else{
            return ways(i+1,j,m,n) + ways(i,j+1,m,n)
        }
    }
    
   return  ways(0,0,m,n)
 }
 
 console.log(possibleWays(3, 7))