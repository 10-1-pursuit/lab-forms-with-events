const form = document.getElementById("todoForm"); // getElementById is straightforward and gets the unique ID attribute
const todoInput = document.querySelector("input[type='text']"); // querySelector is more versatile by allowingyou to select elements using CSS selectors
const errorMessage = document.getElementById("error-message");
const todoList = document.getElementById("todoList");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevents the form from refreshing the page after submitting.
    const todoText = todoInput.value; // get the value of the text that the user inputted

    // console.log("Todo Text:", todoText); 

    if (todoText === '') {  // check if todoText is an empty string
        errorMessage.textContent = "Error: Todo submission cannot be empty."; // if empty, it means user didnt enter any input so display this error message
        // errorMessage.style.display = "block";
        return; // exit the event listener function
    }

    const newTodo = document.createElement("li"); // create a new list item creating <li> element
    const todoTextElement = document.createElement("span");
    newTodo.textContent = todoText; // the new element created gets the text contents of it set to user input

    newTodo.addEventListener("click", () => { // when the todo item is clicked, the event listener function is executed
        if (newTodo.style.textDecoration === 'line-through') {// checks if the textcontent of the li element has a line through decoration
            newTodo.style.textDecoration = "none"; // if the item the user clicked has a line then set it to non instead of line-through
        } else {
            newTodo.style.textDecoration = "line-through"; // set it to line if not
        }
            // console.log("Todo crossed out:", newTodo.textContent);
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    newTodo.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
        newTodo.remove();
    });

    // console.log("New Todo:", newTodo);

    todoList.appendChild(newTodo); // the new user input item is added as the last child of the todoList
    todoInput.value = ''; // this basically removes the text that was entered by the user by setting the value of todoInput to an empty string.
})
