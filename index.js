const dontBodyShameMe = document.querySelector("body")
const headingOne = document.querySelector("h1")
headingOne.textContent = "My To-Dos"
const newForm = document.querySelector("form")
const submit = document.getElementById("submitButton")
const unorderedList = document.querySelector("ul")

const toDoListDiv = document.querySelector("div")

const newItemForList = document.querySelector("p")






// toDoListDiv.append(newForm)

newForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const liEvent = document.createElement("li")
    liEvent.classList.add("newList")
    liEvent.innerText = event.target["toDoList"].value

    liEvent.addEventListener("click", (event) => {
        liEvent.style.texDecorationLine = "line-through";

    })

    liEvent.addEventListener("mouseover", (event) => {
        liEvent.style.color = "black";

    })

    unorderedList.append(liEvent)
    setTimeout(newForm.reset(), 3000)

})


const listItems = document.getElementsByClassName("newList")

console.log(listItems)




