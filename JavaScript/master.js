// Variables
let submitBtn = document.querySelector("button")
let thanksBox = document.querySelector(".thanks-box")
let rateNumbers = document.querySelector(".rate-numbers")
let theRateNumber = document.querySelector(".selected")
let numberOfInputsAndLabels = 5

// Action
for(let i = 1; i <= numberOfInputsAndLabels; i++) {
    let input = document.createElement("input")
    input.id = `radio${i}`
    input.dataset.number = `${i}`
    let label = document.createElement("label")
    label.textContent = i
    label.htmlFor = `radio${i}`

    document.querySelector(".rating").appendChild(input)
    document.querySelector(".rating").appendChild(label)
}

// Variables
let radioBtn = document.querySelectorAll("input")
let lengthOfRateNumbers = radioBtn.length

// Action
radioBtn.forEach(ele => {
    ele.type = "radio"
    ele.name = "radio"
})

submitBtn.addEventListener("click", (e) => {
    radioBtn.forEach(ele => {
        if (ele.checked === true) {
            document.querySelector(".rate-box").remove()
            theRateNumber.innerHTML = ele.getAttribute("data-number")
            rateNumbers.innerHTML = lengthOfRateNumbers
            thanksBox.style.display = "block"
        }
    })
})