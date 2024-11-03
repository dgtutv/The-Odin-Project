export default class Todo{
    priority;
    checklist;
    description;
    constructor(id, title, priority = "low", description = "", checklist = ""){
        this.id = id;
        this.title = title;
    }
    
    //remove();   //Find all lists containing this todo, and remove from each
}