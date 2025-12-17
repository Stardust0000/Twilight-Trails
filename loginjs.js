

document.addEventListener('DOMContentLoaded', () => {

// form ref
const form = document.querySelector('.login-form')

const username = document.getElementById('usn')

const errText = document.querySelector('.errorText')

// submit listener
form.addEventListener('submit', (event) => {
    console.log("Form submitted")
    event.preventDefault()
    const userText = username.value.trim() 
    if (userText === "") {
        errText.textContent = "Empty field! Please enter you Username!"
    } else {
            // localStorage.setItem("username",usn)
        window.location.href = 'mainpage.htm'
    }
})

console.log("Js ran")
})



