const dontBodyShameMe = document.querySelector("body")
const headingOne = document.querySelector("h1")
headingOne.textContent = "My To-Dos"
const newForm = document.querySelector("form")
const submit = document.getElementById("submitButton")
const unorderedList = document.querySelector("ul")

const toDoListDiv = document.querySelector("div")

const newItemForList = document.querySelector("p")
const imageUploaded = document.querySelector("image")






// toDoListDiv.append(newForm)

newForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const myLi = document.createElement("li")
    myLi.classList.add("newList")
    myLi.innerText = event.target["ToDo"].value
    myLi.append(newItemForList)


    myLi.addEventListener("click", (event) => {
        myLi.style.textDecorationLine = "line-through"

    })
    myLi.addEventListener("dblclick", (event) => {

        myLi.innerText = ""

    })

    unorderedList.append(myLi)
    setTimeout(newForm.reset(), 3000)

})

const listItems = document.getElementsByClassName("newList")

console.log(listItems)






