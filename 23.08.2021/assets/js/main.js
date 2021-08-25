const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const addTodoButton = document.querySelector('#add-todo-button');
let counter = 0;

const listCreaterItem = todo => {
    let listObj = {
        id: ++counter,
        text: todo
    }
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.innerText = todo;
    todoList.append(listItem);
    listItem.setAttribute("id", listObj.id);
    listItem.setAttribute("draggable", true);
    listItem.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text", this.id)
    });
}

const clearItem = () => {
    todoInput.value = ""
}

todoInput.addEventListener("keydown", function (e) {
    switch (e.key) {
        case 'Enter':
            listCreaterItem(this.value);
            clearItem();
            break;
        default:
            break;

    }
});

addTodoButton.addEventListener("click", function () {
    listCreaterItem
    listCreaterItem(todoInput.value);
    clearItem();
});



const todos = document.querySelectorAll(".col-10");
const all_status = document.querySelectorAll(".col-4");
let draggableTodo = null;

todos.forEach((todo) => {
    todo.addEventListener("dragend", dragEnd);
});


function dragEnd() {
    draggableTodo = null;
    console.log('dragEnd');
};

all_status.forEach((status) => {
    status.addEventListener("dragover", dragOver);
    status.addEventListener("dragenter", dragEnter);
    status.addEventListener("dragleave", dragLeave);
});

function dragOver(e) {
    e.preventDefault();
};

function dragEnter(e) {
    console.log("dragEnter");;
};

function dragLeave(e) {
    console.log("dragLeave");;
};


let cols = Array.from(document.querySelectorAll(".col-4.header"))

cols.forEach((col) => {
    col.addEventListener("drop", function (e) {
        let getData = e.dataTransfer.getData("text")
        col.append(document.getElementById(getData));
    });

})


