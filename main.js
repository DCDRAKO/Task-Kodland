const nav= document.querySelector("#Navegacion");
const Abrir= document.querySelector("#Abrir-Menu");
const Cerrar= document.querySelector("#Cerrar-Menu");

Abrir.addEventListener("click",() =>{
    nav.classList.add("visible");
})
Cerrar.addEventListener("click",() =>{
    nav.classList.remove("visible");
})
