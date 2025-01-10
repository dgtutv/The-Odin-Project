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

    
}

let list = new LinkedList;
list.toString();
list.append(4);
list.toString();
list.append(7);
list.toString();