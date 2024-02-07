/*
  a---->c
  |     | 
  |     |
  b     e 
  |
  |
  d----->f
  */
//https://youtu.be/tWVWeAqZ0WU?si=-85iak-pY6_x06r7

  const graph = {
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
  }

  //FirstDepthPath

  const depthFirstPrint = (graph,source)=>{
    // const stack = [source];
    // while(stack.length > 0){
    //     const current = stack.pop();
    //     console.log(current)
    //     for(let neighbour of graph[current]){
    //         stack.push(neighbour)
    //     }
    // }

    //recursive Approach
    console.log(source);
    for(let neighbour of graph[source]){
        depthFirstPrint(graph,neighbour)
    }
  }

  depthFirstPrint(graph,'a')


  const breadthFirstPrint = (graph,source)=>{
    const queue = [source];
    while(queue.length > 0){
        const current = queue.shift();
        console.log(current);
        for(let neighbour of graph){
            queue.push(neighbour);
        }
    }
  }


//has path
 
const graph1 = {
    f:['g','i'],
    g:['h'],
    h:[],
    i:['g','k'],
    j:['i'],
    k:[]

}
const hasPath = (graph,src,dst)=>{
    const queue = [src];
    while(queue.length > 0){
      const curr = queue.shift();
      if(curr == dst) return true;
      for(let neighbour of graph[curr]){
        queue.push(neighbour)
      }
    }
    return false
    // if(src === dst) return true;
    // for(let neighbour of graph[src]){
    //     if(hasPath(graph,neighbour,dst)){
    //         return true
    //     }
    // }
    // return false;
}

console.log(hasPath(graph1,'f','k'))


//undirected path

const edges = [
  ['i','j'],
  ['k','i'],
  ['m','k'],
  ['k','l'],
  ['o','n']
]

const undirectedPath = (edges,nodeA,nodeB)=>{
  const graph = buildGraph(edges);
  console.log(graph)
  return hasPath1(graph,nodeA,nodeB,new Set());

}

const hasPath1 = (graph,src,dst,visited)=>{
  if(src === dst) return true;
  if(visited.has(src)) return false;
  visited.add(src);

  for(let neighbour of graph[src]){
    if (hasPath1(graph,neighbour,dst,visited) === true){
      return true
    }
  }
 return false;
}

