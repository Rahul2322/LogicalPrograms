//binary tree
//-at most 2 children per node
//- exactly one root 
//-exctly one path btwn root and any node
//root node is a node who has no parent 
//leaf node is a node which has no children

    //        a(13)       root
    //      /   \
    //     b(4)   c(11)
    //    / \      \
    //d(5)   e(6)   f(9)
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
//  while(stack.length > 0){\
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


//Breadth Traversal or Level Order Traversal

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

// Max root to leaf path sum  :from root to any leaf whichever side gives maximum

const maxPathSum = (root)=>{
  if(root == null) return -Infinity;
  if(root.left == null && root.right == null) return root.val;
  const maxChildPathSum = Math.max(maxPathSum(root.left),maxPathSum(root.right));
  return root.val + maxChildPathSum;
}

//        13       root
//      /   \
//     4     11
//    / \      \
//   5   6      9
// leaf leaf    leaf


console.log(maxPathSum(a))


//Take u forward

//Pre-order Traversal -->> print-order Root-Left-Right  

const preOrderTraversal = (node)=>{
  // if(node == null){
  //   return;
  // }
  // console.log(node.val);
  // preOrderTraversal(node.left);
  // preOrderTraversal(node.right);

  //Iterative Approach

  const stack = [node];
  if(node == null) return ;

  while(stack.length > 0){
   let currVal = stack.pop();
   console.log('preorder',currVal.val);
   if(currVal.right !== null) stack.push(currVal.right);
   if(currVal.left !== null) stack.push(currVal.left);
   
  }

}

preOrderTraversal(a)


//In-order Traversal -->> print-order Left-Root-Right  
const inOrderTraversal = (node)=>{
  if(node == null){
    return;
  }
  // inOrderTraversal(node.left);
  // console.log('inorder',node.val);
  // inOrderTraversal(node.right);


  //Iterative Approach
  let stack = [],result=[];
  while(true){
      if(node !== null){
          stack.push(node);
          node = node.left;
      }else{
        if(stack.length == 0){
          break;
        }
        node = stack.pop();
        result.push(node.val);
        node = node.right;
      }

  }
 console.log(result);
}
inOrderTraversal(a)


//post-order Traversal -->> print-order Left-Right-Root  
const postOrderTraversal = (root)=>{
  // if(node == null){
  //   return;
  // }
  // postOrderTraversal(node.left);
  // postOrderTraversal(node.right);
  // console.log('postorder',node.val);

  //Iterative 1
  // const result = [];
  // const stack1 = [];
  // const stack2 = [];

  // stack1.push(root);

  // while (stack1.length > 0) {
  //   const node = stack1.pop();
  //   stack2.push(node);

  //   if (node.left) stack1.push(node.left);
  //   if (node.right) stack1.push(node.right);
  // }

  // while (stack2.length > 0) {
  //   const node = stack2.pop();
  //   result.push(node.value);
  // }

  // return result;



  //iterative 2

  let stack =[],result=[];
  let curr=root;
  while(curr!=null || stack.length !==0){
    if(curr!=null){
      stack.push(curr);
      curr = curr.left
    }else{
      let temp = stack[stack.length - 1];
      if(temp.right == null){
        stack.pop();
        result.push(temp.val)
        while(stack.length !==0 && stack[stack.length - 1].right.val == temp.val){
          temp = stack.pop();
          result.push(temp.val)
        }
      }else{
        curr = temp.right;
      }
    }
  }
  console.log(result)
}
postOrderTraversal(a)


//Maximum depth 

const maxDepth = (root)=>{
  if(root == null) return 0;
  let left =  maxDepth(root.left);
  let right = maxDepth(root.right);

  return 1 + Math.max(left,right)
}

console.log(maxDepth(a))


//Balanced binary tree  i.e for every node ,height(left) - heiht(right) <=1

const balancedTree = (root)=>{
    return dfsHeight(root) != -1;
   function dfsHeight(root){
    if(root == null) return 0;
    let lh = dfsHeight(root.left);
    if(lh === -1) return -1
    let rh = dfsHeight(root.right);
    if(rh === -1) return -1


    if(lh - rh > 1) return -1;

    return 1 + Math.max(lh,rh)
   }

}

console.log(balancedTree(a))


//Diameter of binary tree

const diamOfBinaryTree = (root,maxi)=>{
  if(root == null) return 0;

  let lh = diamOfBinaryTree(root.left,maxi);
  let rh = diamOfBinaryTree(root.right,maxi);

  maxi[0] = Math.max(maxi[0],lh+rh);
  return 1 + Math.max(lh,rh);
}

function main(root){
   let max = [0];
   diamOfBinaryTree(root,max);
   return max;
}

console.log(main(a))



//Maximum Path Sum in binary tree :Different question than above maxPathSum

const maxPathSum1 = (root)=>{
  let maxi = [0];
  maxPathDown(root,maxi);
  return maxi;

  function maxPathDown(root,maxi){
     if(root == null ) return 0;
     let left =  Math.max(0,maxPathDown(root.left,maxi));
     let right = Math.max(0,maxPathDown(root.right,maxi));
     maxi[0]  = Math.max(maxi[0],left+right+root.val);
     return root.val + Math.max(left,right)
   
  }
  
}
 
console.log(maxPathSum1(a))



//Check if two trees are identical

const isSameTree = (p,q)=>{
  if(p==null || q==null) return p === q
  return p.val===q.val && isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
}
console.log(isSameTree(a,a))

//Zig-Zag or Spiral Traversal 

const spiralTraversal = (root)=>{
    if(root == null) return [];
    const queue = [root];
    const result = [];
    let flag = true;
    while(queue.length > 0){
      let queLen = queue.length , currval = [];
     for(let i = 0 ;i < queLen ; i++){
      node = queue.shift();
      flag ? currval.push(node.val) :  currval.unshift(node.val);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right)
     }

     result.push(...currval)
     flag = !flag
    }
     return result;
}

console.log(spiralTraversal(a))