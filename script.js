let headerTitle = document.getElementById('header-title');
let header = document.getElementById('main-header')
console.log(headerTitle)
// headerTitle.textContent = 'Hello'
// headerTitle.innerText = 'Goodbye'
header.style.border = '3px solid #000'

let items = document.getElementsByClassName('list-group-item')
console.log(items)
console.log(items[1])
items[1].textContent = 'Hello 2'
items[1].style.fontWeight = 'bold'
items[1].style.backgroundColor = 'yellow'
items[2].style.backgroundColor = 'green'
for (let i = 0; i < items.length; i++){
    items[i].style.fontWeight = 'bold'
}

document.getElementsByClassName('title')[0].style.fontWeight = 'bold'
document.getElementsByClassName('title')[0].style.color = 'green'

// document.getElementsByTagName('li')[4].style.backgroundColor = 'red'
document.getElementsByClassName('list-group-item')[4].style.backgroundColor = 'red'
