const cerrar = document.getElementById("btn");
const abrir = document.getElementById("btn-open");
const menu = document.getElementById("sidebar");
const btnClose = document.getElementById("btn-close");
const containerItems = document.getElementById("container-items");
const btnSaludo = document.getElementById("saludo");
const btnInicio = document.getElementById("inicio");
const btnFormulario = document.getElementById("formulario");
const viewForm = document.getElementById("formView");
const welconContainer = document.getElementById("welcome-Container");
const dataContainer = document.getElementById("dataContainer");


cerrar.addEventListener("click", cerrarMenu);
abrir.addEventListener("click", abrirMenu);
btnClose.addEventListener("click", cerrarWelcome);
btnSaludo.addEventListener("click", saludarBtn);
btnInicio.addEventListener("click", inicioContainer);
btnFormulario.addEventListener("click", formularioContainer);

function cerrarMenu() {
  cerrar.style.display = "none";
  abrir.style.display = "flex";
  abrir.style.marginLeft = "1.3rem";

  if (menu) {
    welconContainer.style.marginLeft = "25px";
    welconContainer.style.width = "65.8vw";
    menu.style.marginLeft = "-1000px";
    menu.style.transitionDuration = "1s";
  }
}

function abrirMenu() {
  cerrar.style.display = "flex";
  abrir.style.marginLeft = "-1000px";

  if (menu) {
    welconContainer.style.marginLeft = "12.8rem"
    menu.style.marginLeft = "-1px";
    menu.style.transitionDuration = "200ms";
  }
}

function cerrarWelcome() {
  btnClose.style.display = "none";

  if (containerItems) {
    containerItems.style.display = "none";
    containerItems.style.transitionDuration = ".3s";
    btnSaludo.style.display = "flex";
  }
}

function saludarBtn(){
  btnSaludo.style.display = "none";
  btnClose.style.display = "flex";

  if (btnSaludo){
    containerItems.style.display = "flex";
    containerItems.style.transitionDuration = ".3s";
  }
}

function inicioContainer(){
  btnInicio.style.background = "white";
  btnInicio.style.color = "#1e293b";

  if(btnInicio){
    viewForm.style.display = "none";
    dataContainer.style.display = "none";
    btnSaludo.style.display = "flex";
    btnFormulario.style.background = "#1e293b";
    btnFormulario.style.color = "white";
  }
}

function formularioContainer(){
  btnFormulario.style.background = "white";
  btnFormulario.style.color= "#1e293b";
  btnSaludo.style.display = "none";

  if(btnFormulario){
    viewForm.style.display = "grid";
    dataContainer.style.display = "grid";
    containerItems.style.display = "none";
    btnInicio.style.background = "#1e293b";
    btnInicio.style.color = "white";
  }
}