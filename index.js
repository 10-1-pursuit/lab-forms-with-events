console.log("Code your solution!");

// const meta = document.createElement('meta');
// meta.httpEquiv = "X-UA-Compatible";
// meta.content = "IE=edge";
// document.head.appendChild(meta);

document.head.innerHTML += '<meta http-equiv="X-UA-..." content="IE=edge">';

const h1ForTitle = document.querySelector("#to-go");
//calling the argument on the object and receives a string
console.log("does it work?", h1ForTitle);
h1ForTitle.textContent = "06/23/23 To-Do List";
