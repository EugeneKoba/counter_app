// Capturing each button within js
let counterEl = document.querySelector("#number-el")
let incrementBtn = document.querySelector("#increment-btn")
let decrementBtn = document.querySelector("#decrement-btn")
let refreshBtn = document.getElementById("refresh-btn")
// Counter will always start at 0
let currentResult = 0

// Functions

incrementBtn.addEventListener("click", function() {
    currentResult += 1 // adds 1 for every time the increment button is clicked
    counterEl.innerHTML = currentResult
})

decrementBtn.addEventListener("click", function() {
    currentResult -= 1 // takes away 1 for every time the decrement button is clicked
    counterEl.innerHTML = currentResult
})

refreshBtn.addEventListener("click", function() {
    currentResult = 0 // resets the countEl variable to 0 when the refresh button is clicked
    counterEl.innerHTML = currentResult
})

// I used an addEventListener to each button, to either increase, decresde or reset the counterEl variable respectively.