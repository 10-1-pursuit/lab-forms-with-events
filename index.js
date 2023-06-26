//console.log("Code your solution!")


const listDiv = document.querySelector("body")

const inputFromForm = document.querySelector('form')
    inputFromForm.addEventListener('submit', (event) => {

    console.log("event.target: ", event.target["item"].value)

    event.preventDefault()

    const inputList = document.createElement('li')

    inputList.textContent = event.target['item'].value

    listDiv.append(inputList)

    event.target.reset()
});