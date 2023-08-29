//binary tree
//-at most 2 children per node
//- exactly one root 
//-exctly one path btwn root and any node
//root node is a node who has no parent 
//leaf node is a node which has no children

    //        a       root
    //      /   \
    //     b      c
    //    / \      \
    //   d   e      f
//      leaf leaf    leaf

class Node{
  constructor(val){
      this.val = val;
      this.left = null;
      this.right = null;
  }
}


// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

const a = new Node(13);
const b = new Node(4);
const c = new Node(11);
const d = new Node(5);
const e = new Node(6);
const f = new Node(9);


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// console.log(a)


//Depth first traversal

const depthFirstTraversal = (root)=>{
//   let stack = [root];
//   let result = [];
// if(root == null) return result
//  while(stack.length > 0){
//   let currVal = stack.pop();
//   result.push(currVal.val);
//   if(currVal.right !== null) stack.push(currVal.right);
//   if(currVal.left !== null) stack.push(currVal.left);
//  }

//  return result;

//With Recursion

if(root == null) return []
const left = depthFirstTraversal(root.left);
const right = depthFirstTraversal(root.right);
return [root.val,...left,...right]
}

const res = depthFirstTraversal(a);
console.log(res)


//Breadth Traversal

const breadthFirstTraversal = (root)=>{
  let queue = [root],result = [];
  if(root == null) return result
  while(queue.length > 0){
    const currVal = queue.shift();
    result.push(currVal.val);
    if(currVal.left !== null) queue.push(currVal.left);
    if(currVal.right !== null) queue.push(currVal.right);

  }
return result;
}

console.log(breadthFirstTraversal(a))


//Tree Includes

const treeIncludes = (root,target)=>{
  // const queue = [root];

  // while(queue.length > 0){
  //   const curr = queue.shift();
  //   if(curr.val === target) return true;

  //   if(curr.left) queue.push(curr.left);
  //   if(curr.right) queue.push(curr.right);

  // }

  // return false;


  //Recursive depthfirst

  if(root === null) return false;
  if(root.val === target) return true;

  return treeIncludes(root.left,target) || treeIncludes(root.right,target)
}

console.log(treeIncludes(a,'e'))


//tree sum

const treeSum = (root)=>{
  // if(root == null) return 0;
  // return root.val + treeSum(root.left) + treeSum(root.right)
 
  if(root == null) return 0;
  const queue = [root];
  let totalSum = 0;
  while(queue.length > 0){
    const curr = queue.shift();
    totalSum+=curr.val;
    if(curr.left !== null) queue.push(curr.left)
    if(curr.right !== null) queue.push(curr.right)
  }
  return totalSum
}


console.log(treeSum(a))


//Min tree value

const treeMinValue = (root)=>{
  // if(root == null) return Infinity;
  // let min = Infinity;  // o(n)
  // const stack = [root];
  // while(stack.length > 0){
  //   const curr = stack.pop();
  //   if(curr.val < min) min = curr.val;
  //   if(curr.left !== null) stack.push(curr.left);
  //   if(curr.right !== null) stack.push(curr.right);
  // }

  // if(root == null) return Infinity;
  // let min = Infinity;                  // o(n^2)
  // const queue = [root];
  // while(queue.length > 0){
  //   const curr = queue.shift();
  //   if(curr.val < min) min = curr.val;
  //   if(curr.left !== null) queue.push(curr.left);
  //   if(curr.right !== null) queue.push(curr.right);
  // }
  // return min;

  if(root == null) return Infinity;
  const leftMin = treeMinValue(root.left);
  const rightMin = treeMinValue(root.right);
  return Math.min(root.val,leftMin,rightMin)
}
console.log(treeMinValue(a))

// Max root to leaf path sum

const maxPathSum = (root)=>{
  if(root == null) return -Infinity;
  if(root.left == null && root.right == null) return root.val;
  const maxChildPathSum = Math.max(maxPathSum(root.left),maxPathSum(root.right));
  return root.val + maxChildPathSum;
}

   //         13       root
    //      /   \
    //     4      11
    //    / \      \
    //   5   6      9
//      leaf leaf    leaf


console.log(maxPathSum(a))