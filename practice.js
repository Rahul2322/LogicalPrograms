/*
Ninja And Alternating Largest
Ninja is given a few numbers, and he is being asked to rearrange the numbers so that every second element is greater than its left and right element.
Suppose the given array is [1, 2, 3, 4, 5] then the rearranged array can be [1, 3, 2, 5, 4].
*/

function alternatingLargest(arr){
    for(let i=1;i<arr.length;i+=2){
        if(arr[i] < arr[i-1]){
            [arr[i],arr[i-1]] = [arr[i-1],arr[i]]
        }
        if(arr[i+1] > arr[i] ){
            [arr[i+1],arr[i]] = [arr[i],arr[i+1]]
        }
    }
    return arr;
}

console.log(alternatingLargest([1, 2, 3, 4, 5] ));

/*
Longest Common Prefix After Rotation
You are given two strings 'A' and 'B' where string 'A' is fixed. But you can perform left shift operations on string B any number of 
times.Your task is to find out the minimum number of left-shift operations required in order to obtain the longest common prefix of 
string 'A' and 'B'.
*/

function longestCommonPrefix(A,B){
    let n = B.length;
    let maxLCP = 0;
    let minShifts = 0;

    for(let shift = 0; shift < n ; shift++){
        const rotatedB = B.slice(shift) + B.slice(0,shift);

        let lcpLength = 0;
        for(let i=0;i<Math.min(A.length,n);i++){
            if(A[i] === B[i]){
                lcpLength++;
            }else{
                break;
            }
        }

        if(lcpLength > maxLCP){
            maxLCP = lcpLength;
            minShifts = shift;
        }

        return {lcpLength,minShifts}
    }
    
}

longestCommonPrefix('nc','anc')


class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
  }
  
  
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  const d = new Node('d');
  const e = new Node('e');
  const f = new Node('f');

  a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

function depthFirstTraversal(root){
    let queue = [root];
    let result = [];
    if(root == null) return result
     while(queue.length > 0 ){
        let currVal = queue.shift();
        result.push(currVal.val);
        if(currVal.left !== null) queue.push(currVal.left);
        if(currVal.right !== null) queue.push(currVal.right);
     }

     return result;


}
console.log(depthFirstTraversal(a));

/*
Triplets with Given Sum
You are given an array/list ARR consisting of N integers. Your task is to find all the distinct triplets present in the array which adds up to a given number K.An array is said to have a triplet {ARR[i], ARR[j], ARR[k]} with sum = 'K' if there exists three indices i, j and k such that i!=j, j!=k and i!=j and ARR[i] + ARR[j] + ARR[k] = 'K'.
*/

function threeSumm(arr){

}


function isBalanced(str){
    let stack = [];
    let count = 0;
    for(let char of str){
        if(char == '(' || char == '[' || char == '{'){
            stack.push(char)
        }
        if(char == ')'){
            if(stack.pop() !== '('){
                return 0;
            }else{
                count++;
            }
        }
        if(char == ']'){
            if(stack.pop() !== '['){
                return 0;
            }else{
                count++;
            }
        }
        if(char == '}'){
            if(stack.pop() !== '{'){
                return 0;
            }else{
                count++;
            }
        }
    }
    return count;
}

console.log(isBalanced("([]){}"));






function longestOnes(nums, k) {
    let n = nums.length,
      max = 0;
    //Brute force

    for(let i=0;i<n;i++){
      let zeroCount = 0;
      for(let j=i;j<n;j++){
        if(nums[j] == 0) zeroCount++;
        if(zeroCount > k) break;
        max = Math.max(max,j-i+1);
      }
    }
  
    return max;
  }
  
  console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3));