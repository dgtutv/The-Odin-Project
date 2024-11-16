export default class DOM{
    constructor(){
        this.contentArea = document.querySelector("#content");
        this.addTaskBtn = document.querySelector("#addTask");
        this.addProjectBtn = document.querySelector("#addProject");
        this.newMenu = document.querySelector("#newMenu");

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
        this.newMenu.classList.remove("hidden");

        this.newMenu.innerHTML = `<input type="text" id="nameBox" placeholder="Task Name"></input>
        <!--Inspired by: https://stackoverflow.com/questions/19206919/how-to-create-checkbox-inside-dropdown-->
        <div id="projectList" class="checkedDropdown">
            <span class="projectAnchor"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>format-list-bulleted-square</title><path d="M3,4H7V8H3V4M9,5V7H21V5H9M3,10H7V14H3V10M9,11V13H21V11H9M3,16H7V20H3V16M9,17V19H21V17H9" /></svg> Select Projects</span>
            <ul class="items">
                <li><input type="checkbox">Test Item 1</li>
                <li><input type="checkbox">Test Item 2</li>
                <li><input type="checkbox">Test Item 3</li>
            </ul>
        </div>

        <textarea id="descriptionBox" placeholder="Task Description"></textarea>

        <div id="priorityList" class="checkedDropdown">
            <span class="projectAnchor"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>format-list-bulleted-square</title><path d="M3,4H7V8H3V4M9,5V7H21V5H9M3,10H7V14H3V10M9,11V13H21V11H9M3,16H7V20H3V16M9,17V19H21V17H9" /></svg> Select Priority</span>
            <ul class="items">
                <li><input type="checkbox">High</li>
                <li><input type="checkbox">Medium</li>
                <li><input type="checkbox">Low</li>
            </ul>
        </div>

        <button type="submit" id="submitTask" class="submit">Submit</button>`;

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