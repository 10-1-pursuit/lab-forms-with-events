document.title = "Just Another Day";

const br = document.createElement("br");

const header = document.createElement("header");
header.textContent = "Have a Blessed day & Give Grace";
header.classList.add("header");
document.querySelector("body").appendChild(header);

const h1 = document.querySelector("h1");
h1.textContent = "06/24/23 Task List";

const form = document.createElement("form");
form.classList.add("list");
form.method = "post";
form.action = "submit.php";
document.querySelector("body").appendChild(form);
form.style.boxShadow = "90px 84.44px 900px 400px teal";

const fieldset = document.createElement("fieldset");
fieldset.textContent = "TotD: Go easy on me =]";
form.appendChild(fieldset);

const label1 = document.createElement("label");
const label2 = document.createElement("label");

let input = document.createElement("input");
input.type = "text";
input.id = "task";
input.placeholder = "Task";
label1.appendChild(input);
form.appendChild(label1);
form.appendChild(br.cloneNode());

let submitBtn = document.createElement("input");
submitBtn.type = "submit";
submitBtn.value = "Submit";
submitBtn.id = "submit";
label2.appendChild(submitBtn);

form.append(label2);

const ul = document.createElement("ul");
ul.style.display = "none";
//do something w this so its invisible upon page load
//addeventlistener

const div = document.createElement("div");
div.classList.add("Tasks-List");
div.append(ul);
form.append(div);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputTask = document.getElementById("task");
  const task = inputTask.value.trim();
  
  if (task !== '') {
 const li = document.createElement('li')
 li.textContent = task 
 ul.appendChild(li)
 ul.style.display = 'block'

 inputTask.value = '';
  
  }
  event.target.reset();
});
