export default class Data{
    constructor(ListClass){
        this.ListClass = ListClass;
    }

    pull(id) {
        if(this.isPresent(id)){
            return JSON.parse(localStorage.getItem(id));
        } 
        else{
            let newClass = new this.ListClass(id);
            this.push(newClass);
            return new this.ListClass(id);
        }
    }

    push(list){
        localStorage.setItem(`${list.id}`, JSON.stringify(list));
    }

    isPresent(id){
        return localStorage.getItem(id) !== null;
    }
}