/*
  a---->c
  |     | 
  |     |
  b     e 
  |
  |
  d<-----f
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