export default class DOM{
    constructor(){
        this.contentArea = document.querySelector("#content");
        this.addTaskBtn = document.querySelector("#addTask");
        this.addProjectBtn = document.querySelector("#addProject");

        this.addTaskBtn.addEventListener('click', function(e){
            /*Create menu
                Name of task
                Dropdown with all projects to add it to, with checkboxes
                Description
                Priority dropdown; low, medium, high
                Checklist, user enters in checkbox, each time they press enter it gets added to the list
            */
        });
    }
    
    renderContents(list){

    }
    destructContents(){

    }
    renderLists(){  //Render the custom lists section

    }

    
}