console.log("Code your solution!")

const body = document.querySelector("body")

const list = document.createElement("ul");
list.setAttribute("id", "todo-list");
body.appendChild(list);



const todoForm = document.querySelector("#add-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const errorParagraph = document.createElement("p");
errorParagraph.style.color = "red";
errorParagraph.style.display = "none"
errorParagraph.innerText = "Error: Todo cannot be empty!";
body.insertBefore(errorParagraph,list);


todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    todoText = todoInput.value.trim();
    if (todoText !== "") {
        const todoItem = document.createElement("li");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => todoItem.remove());
        todoItem.textContent = todoText;
        todoItem.appendChild(deleteButton)
        todoList.appendChild(todoItem);
        todoInput.value = "";
        errorParagraph.style.display = "none";
        todoItem.addEventListener("click", () => todoItem.style.textDecoration === "line-through" ? todoItem.style.textDecoration = "none" : todoItem.style.textDecoration = "line-through");
    } else {
        errorParagraph.style.display = "block"
    }
})
