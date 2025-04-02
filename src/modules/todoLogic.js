/*This will have all the logic for the todo list */

/* Factory to create todo objects */
let Todo = function (list, title, description, priority, dueDate, completed) {

    let todo = {};
  
    todo.list = list;
    todo.title = title;
    todo.description = description;
    todo.priority = priority;
    todo.dueDate = dueDate;
    todo.completed = completed;
  
    return todo;
  }

/* Factory to create todo list objects */
let TodoList = function (name) {

    let todoList = {};
  
    todoList.name = name;
    todoList.todos = [];
  
    return todoList;
  }
  
function deleteTodo(todoLists, i, j) {
  for (let i=0; i<todoLists.length; i++) {
    if (todoLists[i].name == listName){
      for (let j=0; j<todoLists[i].todos.length; j++) {
        if (todoLists[i].todos[j].title == target){
          todoLists[i].todos.splice(j,1);
        }
      }
    }
  }

  todoLists[i].todos.splice(j, 1);

  
  localStorage.setItem("todoLists", JSON.stringify(todoLists));
  
  return todoLists;
    
}

export {Todo, TodoList, deleteTodo};