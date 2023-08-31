const input = document.querySelector(".login-input")
const button = document.querySelector(".login-button")

const validateInput = (event) => {
    console.log(event.target.value)
}
input.addEventListener("input", validateInput)
