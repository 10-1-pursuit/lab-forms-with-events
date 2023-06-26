document.querySelector("title").innerText = "Just Another Day";

const br = document.createElement("br");
const ul = document.createElement("ul");

const header = document.createElement("header");
header.innerText = "Have a great day & spread Grace";
header.classList.add("header");
document.querySelector("body").appendChild(header);

const h1 = document.querySelector("h1");
h1.innerText = "06/24/23 Task List";

const form = document.createElement("form");
form.classList.add("list");
form.setAttribute("method", "post");
form.setAttribute("action", "submit.php");
document.querySelector("body").append(form);
form.style.boxShadow = "80px 44.44px 410px 444px teal";

const fieldset = document.createElement("fieldset")
fieldset.innerText = 'TotD: Go easy on me =]'
form.appendChild(fieldset);

let input = document.createElement("input");
input.setAttribute("type", "text");
//input.setAttribute("name", "text");
input.setAttribute("placeholder", "Task");

form.appendChild(input);
form.appendChild(br.cloneNode());

let s = document.createElement("input");
s.setAttribute("type", "submit");
s.setAttribute("value", "Submit");

form.append(s);
