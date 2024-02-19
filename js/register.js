const validarEmail2= ()=> {
    const expReg = new RegExp(/^[\w.-]+@[a-z0-9.-]+\.[a-z]{2,3}$/);
    const username2 = document.getElementById('newUserEmail');
    if(username2.value && !expReg.test(username2.value)) {
        alert(`el email insertado no es correcto en formato`);
        username2.value = "";
        return;
    } 

    const pass1 = document.getElementById("newPassword");
    const pass2 = document.getElementById("newPassword2");
    if(pass1 !== pass2) {
        alert("la contraseña no es la misma")
    } 

}

const button2 = document.getElementById('button2');
button2.addEventListener("click", validarEmail2);

const form2 = document.getElementById('formnew')
form2.addEventListener("submit", (e) => {
    e.preventDefault();
    const username2 = document.getElementById("newUserEmail").value;
    localStorage.setItem('usuario', username2);
    const miStorage = localStorage.getItem("usuario");
    console.log(miStorage);
    window.location.href = "index.html";
});
