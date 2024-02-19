const formUpdate = document.getElementById('formUpdate');
const updatedatos = (email)=> {
    console.log(email)   
    localStorage.clear();
    localStorage.setItem("usuario", email);
    const usuario = document.getElementById("usuario");
    usuario.innerText = email;
}

const validatedata = (email, names, carrer) => {
    const expReg = new RegExp(/^[\w.-]+@[a-z0-9.-]+\.[a-z]{2,3}$/);
    if(email == !expReg.test(email)) {
        return false;
    }
    if (names === null || names == undefined || names == "") {
        return false;
    }
    if(carrer === null || carrer == undefined || carrer == "") {
        return false;
    }
    return true;
}

formUpdate.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputEmail = document.getElementById("inputEmail")
    const names = document.getElementById("inputName");
    const carrer = document.getElementById("inputMaster");
    if (validatedata(inputEmail.value, names.value, carrer.value)) {
        updatedatos(inputEmail.value);    
    }else {
        alert("Error ingrese la data correcta")
    };
});


