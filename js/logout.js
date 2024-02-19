
const removerId = document.getElementById("logout");
removerId.addEventListener("click", () => {
    window.localStorage.removeItem('usuario');
    window.localStorage.clear();
    window.location.href = "login.html";
})