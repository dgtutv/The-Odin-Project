export default List;
import Todo from "./todo.js";
import Data from "./data.js"

class List{
    constructor(id){
        this.id = id;
        this.todos = []     //Our array of todo items
    }

    add(id, title, priority = "low", description = "", checklist = ""){
        this.todos.push(new Todo(id, title, priority = "low", description = "", checklist = ""));
        data.push(this);    //Update localstorage
    }

    remove(id){     //ID of the todo to remove (called from todo item)

    }
}