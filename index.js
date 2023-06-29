// console.log("Code your solution!")


// const myToDoListDiv= document.querySelector("div")


// const formForNewItem=document.querySelector("form")
// myToDoListDiv.addEventListener("submit",(event)=>{

    
 
//  const newErrandForList= document.createElement("p")
//  newErrandForList.innerText=event.target["to-do-action"].value
//  event.preventDefault()

// //  event.target.reset()

//  myToDoListDiv.append(newErrandForList)
// })



 const myList=document.querySelector("div")
 const newForm= document.querySelector("form")
newForm.addEventListener("submit",(e)=>{
    console.log(e.target["to-do-action"].value)
    e.preventDefault()

 const errands= document.createElement("p")
 errands.innerText=e.target["to-do-action"].value
 errands.className="newList"
 myList.append(errands)


 e.target.reset()
 newForm.reset()
 e.target["to-do-action"].value=""})
 

 const strikeThrough= document.querySelector("p.newList")

   strikeThrough.addEventListener("click",(e)=>{

       [e].style.textDecoration='line-through';


      myList.append(strikeThrough)

     })

 
 
// const listEdit=document.querySelector("div")
// const strikeThrough= document.querySelector("div#list")
// strikeThrough.addEventListener("click",(e)=>{

//     e.target.style

//     listEdit.append(strikeThrough)


// })





















