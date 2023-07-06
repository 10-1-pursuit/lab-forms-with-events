console.log("Code your solution!")


const toDo = document.querySelector("#list");
const addToDo = document.querySelector("form");
addToDo.addEventListener("submit", (event)=>{
    event.preventDefault();
    const pTag = document.querySelector("p")
    if (event.target["todos"].value === "" || null){
        pTag.innerText = "Error! To-Do cannot be empty!!!"
    }
    else {
    const newToDoUl = document.createElement("li")
    newToDoUl.innerText  = event.target["todos"].value
    toDo.append(newToDoUl)
    event.target.reset()
    };
    const listItem = document.querySelector("li")
        addToDo.addEventListener("click", (event)=>{
        listItem.style.textDecorationLine="line-through";
});
})

