let arr = [1, 2, 3, 4, 5, 6, 7]
for (let i = 0; i < arr.length / 2; i++) {
  temp = arr[i];
  arr[i] = arr[arr.length - i - 1];
  arr[arr.length - i - 1] = temp;
}

console.log(arr)



let arr1 = [1, 3, 4, 5, 4, 6, 7, 6, 7, 8];

const result = arr1.filter((ele, i, arr1) => {
  return arr1.indexOf(ele) === i
})

console.log(result)



let str = ''
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5 - i; j++) {
    str += ' '
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    str += '*'
  }
  str += '\n'
}

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 2 * i - i - 1; j++) {
    str += ' '
  }
  for (let j = 1; j <= 2 * (5 - i) + 1; j++) {
    str += '*'
  }

  str += '\n'
}

console.log(str)




//Arrays


//Painters partition
/*Given are N boards of with length of each given in the form of array, and K painters, such that each painter takes 1 unit of time to paint 1 unit of the board. The task is to find the minimum time to paint all boards under the constraints that any painter will only paint continuous sections of boards, say board {2, 3, 4} or only board {1} or nothing but not board {2, 4, 5}.*/


function sum(arr,from,to){
  let total = 0;
  for(let i=from;i<=to;i++){
    total+=arr[i];
    
  }
  return total;
}

function partition(arr,n,k){
  //base case
  if(k == 1){
    return sum(arr,0,n -1)
  }
  if(n ==1){
    return arr[0];
  }

  let best = Number.MAX_VALUE;

  for(let i=1;i<=n;i++){
    best = Math.min(best,Math.max(partition(arr,i,k-1),sum(arr,i,n-1)))
  }

  return best;
}

const array1 = [ 10, 20, 60, 50, 30, 40 ];
const n = array1.length
console.log('min of max',partition(array1,n,3))

// const tree = {
//   name:'john',
//   children:[
//     {
//       name:'rahul',
//       children:[]
//     },{
//       name:'zoe',
//       children:[
//         {  name:'kyle',children:[]},
//         {name:"sophia",children:[]}
//       ]
//     }
//   ]
// }

// function printChildrenRecursive(t){
//   if(t.children.length === 0){
//     return
//   }
//   t.children.forEach(child=>{
//     console.log(child.name)
//     printChildrenRecursive(child)
//   })
// }

// printChildrenRecursive(tree)

// function power(x,y){
//   if(y == 1){
//     return x
//   }
// return x *  power(x,y-1)
// }

// console.log(power(2,5))