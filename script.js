<script>
    let addToDoButton = document.getElementById('add-button');
    let toDoList = document.getElementById('todo-list');
    let todoInput = document.getElementById('todo-input');

    addToDoButton.addEventListener('click', function(){
    
        var list = document.createElement('li');
        list.innerText = todoInput.value;
        toDoList.appendChild(list);
        todoInput.value = "";
        
        list.addEventListener('click', function(){
            list.style.textDecoration = "line-through";
            list.style.color = "red"; 
        })
        
        var listBtn = document.createElement('button');
        listBtn.innerHTML = "X";
        listBtn.style.fontSize = "xx-small";
        list.appendChild(listBtn);
        listBtn.addEventListener ("click", function() {
            toDoList.removeChild(list);
        });
    
    })

    </script>