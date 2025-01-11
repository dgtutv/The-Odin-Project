class Node{
    key = null;
    value = null;
    nextNode = null;
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
        console.log(returnString);
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

    head(){
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
}

class HashMap{
    constructor(loadFactor, capacity){
        this.buckets = new Array<LinkedList>[capacity];
        this.growNum = loadFactor * capacity;
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.populate();
    }

    //Helper function to populate buckets with empty linked lists
    populate(){
        for(let i=0; i<this.capacity; i++){
            if(this.buckets[i] === null){
                this.buckets[i] = new LinkedList;
            }
        }
    }

    //Helper function to re-organize the existing buckets to match the new capacity
    organize(){
        for(let i=0; i<this.capacity/2; i++){
            let currentBucket = this.buckets[i];
            if(currentBucket.head != null){
                let currentNode = currentBucket.head;
                while(currentNode != null){
                    let newIndex = hash(currentNode.key);
                    if(newIndex != i){
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
            if(currentBucket.head != null){
                returnString +=`\n ${i}: ${currentBucket.toString()}`;
            }
        }
        console.log(returnString);
        return returnString;
    }

    hash(key){
        let hashCode = 0;
        for(let i=0; i<key.length; i++){
            hashCode = (hashCode + key.charCodeAt(i)) % this.capacity;
        }
        return hashCode;
    }

    set(key, value){
        //Generate a hash index
        const index = hash(key);

        //If the new entry grows the capacity over growNum, double buckets, and update growNum
        if(this.capacity + 1 >= this.growNum){
            this.capacity *= 2;
            this.growNum = this.loadFactor * this.capacity;
            this.populate();
            this.organize();
        }

        //Else, find the correct bucket
        else{
            let bucket = this.buckets[index];

            //If there is a collision
            if(bucket.head != null){
                let currentNode = bucket.head;

                //If the key is present, update the value
                let tail;
                while(currentNode != null){
                    if(currentNode.key == key){
                        currentNode.value = value;
                    }
                    if(currentNode.nextNode == null){
                        tail = currentNode;
                    }
                    currentNode = currentNode.nextNode;
                }

                //If the key is not present, create a new Node, and add to the end of the bucket
                let newNode = new Node(key, value);
                tail.nextNode = newNode;
            }

            //If there is no collision, insert the new Node as the head of the corresponding bucket 
            else{
                let newNode = new Node(key, value);
                bucket.head = newNode;
            }

        }   
    }
}