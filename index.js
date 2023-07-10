const form = document.getElementById("todo-form");
const list = document.getElementById("list");
const errorParagraph = document.getElementById("error");
let toDoList = document.querySelectorAll('li');

// function addDeleteButton() {
//     const deleteButtton = document.createElement('button');
//     deleteButtton.textContent = 'Delete';
//     deleteButtton.className = 'delete';
//     toDoList.forEach(function (toDo) {
//         toDo.after(deleteButtton);
//     });
// }

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const input = document.getElementById('todo-input');
    const todo = input.value;
    const listItem = document.createElement('li');

    if (todo === '') {
        errorParagraph.textContent = 'Error: Todo cannot be empty';
    } else {
        listItem.textContent = todo;
        list.appendChild(listItem);
        // addDeleteButton();
    }

});


list.addEventListener('click', function (event) {
    const target = event.target;
    if (target.style.textDecoration === 'line-through') {
        target.style.textDecoration = 'none';
    } else {
        target.style.textDecoration = 'line-through';
    }
});