const buildGraph = (edges)=>{
  const graph = {};
  for(let edge of edges){
    const [a,b] = edge;
    if(!(a in graph)) graph[a] = [];
    if(!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
}

console.log(undirectedPath(edges,'j','m'))


//connected component count

const graph2 = {
  0:[8,1,5],
  1:[0],
  5:[0,8],
  8:[0,5],
  2:[3,4],
  3:[2,4],
  4:[3,2]
}

const connectedComponentCount = (graph)=>{
  const visited  = new Set();
  let count = 0;
  for(let node in graph){
   if( explore(graph,node,visited) == true){
    count+=1
   }
  }

  return count;
}

const explore = (graph,current,visited)=>{
  if(visited.has(current)) return false;

  visited.add(String(current))
  for(let neighbour of graph[current]){
    explore(graph,String(neighbour),visited)
  }

  return true
}

console.log(connectedComponentCount(graph2))

//LargestComponent

const largestComponent = (graph)=>{
  const visited = new Set();
  let longest = 0;
  for(let node in graph){
    const size = exploreSize(graph,node,visited);
    if(size > longest) longest = size;
  }

  return longest
}

const exploreSize = (graph,node,visited)=>{
  if(visited.has(node)) return 0;

  visited.add(String(node));

  let size = 1;

  for(let neighbour of graph[node]){
    size+=exploreSize(graph,String(neighbour),visited)
  }
  return size;
}

console.log(largestComponent(graph2))

//shortest path

 
const edges1 = [
  ['w','x'],
  ['x','y'],
  ['z','y'],
  ['z','v'],
  ['w','v']
]

const shortestPath = (edges,nodeA,nodeB)=>{
  const graph = buildGraph(edges);
  const visited = new Set([nodeA]);
  const queue = [[nodeA,0]]

  while(queue.length > 0){
    const [node,distance] = queue.shift();
    
    if(node === nodeB) return distance;

    for(let neighbour of graph[node]){
      if(!(visited.has(neighbour))){
        visited.add(neighbour)
        queue.push([neighbour,distance+1])
      }
    }
  }

  return -1
}

console.log(shortestPath(edges1,'w','z'))



/*
There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.
You want to determine if there is a valid path that exists from vertex source to vertex destination.
Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.

n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
*/

//Using adjacency matrix
const findPathdfs = (n,edges,src,dest)=>{
  const graph = Array(n).fill(null).map(()=> new Array(n).fill(false));
  for(let edge of edges){
    let u = edge[0] ,v = edge[1]
    graph[u][v] = true            //bidirectional
    graph[v][u] = true
  }
  const visited = Array(n).fill(false);
    function dfs(graph,vis,src,dest,n){
        if(src == dest) return true;
        vis[src] = true
        for(let i=0;i<n;i++){
          if(graph[src][i] == true && !vis[i]){
           if(dfs(graph,vis,i,dest,n)) return true
          }
        }
        return false;
    }

    return dfs(graph,visited,src,dest,n)

}

// console.log(findPath(3,[[0,1],[1,2],[2,0]],0,2))
console.log(findPathdfs(6, [[0,1],[0,2],[3,5],[5,4],[4,3]],0,5))



const findPathBfs = (n,src,dest,edges)=>{
  const graph = Array(n).fill(null).map(()=>Array(n).fill(false));
  const visited = Array(n).fill(false);
  const queue = [];
  for(let edge of edges){
    let u = edge[0],v = edge[1];
    graph[u][v] = true;
    graph[v][u] = true;
  }
  queue.push(src);
  visited[src] = true;
  
  while(queue.length > 0){
    let curr = queue.shift();
    if(curr === dest) return true;
    for(let i=0;i<n;i++){
      if(graph[curr][i] == true && !visited[i]){
        queue.push(i);
        visited[i] = true;
      }
    }
  }
  return false;
}

console.log(findPathBfs(3,0,2,[[0,1],[1,2],[2,0]]));
console.log(findPathBfs(6,0,5,[[0,1],[0,2],[3,5],[5,4],[4,3]]));


//Using adjacnecy list --> with good time complexity

const findDfsList = (n,edges,src,dest)=>{
const graph = new Map()
const visited = Array(n).fill(false);
for(let edge of edges){
  let u = edge[0],v = edge[1];
 if(!graph.has(u)) graph.set(u,[])
 if(!graph.has(v)) graph.set(v,[])
 graph.get(u).push(v);
 graph.get(v).push(u);
}
 
function dfs(n,graph,vis,src,dest){
    if(src == dest) return true;
    vis[src] = true;
    for(let neighbour of graph.get(src)){
      if(!vis[neighbour]){
        if(dfs(n,graph,vis,neighbour,dest)){
          return true;
        }
      }
    }
    return false;
}

return dfs(n,graph,visited,src,dest)


}

console.log(findDfsList(3,[[0,1],[1,2],[2,0]],0,2))


const findPathBfsList = (n,edges,src,dest)=>{
  const graph = new Map();
  const vis = Array(n).fill(false);

  for(let edge of edges){
    let u = edge[0], v= edge[1];
    if(!graph.has(u)) graph.set(u,[]);
    if(!graph.has(v)) graph.set(v,[]);

    graph.get(u).push(v);
    graph.get(v).push(u);
  }

  let queue = [];
  queue.push(src);
  vis[src] = true;
  while(queue.length > 0){
    const curr = queue.shift();
    if(curr == dest) return true;
    for(let neighbour of graph.get(curr)){
      if(!vis[neighbour]){
        vis[neighbour] =true;
        queue.push(neighbour)
      }
    }
  }
  return false;
}

/*
Given 2 integers n and k ,return an array of all the integers of length n where the diff between eveery 2 consecutive
digits is k.you may return the ans in any order

NOte:the integer should not have leading zeroes .integers as 02 and 043 are not allowed
*/

const numWithConsecutiveDiff = (n,k)=>{
  const res = [];
  function dfs(num,n,k,res){
      if(n == 0){
        res.push(num);
        return;
      }
      let lastDigit =  num%10;
      if(lastDigit + k <=9) dfs(num*10+lastDigit+k,n-1,k,res);
      if(k !=0 && lastDigit - k >=0) dfs(num*10 + lastDigit - k,n-1,k,res) 
  }
  for(let num=1;num<=9;num++){
    dfs(num,n-1,k,res)
  }
   return res;
}

console.log(numWithConsecutiveDiff(3,7))