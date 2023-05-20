// // let headerTitle = document.getElementById('header-title');
// // let header = document.getElementById('main-header')
// // console.log(headerTitle)
// // // headerTitle.textContent = 'Hello'
// // // headerTitle.innerText = 'Goodbye'
// // header.style.border = '3px solid #000'

// let items = document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[1])
// items[1].textContent = 'Hello 2'
// items[1].style.fontWeight = 'bold'
// // items[1].style.backgroundColor = 'green'
// items[2].style.backgroundColor = 'green'
// for (let i = 0; i < items.length; i++) {
//     items[i].style.fontWeight = 'bold'
// }

// document.getElementsByClassName('title')[0].style.fontWeight = 'bold'
// document.getElementsByClassName('title')[0].style.color = 'green'

// // document.getElementsByTagName('li')[4].style.backgroundColor = 'red'
// document.getElementsByClassName('list-group-item')[4].style.backgroundColor = 'red'

// let header = document.querySelector('#main-header')
// header.style.borderBottom = '4px solid #ccc'

// let titles = document.querySelectorAll('.title')

// document.querySelectorAll('.list-group-item')[1].style.color = 'green'

// let odd = document.querySelectorAll('li:nth-child(odd)')
// let even = document.querySelectorAll('li:nth-child(even)')

// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = 'green' 
//     even[i].style.backgroundColor = 'aqua' 
// }


// Traversing DOM
let itemList = document.querySelector('#items')
// parentNode
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = 'gray'
// console.log(itemList.parentNode.parentNode)

// parentElement
// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor = 'gray'
// console.log(itemList.parentElement.parentElement)

// childNodes
// console.log(itemList.childNodes)
// console.log(itemList.children)
// itemList.children[1].style.backgroundColor = 'lightpink'

// firstChild
// console.log(itemList.firstChild)
// firstElementChild
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = 'Hello 1'

// nextSibling
// console.log(itemList.nextSibling)
// nextElementSibling
// console.log(itemList.nextElementSibling)

// previousSibling
// console.log(itemList.previousSibling)
// previousElementSibling
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color = 'purple'

// createElement
let newDiv = document.createElement('div')

// add class
newDiv.className = 'hello'
// add id
newDiv.id = 'hello1'
// add attribute
newDiv.setAttribute('title', 'Hello div')
// create text node
let newDivText = document.createTextNode('Hello World')
// add text to div
newDiv.appendChild(newDivText)

let container = document.querySelector('header .container')
let h1 = document.querySelector('header h1')
console.log(newDiv)

container.insertBefore(newDiv, h1)

let x = document.getElementById('items')
let y = document.createElement('h2')
y.className = 'greet'
y.textContent = 'Hello World'

x.insertBefore(y, x.firstChild)