let add_button = document.getElementById("add-button");

let todo_list = document.getElementById("todo-list");

let todo_input = document.getElementById("todo-input");

add_button.addEventListener("click", () => {
  if (todo_input.value) {
    let todo = document.createElement("li");
    let task = document.createElement("span");
    task.setAttribute("class", "task");

    task.addEventListener("mouseover", () => {
      task.setAttribute("style", "cursor:pointer");
    });

    task.addEventListener("click", () => {
      task.setAttribute("style", "text-decoration:line-through");
    });

    task.innerHTML = todo_input.value;
    let cross = document.createElement("button");
    cross.setAttribute("class", "cross");

    cross.innerHTML = "X";
    cross.addEventListener("click", () => {
      cross.parentElement.parentElement.parentElement.removeChild(todo);
    });

    let todo_div = document.createElement("div");
    todo_div.setAttribute("class", "todo_div");
    todo_div.appendChild(task);
    todo_div.appendChild(cross);
    todo.appendChild(todo_div);
    todo_list.appendChild(todo);
  }
  todo_input.value = "";
});
