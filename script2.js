const username2 = document.getElementById('newUserEmail');
const pass2 = document.getElementById('newPassword');
const pass3 = document.getElementById('newPassword2');
const form2 = document.getElementById('formnew')

form2.addEventListener("submit", (e) => {
    e.preventDefault();
    const userData2 = newUserEmail.value;
    console.log(userData2)
    localStorage.setItem('datos nuevos del usuario', userData2)

    const nombreLocalStorage = localStorage.getItem('datos nuevos del usuario');
    console.log(nombreLocalStorage);
})




