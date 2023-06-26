document.querySelector("title").innerText = "Just Another Day";

const header = document.createElement('header')
header.innerText = 'Have a great day & spread Grace';
header.classList.add('header')
document.querySelector('body').appendChild(header)


const h1 = document.querySelector("h1");
h1.innerText = "06/24/23 Task List";


document.createElement('label')

const form = document.createElement("form");
form.setAttribute("method", "post")
form.setAttribute("action", "submit.php")
document.querySelector("body").append(form);

const list = document.createElement("p");
document.querySelector("form").append(list);

list.classList.add('list');
list.innerText = 'TotD: Go easy on me =]'
list.style.boxShadow = '10px 4.44px 10px 3px teal';


