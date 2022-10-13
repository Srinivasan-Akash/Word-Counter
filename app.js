let wrap = document.querySelector(".wrap")
let textArea = document.querySelector("textarea")
let letterCount = document.querySelector(".letter")
let wordCount = document.querySelector(".word")

for(let i = 0; i < 200; i++){
    let div = document.createElement("div")
    div.classList.add("tri")
    wrap.appendChild(div)
} 

textArea.addEventListener("keyup", () => {
    letterCount.innerText = textArea.value.length
    wordCount.innerText = textArea.value.trim().split(' ').length
})