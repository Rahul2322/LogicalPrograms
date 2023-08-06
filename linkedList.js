/*
 A linked list is a linear data structure similar to an array. However, unlike arrays, elements are not stored in a particular memory location or index. Rather each element is a separate object that contains a pointer or a link to the next object in that list.

Each element (commonly called nodes) contains two items: the data stored and a link to the next node. The data can be any valid data type. You can see this illustrated in the diagram below.
 */


class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node 
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
    this.size++
    }

    insert(value,index){
        if(index < 0 || index > this.getSize()){
            return
        }

        if(index == 0){
            this.prepend(value)
        }else{
            const node = new Node(value);
            let prev = this.head;
            for(let i=0;i<index -1;i++){
                prev = prev.next
            }
            node.next = prev.next;
            prev.next = node;
            this.size++


        }
    }

    removeFrom(index){
        if(index < 0 || index >= this.getSize()){
            return null
        }
        let removedNode;
        if(index == 0){
            removedNode = this.head
            this.head = this.head.next
        }else{
       
        let prev = this.head
        for(let i=0;i<index - 1;i++){
            prev = prev.next
        }
        removedNode = prev.next;
        prev.next = removedNode.next
    }
        this.size--;
        return removedNode.value
       
    }

    removeValue(val){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value == val){
            this.head = this.head.next
            this.size--;
            return val;
        }else{
            let prev = this.head,removedNode;
            while(prev.next && prev.next.value !== val){
               prev =  prev.next
            }
            if(prev.next){
                removedNode = prev.next;
                prev.next = removedNode.next;
                this.size--;
                return val;
            }
            return null
        }

    }

    search(val){
        if(this.isEmpty()){
            retrun -1
        }
        let curr = this.head,i=0;
        while(curr){
            if(curr.value == val){
                return i
            }
            curr = curr.next;
            i++;
        }

        return -1
    }

    reverse(){
        let curr = this.head;
        let prev = null;

        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next
        }
        this.head = prev
    }

    print(){
        if(this.isEmpty()){
            console.log('List is Empty')
        }else{
            let curr = this.head;
            let listValues = '';
            while(curr){
                listValues+=`${curr.value}`;
                curr = curr.next;
            }
            console.log(listValues)
            
        }
    }
}
// const list = new LinkedList();
// console.log('Empty list?',list.isEmpty())
// console.log('list size?',list.getSize())
// list.print()
// list.prepend(10)
// list.print()
// list.prepend(20)
// list.prepend(30)
// list.print();
// list.append(40);
// list.print();



const list1 = new LinkedList();
list1.insert(10,0)
list1.insert(20,0)

list1.insert(30,1)


// console.log(list1.removeFrom(10));

// console.log(list1.removeFrom(0));

// list1.print();


// console.log(list1.removeValue(20));
// list1.print()

// console.log(list1.removeValue(30));

// console.log(list1.search(40))
// list1.print()

list1.reverse();
list1.print();







class LinkedList1{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size == 0
    }

    getSize(){
        return this.size
    }

    print(){
        if(this.isEmpty){
            console.log('List is empty')
        }else{
        let nodeValue = '';
        let curr = this.head;
        while(curr){
            nodeValue+=`${curr.value}`
            curr= curr.next
        }
        console.log(nodeValue)
    }
    }

    prepend(val){
        const node = new Node(val)
        if(this.isEmpty()){
            this.head = node;
            this.tail=node;
        }else{
          node.next  = this.head;
          this.head = node

        }
        this.size++
    }

    append(val){
        const node = new Node(val);
        if(this.isEmpty()){
            this.head = node;
            this.tail=node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    removedFromFront(){
        if(this.isEmpty()){
            return null
        }else{
            let value = this.head.value;
            this.head = this.head.next;
            this.size--;
            return value
        }

    }

    removedFromEnd(){
        if(this.isEmpty()){
            return null
        }
        const value = this.head.value;
       
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }else{
        const prev = this.head;
        while(prev.next !== this.tail){
            prev = prev.next
        }
        prev.next = null;
        this.tail = prev
    }
    this.size--;
    return value

    }
}