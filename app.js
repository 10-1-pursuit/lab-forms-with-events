// Get the list element and the error message element.
const lists = document.querySelector("ul");

// Get the form element.
const forms = document.querySelector("form");

// Add an event listener to the form. When the form is submitted, this function will be called.
forms.addEventListener("submit", (event) => {
    // Prevent the form from submitting.
    event.preventDefault();

    // Create a new list item element.
    const item = document.createElement("li");

    // Set the text content of the list item to the value of the input field.
    item.textContent = event.target["inputField"].value;

    // Add item to list
    lists.append(item);

    // Reset the form.
    event.target.reset();

    // Get all of the list items.
    const items = document.querySelectorAll("li");

    // Adds  new text at end of curent text
    const newText = document.createTextNode(` "U Does'd It 💪🏾"`);


    // Loop through the list items.
    for (let singleItem of items) {
        // Add a click event listener to each list item. When the list item is clicked, add a strikethrough to the text and color green.
        singleItem.addEventListener("click", (event) => {
            event.target.style.textDecoration = "line-through";
            event.target.style.color = "green";
            event.target.appendChild(newText);
        });

        // Add a double-click event listener to each list item. When the list item is double-clicked, remove it from the list.
        singleItem.addEventListener("dblclick", (event) => {
            event.target.style.color = "red";
            event.target.remove();
        });
    }
});
