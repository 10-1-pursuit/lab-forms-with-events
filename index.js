const test = console.log

const body = document.querySelector("body")
const h1 = document.querySelector('h1')
const ul = document.querySelector("ul")
const form = document.querySelector("form")
const p = document.querySelector("p")
const listItems = document.getElementsByClassName("list_items")


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newLi = document.createElement("li");
    newLi.classList.add("list_items");

    const button = document.createElement("input")
    button.setAttribute('type', 'radio')
    button.classList.add("delete")
    newLi.appendChild(button)

    const listItemText = document.createElement("span");       //a <span> element is like an container but in line. for applying styles of manipulating text.
    const input = event.target["list"].value; // making my text a var so i can interact with it.
    (input === null || input === "") ? p.innerText = "error" :  listItemText.textContent = input;
    newLi.appendChild(listItemText)

    newLi.addEventListener("click", (event) => {                     
        newLi.style.textDecorationLine = "line-through";    // changing the text to strike through

        button.addEventListener("click", (event) => {       // deleting the li from the list with the button
            newLi.remove()                                          
        })
    newLi.addEventListener("dblclick", (event) => {        // removing the text decoration
           newLi.style.textDecorationLine = "none"
    })

    });
    ul.append(newLi)                   // adding the new li with span and button to the ul.

    setTimeout(() => {                  // adding a reset for the page
        form.reset();
    }, 3000);
})

