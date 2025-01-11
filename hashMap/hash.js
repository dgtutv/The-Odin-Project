class Node{
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList{
    root = null;

    toString(){
        let returnString = "";
        let currentNode = this.root;
        while(currentNode != null){
            returnString += (`( ${currentNode.value} ) -> `);
            currentNode = currentNode.nextNode;
        }
        returnString += ("null");
        return returnString;
    }

    append(value){
        let newNode = new Node;
        newNode.value = value;
        if(this.root == null){
            this.root = newNode;
        }
        else{
            let currentNode = this.root;
            while(currentNode.nextNode != null);
            currentNode.nextNode = newNode;
        }
    }

    prepend(value){
        let newNode = new Node;
        newNode.value = value;
        newNode.nextNode = this.root;
        this.root = newNode;
    }

    size(){
        let currentNode = this.root;
        let counter = 0;
        while(currentNode != null){
            currentNode = currentNode.nextNode;
            counter++;
        }
        console.log(counter);
        return counter;
    }

    root(){
        return this.root;
    }

    tail(){
        let currentNode = this.root;
        while(currentNode.nextNode != null){
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    at(index){
        let currentNode = this.root;
        for(let i=0; i<index; i++){
            if(currentNode == null){
                return null;
            }
            currentNode = currentNode.nextNode;
        }
        console.log(currentNode);
        return currentNode;
    }

    pop(){
        if(this.root.nextNode == null){
            this.root = null;
            return;
        }
        let currentNode = this.root;
        while(currentNode.nextNode != null && currentNode.nextNode.nextNode != null){
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = null;
    }

    contains(value){
        let currentNode = this.root;
        while(currentNode != null){
            if(currentNode.value == value){
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find(value){
        let index = 0;
        let currentNode = this.root;
        while(currentNode != null){
            if(currentNode.value == value){
                return index;
            }
            currentNode = currentNode.nextNode;
            index++;
        }
        return -1;
    }

    remove(key){
        if(this.root != null){
            if(this.root.key == key){
                this.root = null;
                return;
            }
            let currentNode = this.root;
            while(currentNode.nextNode != null){
                if(currentNode.nextNode.key == key){
                    currentNode.nextNode = currentNode.nextNode.nextNode;
                }
                currentNode = currentNode.nextNode;
            }
        }
    }
}

class HashMap{
    constructor(loadFactor, capacity){
        this.buckets = new Array;
        this.growNum = loadFactor * capacity;
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.populate();
        this.numNodes = 0;
    }

    //Helper function to populate buckets with empty linked lists
    populate(){
        for(let i=0; i<this.capacity; i++){
            if(this.buckets[i] == null){
                this.buckets[i] = new LinkedList();
            }
        }
    }

    //Helper function to re-organize the existing buckets to match the new capacity
    organize(){
        for(let i=0; i<this.capacity/2; i++){
            let currentBucket = this.buckets[i];
            if(currentBucket.root != null){
                let currentNode = currentBucket.root;
                while(currentNode != null){
                    let newIndex = this.hash(currentNode.key);

                    //If the hash has changed
                    if(newIndex != i){
                        //Remove the node
                        this.remove(currentNode.key);

                        //Re-Insert the node into the new bucket
                        this.set(currentNode.key, currentNode.value);
                    }

                    currentNode = currentNode.nextNode;
                }
            }
        }
    }

    //Helper function that generates a view of the hash map
    toString(){
        let returnString = "";
        for(let i=0; i<this.capacity; i++){
            let currentBucket = this.buckets[i];
            if(currentBucket.root != null){
                returnString +=`${i}: ${currentBucket.toString()} \n`;
            }
        }
        console.log(returnString);
        return returnString;
    }

    hash(key, capacity){
        let hashCode = 0;
        for(let i=0; i<key.length; i++){
            hashCode = (hashCode + key.charCodeAt(i)) % capacity;
        }
        return hashCode;
    }

    set(key, value){
        //Generate a hash index
        let index = this.hash(key, this.capacity);

        //Find the correct bucket
        let bucket = this.buckets[index];

        //If there is a collision
        if(bucket.root != null){
            let currentNode = bucket.root;

            //If the key is present, update the value
            let tail;
            while(currentNode != null){
                if(currentNode.key == key){
                    currentNode.value = value;
                    return;
                }
                if(currentNode.nextNode == null){
                    tail = currentNode;
                }
                currentNode = currentNode.nextNode;
            }

            //If the key is not present, create a new Node, and add to the end of the bucket
            let newNode = new Node(key, value);
            tail.nextNode = newNode;
            this.numNodes++;
        }

        //If there is no collision, insert the new Node as the root of the corresponding bucket 
        else{
            let newNode = new Node(key, value);
            bucket.root = newNode;
            this.numNodes++;
        }

        //If the new entry grows the numNodes over growNum, double buckets, and update growNum
        if(this.numNodes > this.growNum){
            this.capacity *= 2;
            this.growNum = this.loadFactor * this.capacity;
            this.populate();
            this.organize();
        } 
    }

    remove(key){
        let index = this.hash(key, this.capacity/2);
        let bucket = this.buckets[index];
        bucket.remove(key);
        this.numNodes--;
    }

    get(key){
        let index = this.hash(key, this.capacity);
        let bucket = this.buckets[index];
        if(bucket.root != null){
            let currentNode = bucket.root;
            while(currentNode != null){
                if(currentNode.key == key){
                    return currentNode.value;
                }
                currentNode = currentNode.nextNode;
            }   
        }
        return "";
    }

    has(key){
        if(this.get(key) !== ""){
            return true;
        }
        return false;
    }
}

const test = new HashMap(0.75, 16);
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');
test.toString();
console.log(`Num nodes: ${test.numNodes}, Capacity: ${test.capacity}`);

console.log(`ice cream: ${test.get("ice cream")}`)//Get function needed
test.set('ice cream', 'blue');
test.toString();
console.log(`ice cream: ${test.get("ice cream")}`)//Get function needed
console.log(`Num nodes: ${test.numNodes}, Capacity: ${test.capacity}`);

console.log(`cat: ${test.has("cat")}`);
test.set('cat', 'orange');
console.log(`Num nodes: ${test.numNodes}, Capacity: ${test.capacity}`);
test.toString();
console.log(`cat: ${test.has("cat")}`);

