class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function newNode(data){
    let node = new Node(data);
    return node;
}

function maxValue(node){
    if(node == null)  return Number.MIN_VALUE

    let value = node.data;
    let leftMax = maxValue(node.left);
    let rightMax = maxValue(node.right);

    return Math.max(value,Math.max(leftMax,rightMax))
}

function minValue(node){
    if(node == null) return Number.MAX_VALUE;
    let value = node.data;
    let leftMax = minValue(node.left);
    let rightMax = minValue(node.right);

    return Math.min(value,Math.min(leftMax,rightMax))
}

const root = newNode(4);
root.left = newNode(2);
root.right = newNode(5);

root.left.left = newNode(1);
root.left.right = newNode(3)
console.log(root)