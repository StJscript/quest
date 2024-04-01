function togglePasswordVision() {
    let psswInput = document.querySelector('.form__password')

    if (psswInput.type == "password")
        psswInput.type = "text"
    else
        psswInput.type = "password"
}


let form = document.querySelector("form");
function handleForm(event) {
    event.preventDefault();
}
form.addEventListener('sumbit', handleForm);

function successSign() {
    alert('Успешный вход')

    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"

    let title = document.querySelector('.main__title')
    let name = document.querySelector('.form__name')
    title.textContent = `Welcome, ${name.value}`

    let form = document.querySelector('.main__right')
    form.style.display = 'none'

    let main = document.querySelector('.main')
    main.style.display = 'block'
}

function alertForgotPssw() {
    alert('Забыли пароль?')
}