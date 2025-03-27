import {Todo, TodoList, createTodo, deleteTodo} from "/src/modules/todoLogic.js"

function resetPage() {
  let content = document.getElementById("content");
  content.remove();

  let newContent = document.createElement("div");
  newContent.id = "content";
  document.body.appendChild(newContent);
}

function homePage() {
  let content = document.getElementById("content")

  let text = document.createElement("h1");
  text.textContent = "Welcome to the Todo List!";
  content.appendChild(text); 

}

function supportPage() {
  let content = document.getElementById("content")
  
  let search = document.createElement("input")
  search.setAttribute.id = "search";
  search.type = "text";  
  search.placeholder = "Search";

  content.appendChild(search);
}

function featuresPage() {
  let content = document.getElementById("content");

  let title = document.createElement("h1");
  title.textContent = "Features";
  content.appendChild(title);

  let text = document.createElement("p");
  text.textContent = "This is the features page. You will be able to create, edit , and delete a to do list.";
  content.appendChild(text);
}


/* Creates the form for a new todo */
function createForm() {
  let form = document.createElement("form");
  form.setAttribute("id", "form");
  
  let listLabel = document.createElement("label");
  listLabel.textContent = "List Name";
  form.appendChild(listLabel);
  
  let listInput = document.createElement("input");
  listInput.setAttribute("type", "text");
  listInput.setAttribute("id", "listName");
  listInput.setAttribute("placeholder", "List Name");
  listInput.setAttribute("required", "");
  form.appendChild(listInput);
  
  let titleLabel = document.createElement("label");
  titleLabel.textContent = "Title";
  form.appendChild(titleLabel);
  
  let titleInput = document.createElement("input");
  titleInput.setAttribute("id", "title");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("placeholder", "Title");
  titleInput.setAttribute("required", "");
  form.appendChild(titleInput);
  
  let descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = "Description";
  form.appendChild(descriptionLabel);
  
  let descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("id", "description");
  descriptionInput.setAttribute("type", "text");
  descriptionInput.setAttribute("placeholder", "Description");
  descriptionInput.setAttribute("required", "");
  form.appendChild(descriptionInput);
  
  let priorityLabel = document.createElement("label");
  priorityLabel.textContent = "Priority";
  form.appendChild(priorityLabel);
  
  let prioritySelect = document.createElement("select");
  prioritySelect.setAttribute("id", "priority");
  prioritySelect.setAttribute("required", "");
  prioritySelect.appendChild(new Option("High", "High"));
  prioritySelect.appendChild(new Option("Medium", "Medium"));
  prioritySelect.appendChild(new Option("Low", "Low"));
  form.appendChild(prioritySelect);

  let dueDateLabel = document.createElement("label");
  dueDateLabel.textContent = "Due Date";
  dueDateLabel.setAttribute("id", "dueDate"); 
  dueDateLabel.setAttribute("type", "text");
  dueDateLabel.setAttribute("required", "");
  form.appendChild(dueDateLabel);
  
  let dueDateInput = document.createElement("input");
  dueDateInput.setAttribute("id", "dueDate");
  dueDateInput.setAttribute("type", "date");
  dueDateInput.setAttribute("required", "");
  form.appendChild(dueDateInput);
  
  
  return form;
}

/* This will refresh the todos section of a page */
function refreshTodos(content, todoLists){
  for (let i=0; i<todoLists.length; i++){
    let list = document.createElement("div");
    list.setAttribute("id", todoLists[i].listName);
    for (let i=0; i<todoLists[i].length; i++){
      let todo = document.createElement("p");
      todo.textContent = todoLists[i].todos[i].title;
      list.appendChild(todo);
    }

    
  }
}

function todoPage() {

  /* This array will hold all the todo list objects */
  let todoLists = [];

  /* Create the main containers for the todo page */
  let content = document.getElementById("content");

  /* This will hold the input fields */
  let inputContainer = document.createElement("div");
  inputContainer.classList.add("container");
  inputContainer.setAttribute("id", "inputContainer");

  /* this will hold the todo list*/
  let todoContainer = document.createElement("div");
  todoContainer.classList.add("container");
  todoContainer.setAttribute("id", "todoContainer");

  content.appendChild(inputContainer);
  content.appendChild(todoContainer);

  /* Adds the form to the input container */
  inputContainer.appendChild(createForm());

  /* Create the button to create a new todo */
  let newTodo = document.createElement("button");
  newTodo.textContent = "New Todo";
  newTodo.addEventListener("click", function(event) {
    event.preventDefault();
    
    
    let form = document.getElementById("form");
    let list = document.getElementById("listName").value;
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let priority = document.getElementById("priority").value;
    let dueDate = document.getElementById("dueDate").value;

    let found = false;
    for (let i=0; i<todoLists.length; i++) {
      console.log(todoLists[i].list);
      console.log(listName);
      if (todoLists[i].listName === listName){
        todoLists[i].todos.push(new Todo(listName, title, 
          description, priority, dueDate, false));
        found = true;
        break;     
      }

      console.log(todoLists[i].listName == listName);
    }

    if (!found) {
      todoLists.push(new TodoList(listName));
      todoLists[todoLists.length-1].todos.push(new Todo(listName, title, 
        description, priority, dueDate, false));
    }

    form.reset();
    console.log(todoLists);

  });

  inputContainer.appendChild(newTodo);
  
}

function header() {
  let container = document.getElementById("header");
  container.classList.add("container"); 
  container.style.height = "100px";
  
  
  let logoContainer = document.createElement("div");
  logoContainer.classList.add("logo", "container");
  logoContainer.style.flexGrow = "2";
  let btn = document.createElement("button");
  btn.textContent = "Logo";
  logoContainer.appendChild(btn);
  
  let navContainer = document.createElement("div");
  navContainer.classList.add("nav","container");
  navContainer.style.flex = "auto";
  
  let todoButton = document.createElement("button");
  todoButton.classList.add("todoButton");
  todoButton.textContent = "To Do List";

  let featuresButton = document.createElement("button");
  featuresButton.classList.add("navButton");
  featuresButton.textContent = "Features";

  let supportButton = document.createElement("button");
  supportButton.classList.add("navButton");
  supportButton.textContent = "Support";  
  


  container.appendChild(logoContainer);
  container.appendChild(navContainer);
  navContainer.appendChild(todoButton);
  navContainer.appendChild(featuresButton);
  navContainer.appendChild(supportButton);


  featuresButton.addEventListener("click", function() {
    resetPage();
    featuresPage();
  });

  supportButton.addEventListener("click", function() {
    resetPage();
    supportPage();
  });

  logoContainer.addEventListener("click", function() {
    resetPage();
    homePage();
  });

  todoButton.addEventListener("click", function() {
    resetPage();
    todoPage();
  });
}



export {header, resetPage, homePage, todoPage};