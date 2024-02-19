const username = document.getElementById('userEmail');
const pass = document.getElementById('userPassword');
const button = document.getElementById('button');
const form = document.getElementById('formuser')


const validarEmail= (email)=> {
    const expReg = new RegExp(/^[\w.-]+@[a-z0-9.-]+\.[a-z]{2,3}$/);
    const username = document.getElementById('userEmail');
    if(username.value && !expReg.test(username.value)) {
        alert(`el email insertado no es correcto en formato`);
        username.value = "";
        return;
    }
        alert(`Bienvenido`)
}

document.getElementById("button").addEventListener("click", validarEmail);

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const userData = userEmail.value;
    console.log(userData)
    localStorage.setItem('Usuario ', userData)
    window.location.href = "index.html";
    const nombreLocalStorage = localStorage.getItem('datos del usuario');
    console.log(nombreLocalStorage);
})


