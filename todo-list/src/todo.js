export default class Todo{
    constructor(id, title, priority = "low", description = "", checklist = "") {
        this.id = id;
        this.title = title;
        this.priority = priority;
        this.description = description;
        this.checklist = checklist;
    }
    
    //remove();   //Find all lists containing this todo, and remove from each
}