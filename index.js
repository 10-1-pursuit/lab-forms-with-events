console.log("Code your solution!")

const input = document.getElementById('input')
const list = document.getElementById('list-container')
const submitBtn = document.getElementById('submit')

submitBtn.addEventListener('click', e => {
    if (input.value === ''){
        alert("You must enter something!");
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li)
    }
    input.value = "";
})


// const submitBtn = document.getElementById('submit')

// submitBtn.addEventListener('click', e => {
//     let newElement = document.createElement('li')

//     newElement.textContent = `${input}`
// })