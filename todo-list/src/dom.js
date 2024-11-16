export default class DOM{
    constructor(){
        this.contentArea = document.querySelector("#content");
        this.addTaskBtn = document.querySelector("#addTask");
        this.addProjectBtn = document.querySelector("#addProject");

        //Upon task creation
        this.addTaskBtn.addEventListener('click', (e) => {
            this.destructAddList();
            this.renderAddTask();
        });
    }
    
    renderContents(list){

    }

    destructContents(){

    }

    renderLists(){  //Render the custom lists section

    }

    renderAddTask(){
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
    }

    destructAddTask(){

    }

    renderAddList(){

    }

    destructAddList(){
        console.log("Destruct add list called");
    }


}