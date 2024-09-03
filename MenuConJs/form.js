//Se declara el array principal
let registros = [];

//Se manda a llamar al formulario y se le agrega el evento "submit" y se delara una función y a la función se le transfiere al parámetro "event"
// y se usa prevenDefault para evitar que la información que se envía se mande a un servidor y que se quede en el JS
//Se manda a llamar a la función "guardarregistro()" para tomar la información que esta reciba
document.getElementById("formView").addEventListener("submit", function (event) {
    event.preventDefault();
    guardarRegistro();
});

//Se mandan a llamar a los elementos html en los que se ingresa la informacción y guarda en una variable, se toma la información que se les ingresa usando ".value"
// posteriormente se guardan las varibles en un array y se insertan en el array principal usando el método de inserción ".push(parámetros)" 
// Luego se manda a llamar a la función "mostrarRegistro()", se llama al formulario y se usa el método ".reset()" para que cada ve que se ingrese la información 
// y le dé al botón guardar se limpien los campos del formulario
function guardarRegistro() {
    const nameInput = document.getElementById("nombre").value;
    const lastNameInput = document.getElementById("last_name").value;
    const correoInput = document.getElementById("email").value;

    const registroEntrante = { nameInput, lastNameInput, correoInput };
    registros.push(registroEntrante);

    mostrarRegistro();

    document.getElementById("formView").reset();
}

// Se manda a llamar al contenedor en donde se va a mostrar la información ingresada en el formulario. Dicho contenedor solo tiene los titulos en el HTML
// posteriormente se ingresan los elementos HTML desde JS para que cada vez que se ingresen los datos en el array no se borren los titulos y sigan apareciendo en la parte superior del contenedor
// Como en la función anterior se reasigna los datos del array usando el método ".push(parametro)" se manda a llamar al array que contiene las variables que contienen las tags HTML
// y se itera en un "forEach()" y se le pasan los parámetros a utilizar, al array se le asigna un alias, y se le pasa también el parámetro index
// Adentro de la iteración del forEach se crean tags HTML "document.createElement('div);" y se guardan en una variable (Dicha tag es un contenedor dentro del HTML), 
// A dichas tags se les asigna una o más clases "nameVarible.className = "nameClass";"
// Luego se inserta al documento HTML otra tag para mostrar la información y se ingresa la información usando interpolación de cadenas para inyectar el array y el objeto correspondiente (variable de los Inputs que están en "guardarRegistros()")
// Se crea un botón (Ya tiene los estilos) y se le agrega un evento de escucha y se llama a la función "borrarRegistro(index)"
// Se agregan los elementos HTML al documento usando el método appendChild(), el cual se compone de 3 partes "dataContainer.appendChild(nameUser);" 
// "dataContainer" es el elemento padre/contenedor. ".appendChild()" agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.
// "nameUser" es el elemento hijo que se agrega dentro del elemento padre, es decir, es la variable final que contiene a la variable que contiene la información que se toma del formulario y que contiene todo lo que se itera en el "forEach"
function mostrarRegistro() {
    const dataContainer = document.getElementById("dataContainer");

    dataContainer.innerHTML = `
        <div class="titulos nombreTitle">
            <h3>Nombre</h3>
        </div>
        <div class="titulos apellidoTitle">
            <h3>Apellido</h3>
        </div>
        <div class="titulos correoTitle">
            <h3>Correo Electrónico</h3>
        </div>
        <div class="titulos opcionesTitle">
            <h3>Opciones</h3>
        </div>
    `;

    registros.forEach((registro, index) => {
        const nameUser = document.createElement('div');
        nameUser.className = 'info infoName';
        nameUser.innerHTML = `<p>${registro.nameInput}</p>`;
        
        const lastNameUser = document.createElement('div');
        lastNameUser.className = 'info infoLastName';
        lastNameUser.innerHTML = `<p>${registro.lastNameInput}</p>`;
        
        const correoUser = document.createElement('div');
        correoUser.className = 'info infoCorreo';
        correoUser.innerHTML = `<p>${registro.correoInput}</p>`;
        
        const btnDelete = document.createElement('div');
        btnDelete.className = 'info infoDelete';
        btnDelete.innerHTML = `
            <hr id="close-3">
            <hr id="close-4">
        `;

        btnDelete.addEventListener('click', function() {
            borrarRegistro(index);
        });

        dataContainer.appendChild(nameUser);
        dataContainer.appendChild(lastNameUser);
        dataContainer.appendChild(correoUser);
        dataContainer.appendChild(btnDelete);
    });
}

function borrarRegistro(index){
    registros.splice(index, 1);
    mostrarRegistro();
}