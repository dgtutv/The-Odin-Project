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
            const projectList = document.querySelector("#projectList");
            projectList.getElementsByClassName('projectAnchor')[0].onclick = function(e){
                if (projectList.classList.contains('visible')){
                    projectList.classList.remove('visible');
                }
                else{
                    projectList.classList.add('visible');
                }              
            }

            const priorityList = document.querySelector("#priorityList");
            priorityList.getElementsByClassName('projectAnchor')[0].onclick = function(e){
                if (priorityList.classList.contains('visible')){
                    priorityList.classList.remove('visible');
                }
                else{
                    priorityList.classList.add('visible');
                }              
            }
        });
    }
    
    renderContents(list){

    }
    destructContents(){

    }
    renderLists(){  //Render the custom lists section

    }

    
}