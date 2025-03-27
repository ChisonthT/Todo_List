import "/src/modules/style.css";
import {header, resetPage, homePage, todoPage} from "./modules/siteUi.js";


function test() {
    /* Test data */
    document.getElementById("listName").value = "Groceries";
    document.getElementById("title").value = "Milk";
    document.getElementById("description").value = "Get 2%";
    document.getElementById("newTodo").click();

    document.getElementById("listName").value = "Groceries";
    document.getElementById("title").value = "Eggs";
    document.getElementById("description").value = "Get brown";
    document.getElementById("newTodo").click();

    document.getElementById("listName").value = "Chores";
    document.getElementById("title").value = "Laundry";
    document.getElementById("description").value = "Only whites";
    document.getElementById("newTodo").click();

}


header();
/* homePage();*/
todoPage();
test();




