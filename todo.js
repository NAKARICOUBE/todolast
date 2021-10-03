const toDoForm = document.getElementById("toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#toDoList");
const listBox = document.querySelector(".listBox");
const listToDo = document.querySelector(".listToDo");
const listCheck = document.querySelector(".listCheck");
const listMenuToDo = document.querySelector(".listMenuToDo");
const listMenuCheck = document.querySelector(".listMenuCheck");
const showList = document.querySelector(".showList");
const TODO_KEY = "todo";
const OPACITY_CLASS = "opacity";

let toDoArr = [];

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const username = localStorage.getItem(USER_KEY);
    const toDoObj = {
        value: newToDo,
        id: Date.now(),
        username: username,
    };
    toDoArr.push(toDoObj);
    paintToDo(toDoObj);
    saveToDo();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.value;
    const button = document.createElement("button");
    button.className = "fas fa-trash";
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function saveToDo(){
    localStorage.setItem(TODO_KEY, JSON.stringify(toDoArr));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDoArr = toDoArr.filter((item) => item.id != parseInt(li.id));
    saveToDo();
}

function handleToggleToDoCheck(e) {
    if(e === 0) {
        listToDo.classList.remove(HIDDEN_CLASS);
        listCheck.classList.add(HIDDEN_CLASS);
        listMenuToDo.style = "background-color: #2B2E31; color: white";
        listMenuCheck.style = "background-color: #3E4043";
    } else {
        listCheck.classList.remove(HIDDEN_CLASS);
        listToDo.classList.add(HIDDEN_CLASS);
        listMenuCheck.style = "background-color: #2B2E31; color: white";
        listMenuToDo.style = "background-color: #3E4043";
    }
}

handleToggleToDoCheck(0);


function handleToggleShowList() {
    listBox.classList.toggle(HIDDEN_CLASS);
    showList.classList.toggle(OPACITY_CLASS);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
showList.addEventListener("click", handleToggleShowList);
const savedToDos = localStorage.getItem(TODO_KEY);
if(savedToDos != null){
    const parsedToDos = JSON.parse(savedToDos);
    toDoArr = parsedToDos;
    parsedToDos.forEach(paintToDo);
} 


