const menu = document.getElementById('menu')
const list = document.getElementById('list')

const content = document.getElementById('content')
const dropdown = document.getElementById('dropdown')
const dropdownContent = document.getElementById('dropdown-content')


function toggleMenu(){
    if (list.classList.contains("hidden")) {
        list.classList.remove("hidden");
      } else {
        list.classList.add("hidden");
      }
    }
    

menu.addEventListener('click', toggleMenu)

function toggleContent(){
    if (dropdown.classList.contains('hidden')){
        dropdown.classList.remove('hidden')
        list.classList.add('hidden')
      
    } else {
        dropdown.classList.add('hidden')

    }
}

content.addEventListener('click', toggleContent)