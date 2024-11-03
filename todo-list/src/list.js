import Todo from "./todo.js";

export default class List {
    constructor(id, DataClass){
        this.id = id;
        this.todos = [];    //Our array of todo items
        this.dataHandler = new DataClass(List);
        this.dataHandler.push(this);
    }

    add(id, title, priority = "low", description = "", checklist = ""){
        this.todos.push(new Todo(id, title, priority, description, checklist));
        this.dataHandler.push(this); // Update localstorage
    }

    remove(id){
        //ID of the todo to remove (called from todo item)
    }
}