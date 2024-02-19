const username2 = document.getElementById('newUserEmail');
const pass2 = document.getElementById('newPassword');
const pass3 = document.getElementById('newPassword2');

const validarEmail2= (email)=> {
    const expReg = new RegExp(/^[\w.-]+@[a-z0-9.-]+\.[a-z]{2,3}$/);
    const username2 = document.getElementById('newUserEmail');
    if(username2.value && !expReg.test(username2.value)) {
        alert(`el email insertado no es correcto en formato`);
        username2.value = "";
        return;
    }
        alert(`Bienvenido`)
}

const button2 = document.getElementById('button2');
button2.addEventListener("click", validarEmail2);

const form2 = document.getElementById('formnew')
form2.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem('Nuevo usuario ', userData2)
    window.location.href = "index.html";
    const miStorage = localStorage.getItem('Nuevo usuario');
    console.log(miStorage);
});