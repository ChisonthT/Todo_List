import "/src/modules/style.css";
import {header, resetPage, homePage, todoPage} from "./modules/siteUi.js";


function test() {
    /* Test data */
    document.getElementById("todoButton").click();

    document.getElementById("listName").value = "Groceries";
    document.getElementById("title").value = "Milk";
    document.getElementById("description").value = "Get 2%";
    document.getElementById("dueDate").value = "2021-12-14";
    document.getElementById("newTodo").click();

    document.getElementById("listName").value = "Groceries";
    document.getElementById("title").value = "Eggs";
    document.getElementById("description").value = "Get brown";
    document.getElementById("dueDate").value = "2022-11-25";
    document.getElementById("newTodo").click();

    document.getElementById("listName").value = "Chores";
    document.getElementById("title").value = "Laundry";
    document.getElementById("description").value = "Only whites";
    document.getElementById("priority").value = "Low";
    document.getElementById("dueDate").value = "2024-12-14";
    document.getElementById("newTodo").click();

    document.getElementById("listName").value = "Creases";
    document.getElementById("title").value = "Milk";
    document.getElementById("description").value = "Get 2%";
    document.getElementById("dueDate").value = "2021-12-14";
    document.getElementById("newTodo").click();

    document.getElementById("listName").value = "Creases";
    document.getElementById("title").value = "Eggs";
    document.getElementById("description").value = "Get brown";
    document.getElementById("priority").value = "Medium";
    document.getElementById("dueDate").value = "2022-11-25";
    document.getElementById("newTodo").click();

    document.getElementById("listName").value = "Creases";
    document.getElementById("title").value = "Laundry";
    document.getElementById("description").value = "Only whites";
    document.getElementById("priority").value = "Low";
    document.getElementById("dueDate").value = "2024-12-14";
    document.getElementById("newTodo").click();

}


header();
homePage();
test();




