export default class Todo{
    constructor(id, title, priority = "low", description = "") {
        this.id = id;
        this.title = title;
        this.priority = priority;
        this.description = description;
    }
    
    //remove();   //Find all lists containing this todo, and remove from each
}