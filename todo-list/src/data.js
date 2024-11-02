export default Data;

//TODO: prevent user from creating two lists with the same name, cant do in this class (use isPresent)
class Data{
    pull(id){
        if(this.isPresent(id)){
            return JSON.parse(localStorage.getItem(id));
        }
        else{
            return new List(id);
        }
    }

    push(list){
        localStorage.setItem(`${list.id}`, JSON.stringify(list));
    }

    isPresent(id){
        if(localStorage.getItem(id) !== null){
            return true;
        }
        else{
            return false;
        }
    }
}