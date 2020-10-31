var addTask = document.getElementById('add-button');
addTask.onclick = function(e){
    var task = document.getElementById("todo-input"); //user input
    var list = document.getElementById("todo-list"); //ul
    var li = document.createElement("li"); //li
    li.innerHTML = document.getElementById("todo-input").value; 
    var btn = document.createElement("button");
    btn.innerHTML = "X";
    li.append(btn); 
    
    btn.addEventListener('click', event =>list.removeChild(li, btn));
    if (li.innerHTML !== ""){
        list.appendChild(li) ;    
    }

    li.setAttribute('style', 'padding-bottom:10px; ');
    btn.setAttribute('style', 'margin-left:10px;');
    
    document.getElementById("todo-input").value=""; 
    li.addEventListener('click' , function(){
    li.setAttribute('style', 'color:red; text-decoration:line-through; padding-bottom:10px;  ');
    })
};
// function deleteTask(remove){
//     var remove = document.getElementById("todo-list");
//     remove.parentNode.removeChild(remove);
// }

