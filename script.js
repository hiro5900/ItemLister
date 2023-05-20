let form = document.getElementById('addForm');
let itemList = document.getElementById('items')
let filter = document.getElementById('filter')


let addition = (e) => {
     e.preventDefault();
     
     let newItem = document.getElementById('item').value
     let li = document.createElement('li')
     li.className = 'list-group-item'
     li.appendChild(document.createTextNode(newItem))

     let deleteBtn = document.createElement('button')
     deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
     deleteBtn.appendChild(document.createTextNode('X'))

     let editBtn = document.createElement('button')
     editBtn.className = 'btn btn-sm float-right'
     editBtn.appendChild(document.createTextNode('Edit'))

     li.appendChild(editBtn)

     li.appendChild(deleteBtn)

     itemList.appendChild(li)
}
form.addEventListener('submit', addition)

let removeItem = (e) => {
     if(e.target.classList.contains('delete')){
          if(confirm('Are you sure ?')){
               let li = e.target.parentElement
               itemList.removeChild(li)
          }
     }
}

itemList.addEventListener('click', removeItem)

let filterItems = (e) => {
     let text = e.target.value.toLowerCase()
     let items = itemList.getElementsByTagName('li')

     Array.from(items).forEach((item) => {
          let itemName = item.firstChild.textContent
          if(itemName.toLowerCase().indexOf(text) != -1){
               item.style.display = 'block'
          }
          else{
               item.style.display = 'none'
          }
     })
}

filter.addEventListener('keyup', filterItems)


