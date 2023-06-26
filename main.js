document.querySelector("title").innerText = "Just Another Day";

const br = document.createElement("br");

const header = document.createElement("header");
header.innerText = "Have a Blessed day & Give Grace";
header.classList.add("header");
document.querySelector("body").appendChild(header);

const h1 = document.querySelector("h1");
h1.innerText = "06/24/23 Task List";

const form = document.createElement("form");
form.classList.add("list");
form.setAttribute("method", "post");
form.setAttribute("action", "submit.php");
document.querySelector("body").append(form);
form.style.boxShadow = "90px 84.44px 900px 400px teal";

const fieldset = document.createElement("fieldset");
fieldset.innerText = "TotD: Go easy on me =]";
form.appendChild(fieldset);

const label1 = document.createElement("label");
const label2 = document.createElement("label");

let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "task");
input.setAttribute("placeholder", "Task");
label1.appendChild(input);
form.appendChild(label1);
form.appendChild(br.cloneNode());

let s = document.createElement("input");
s.setAttribute("type", "submit");
s.setAttribute("value", "Submit");
s.setAttribute("id", "submit");
label2.appendChild(s);

form.append(label2);

const ul = document.createElement("ul");
//do something w this so its invisible upon page load
//addeventlistener

const div = document.createElement("div");
div.classList.add("Tasks-List");
s.setAttribute("target", "Tasks");
form.append(div);
div.append(ul);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  ul.innerText = event.target[".Tasks-List"];

  event.target.reset();
});
