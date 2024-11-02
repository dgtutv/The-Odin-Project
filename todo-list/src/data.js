import List from "./list.js";


//TODO: prevent 
class Data{
    pull(id){
        if(localStorage.getItem(id) !== null){
            return JSON.parse(localStorage.getItem(id));
        }
        else{
            return new List(id);
        }
    }
    push(list){
        localStorage.setItem(`${list.id}`, JSON.stringify(list));
    }
}