export default class Data{
    constructor(ListClass){
        this.ListClass = ListClass;
    }

    pull(id) {
        if(this.isPresent(id)){
            return JSON.parse(localStorage.getItem(id));
        } 
        else{
            let newList = new this.ListClass(id, Data);
            this.push(newList);
            return newList;
        }
    }

    push(list){
        localStorage.setItem(`${list.id}`, JSON.stringify(list));
    }

    isPresent(id){
        return localStorage.getItem(id) !== null;
    }
}