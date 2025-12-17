document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.login-form')
    const p1 = document.getElementById("pwd1")
    const p2 = document.getElementById("pwd2")
    const err = document.querySelector('.errorText')
    form.addEventListener('submit', (event) => {
        if(p1.value!==p2.value)
            {
            event.preventDefault()
            err.textContent = "Password doesn't match!"
            }
    })
})