// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header')
// console.log(headerTitle)
// // headerTitle.textContent = 'Hello'
// // headerTitle.innerText = 'Goodbye'
// header.style.border = '3px solid #000'

let items = document.getElementsByClassName('list-group-item')
console.log(items)
console.log(items[1])
items[1].textContent = 'Hello 2'
items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'green'
items[2].style.backgroundColor = 'green'
for (let i = 0; i < items.length; i++) {
    items[i].style.fontWeight = 'bold'
}

document.getElementsByClassName('title')[0].style.fontWeight = 'bold'
document.getElementsByClassName('title')[0].style.color = 'green'

// document.getElementsByTagName('li')[4].style.backgroundColor = 'red'
document.getElementsByClassName('list-group-item')[4].style.backgroundColor = 'red'

let header = document.querySelector('#main-header')
header.style.borderBottom = '4px solid #ccc'

let titles = document.querySelectorAll('.title')

document.querySelectorAll('.list-group-item')[1].style.color = 'green'

let odd = document.querySelectorAll('li:nth-child(odd)')
let even = document.querySelectorAll('li:nth-child(even)')

for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'green' 
    even[i].style.backgroundColor = 'aqua' 
}

