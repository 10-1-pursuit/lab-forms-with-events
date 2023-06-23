const lists = document.querySelector("ul")
const paragraph = document.querySelector("p")

const forms = document.querySelector("form")



forms.addEventListener("submit", (event)=>{

event.preventDefault()

const item = document.createElement("li")

item.innerText = event.target["list-item"].value

if(event.target["list-item"].value === ""){
    paragraph.innerText = 'Error. Todo cannot be empty';
    
}else{
    lists.append(item)
}

event.target.reset()
});




let items = document.querySelectorAll("li")

for(let singleItem of items){

singleItem.addEventListener("click",(event)=>{
event.target.style["text-decoration"] = "line-through;"
})

}