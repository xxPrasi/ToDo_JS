

let addButton = document.getElementById('add-button');
let todoInput = document.getElementById('todo-input'); //user-input
let todoList =  document.getElementById('todo-list'); //ul

addButton.addEventListener('click', function () {
    var list = document.createElement('li');
    list.innerHTML = todoInput.value;
    var deletebtn = document.createElement('button');
    deletebtn.innerHTML = "Delete";
    list.append(deletebtn);

    deletebtn.addEventListener('click', function() {todoList.removeChild(list,deletebtn)} );

    if(list.innerHTML !== ""){
        todoList.appendChild(list)
    }

    todoInput.value = "";
    list.addEventListener('click', function(){
        list.setAttribute('style','text-decoration:line-through;color:red;fontsize:12px;')
    })


})
