//console.log("Code your solution!")

// Get the form, input, error message, and todo list elements
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const errorMessage = document.getElementById('error-message');
const todoList = document.getElementById('todo-list');

// Function to create a new todo item and add it to the list
function addTodoItem(text) {
    // Create a new li element
    const todoItem = document.createElement('li');

    // Set the text of the li element
    todoItem.textContent = text;

    // Add event listener to mark the item as completed when clicked
    todoItem.addEventListener('click', function () {
        todoItem.classList.toggle('completed');
    });

    // Append the li element to the todo list
    todoList.appendChild(todoItem);
}

// Event listener for the form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission from refreshing the page

    const todoText = input.value.trim(); // Get the value of the input and remove leading/trailing whitespace

    if (todoText !== '') {
        addTodoItem(todoText); // Add the todo item
        input.value = ''; // Clear the input field
        errorMessage.textContent = ''; // Clear the error message
    } else {
        errorMessage.textContent = 'Error. Todo cannot be empty'; // Display error message
    }
});
