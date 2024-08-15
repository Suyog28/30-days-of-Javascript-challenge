//Activity 1- Basic Event Handling

let TextElement = document.querySelector("p")
let btnElement = document.querySelector("button")

function handleChange() {
    TextElement.textContent = "This is updated text of Activity 1"
}

btnElement.addEventListener("click", handleChange)



let imgElement = document.querySelector("img")

let btnImgElement = document.querySelector("#btnImg")


btnImgElement.addEventListener("dblclick", () => {
    if (imgElement.style.display === "none") {
        imgElement.style.display = "block"
        btnImgElement.textContent = "Hide Image"
    } else {
        imgElement.style.display = "none"
        btnImgElement.textContent = "Show Image"
    }
})


//Activity 2 - Mouse Event

let bodyElement = document.querySelector("body")


TextElement.addEventListener("mouseover", () => {
    bodyElement.style.backgroundColor = "yellow"
})

TextElement.addEventListener("mouseout", () => {
    bodyElement.style.backgroundColor = ""
})

//Activity 3 - Keyboard Event

let text = document.querySelector("#inputText")

text.addEventListener("keydown", (e) => {
    console.log(e.target.value)
})

text.addEventListener("keyup", (e) => {
    TextElement.innerText = e.target.value
})

//Activity 4 - form events

let formElement = document.querySelector("#form")

formElement.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e.target.value)
})