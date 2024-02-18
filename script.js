const username = document.getElementById('userEmail');
const pass = document.getElementById('userPassword');
const button = document.getElementById('button');
const form = document.getElementById('formuser')

let validEmail = 
let expReg = new RegExp("")
let expReg2 = //

form.addEventListener("submit", (e) => {
    e.preventDefault();  
    const userData = userEmail.value;
    console.log(userData)
    localStorage.setItem('datos del usuario', userData)

    const nombreLocalStorage = localStorage.getItem('datos del usuario');
    console.log(nombreLocalStorage);
})



