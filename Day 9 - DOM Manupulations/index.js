//Activity 1 - Selecting and Manupulating Element

const h1El = document.getElementById("name")

h1El.textContent = "Chaitali Muley"

const headEl = document.getElementsByClassName("heading")[0]

headEl.style.backgroundColor = 'red';

for (var i = 0; i < headEl.length; i++) {
    // Change the background color of each element
    headEl[i].style.backgroundColor = 'yellow';
}


//Activity 2 - Creating and Appending Element

let divElement = document.createElement("div")
divElement.textContent = "Shindi Bk"

document.body.append(divElement)


let listElement = document.getElementById("nameOfList")

let LIElement = document.createElement("li")
LIElement.textContent = 4

listElement.appendChild(LIElement)


//Activity 3 - Removing Elements

h1El.remove()

listElement.removeChild(listElement.lastChild)

//Activity 4 - Modifying Attribute and Classes

let imgElement = document.querySelector("img")

imgElement.src = "Arctitecture.jpg"

let changeElement = document.getElementById("myElement")

changeElement.classList.add("newClass")

//Activity 5 - Event Handling


let btnElement = document.getElementById("btn")
let PElement = document.getElementById("text")

function handleClick(){
    PElement.textContent = "Welcome Suyog"
}

btnElement.addEventListener("click", handleClick)

changeElement.addEventListener("mouseover", ()=>{
    changeElement.classList.add("changeBorderColor")
})