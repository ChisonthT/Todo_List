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
  listInput.setAttribute("id", "listName");
  listInput.setAttribute("type", "text");
  listInput.setAttribute("placeholder", "List Name");
  listInput.setAttribute("required", "");
  listInput.setAttribute("value", "List 1");
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
function refreshTodos(todoContainer, todoLists){
  todoContainer.innerHTML = "";

  /* Creates the todo list gui*/
  for (let i=0; i<todoLists.length; i++){
    let listContainer = document.createElement("div");
    listContainer.classList.add("list");
    listContainer.setAttribute("id", todoLists[i].name);
    todoContainer.appendChild(listContainer);

    let listTitle = document.createElement("button");
    listTitle.classList.add("todoTitles");
    listTitle.textContent = todoLists[i].name;
    listContainer.appendChild(listTitle);

    /* Creates todo gui*/
    for (let j=0; j<todoLists[i].todos.length; j++){
      
      let container = document.createElement("div");
      container.classList.add("todo");
      listContainer.appendChild(container);

      let todo = document.createElement("button");
      todo.classList.add("todoTitles");
      todo.textContent = todoLists[i].todos[j].title;
      container.appendChild(todo);

      let evrcontainer = document.createElement("div");
      evrcontainer.classList.add("evrcontainer");
      container.appendChild(evrcontainer);

      let infocontainer = document.createElement("div");
      infocontainer.classList.add("infocontainer");
      evrcontainer.appendChild(infocontainer);

      let btncontainer = document.createElement("div");
      btncontainer.classList.add("btncontainer");
      container.appendChild(btncontainer);

      let date = document.createElement("p");
      date.textContent = todoLists[i].todos[j].dueDate;
      infocontainer.appendChild(date);

      let priorityVal= document.createElement("p");
      priorityVal.textContent = todoLists[i].todos[j].priority;
      if (todoLists[i].todos[j].priority == "High"){
        priorityVal.classList.add("high");
      }
      else if (todoLists[i].todos[j].priority == "Medium"){
        priorityVal.classList.add("medium");
      }
      else if (todoLists[i].todos[j].priority == "Low"){
        priorityVal.classList.add("low");
      }
      infocontainer.appendChild(priorityVal);


      let desc = document.createElement("p");
      desc.textContent = todoLists[i].todos[j].description;
      evrcontainer.appendChild(desc);

      let editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("Edit");
      });
      btncontainer.appendChild(editButton);

      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function(event) {
        event.preventDefault();
        
        todoLists = deleteTodo(todoLists, i, j);
        refreshTodos(todoContainer, todoLists);
      });
      btncontainer.appendChild(deleteButton); 
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
  content.appendChild(inputContainer);

  let formContainer = document.createElement("div");
  formContainer.classList.add("container");
  formContainer.setAttribute("id", "formContainer");
  inputContainer.appendChild(formContainer);

  /* this will hold the todo list*/
  let todoContainer = document.createElement("div");
  todoContainer.classList.add("todoContainer");
  todoContainer.setAttribute("id", "todoContainer");
  content.appendChild(todoContainer);

  
  /* Adds the form to the input container */
  formContainer.appendChild(createForm());

  /* Create the button to create a new todo */
  let newTodo = document.createElement("button");
  newTodo.textContent = "New Todo";
  newTodo.setAttribute("id","newTodo");
  newTodo.addEventListener("click", function(event) {

    createTodo();
    event.preventDefault();
    
    
    let form = document.getElementById("form");
    let list = document.getElementById("listName").value;
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let priority = document.getElementById("priority").value;
    let dueDate = document.getElementById("dueDate").value;

    let found = false;
    for (let i=0; i<todoLists.length; i++) {
      if (todoLists[i].name == list){
        todoLists[i].todos.push(new Todo(list, title, 
          description, priority, dueDate, false));
        found = true;
        break;     
      }
    }

    if (!found) {
      todoLists.push(new TodoList(list));
      todoLists[todoLists.length-1].todos.push(new Todo(list, title, 
        description, priority, dueDate, false));
    }

    form.reset();

    
    refreshTodos(todoContainer, todoLists);

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
  
  let logo = document.createElement("img");
  logo.setAttribute("src", "./src/logo.png");
  logo.setAttribute("alt", "Logo");
  logoContainer.appendChild(logo);
  
  let navContainer = document.createElement("div");
  
  navContainer.classList.add("nav","container");
  navContainer.style.flex = "auto";
  
  let todoButton = document.createElement("button");
  todoButton.classList.add("navButton");
  todoButton.setAttribute("id","todoButton");
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