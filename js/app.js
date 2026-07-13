const boton = document.getElementById("btnCargar");
const botonBuscar = document.getElementById("btnBuscar");
const inputBuscar = document.getElementById("txtBuscar");
const listaContactos = document.getElementById("resultado");
let contactos = [];

boton.addEventListener("click", cargarContactos);
botonBuscar.addEventListener("click", buscarContactos);
inputBuscar.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        buscarContactos();
    }
});

async function cargarContactos() {
    try {
        const response = await fetch('https://raydelto.org/agenda.php');
        const data = await response.json();
        contactos = data;
        mostrarContactos(contactos);
    } catch (error) {
        console.error(error);
        listaContactos.innerHTML = "<p>Error cargando los contactos.</p>";
    }
}

function mostrarContactos(contactosAMostrar) {
    listaContactos.innerHTML = "";

    if (!contactosAMostrar || contactosAMostrar.length === 0) {
        listaContactos.innerHTML = "<p>No se encontraron contactos.</p>";
        return;
    }

    contactosAMostrar.forEach(function(contacto) {
        listaContactos.innerHTML += `
            <div class="card">
                <h3>${contacto.nombre} ${contacto.apellido}</h3>
                <p><strong>📞 Teléfono:</strong> ${contacto.telefono}</p>
            </div>`;
    });
}

function buscarContactos() {
    const texto = inputBuscar.value.trim().toLowerCase();

    if (!texto) {
        mostrarContactos(contactos);
        return;
    }

    const resultado = contactos.filter(function(contacto) {
        const nombreCompleto = `${contacto.nombre} ${contacto.apellido}`.toLowerCase();
        return nombreCompleto.includes(texto) || contacto.telefono.includes(texto);
    });

    mostrarContactos(resultado);
}