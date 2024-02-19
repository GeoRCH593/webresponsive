const username2 = document.getElementById('newUserEmail');
const pass2 = document.getElementById('newPassword');
const pass3 = document.getElementById('newPassword2');
const button2 = document.getElementById('button2');
const form2 = document.getElementById('formnew')


const validarEmail= (email)=> {
    const expReg = new RegExp(/^[\w.-]+@[a-z0-9.-]+\.[a-z]{2,3}$/);
    const username = document.getElementById('newUserEmail');
    if(username.value && !expReg.test(username.value)) {
        alert(`el email insertado no es correcto en formato`);
        username2.value = "";
        return;
    }
        alert(`Llenar el correo electrónico`)
}
document.getElementById("button2").addEventListener("click", validarEmail)


form2.addEventListener("submit", (e) => {
    e.preventDefault();
    const userData2 = newUserEmail.value;
    console.log(userData2)
    localStorage.setItem('datos nuevos del usuario', userData2)
    window.location.href = "index.html";
    const nombreLocalStorage = localStorage.getItem('datos nuevos del usuario');
    console.log(nombreLocalStorage);
})




