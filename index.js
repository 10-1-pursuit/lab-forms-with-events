//Get the necessary elements from the HTML
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const errorMessage = document.getElementById("error-message");
const todoList = document.getElementById("todo-list");

//Add event listener to the form when submitted
todoForm.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent form submission

  const todoText = todoInput.ariaValueMax.trim();

  if (todoText !== "") {
    //create a new item
    const todoItem = document.createElement("li");
    todoItem.textContent = todoText;

    //add event listener to the list item
    todoItem.addEventListener("click", function () {
      this.style.textDecoration = "line-through";
    });
    //append to the list item to the todo list
    todoList.appendChild(todoItem);

    //clear the input field
    todoInput.value = "";
    errorMessage.textContent = ""; //clear error message if present
  } else {
    errorMessage.textContent = "Error. Todo cannot be empty";
  }
});
