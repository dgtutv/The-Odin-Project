class Node{
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