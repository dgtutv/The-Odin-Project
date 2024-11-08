import "./styles.css";
import List from "./list.js";
import Data from "./data.js";
import DOM from "./dom.js";

//If first time starting application, create the legacy list sections
let dataHandler = new Data(List);
let myDay = dataHandler.pull("myDay");
let important = dataHandler.pull("important");
let allTodos = dataHandler.pull("allTodos");


//Start off in My Day section, render its contents
let domHandler = new DOM;
let currentList = myDay;
domHandler.renderContents(currentList);

//TODO: prevent user from creating two lists with the same name, cant do in this class (use isPresent)

//When a user clicks any button other than add list, take the ID and use that to pull the JSON associated with said list