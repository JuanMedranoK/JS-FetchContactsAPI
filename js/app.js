const boton = document.getElementById("btnCargar");
const listaContactos = document.getElementById("resultado");

boton.addEventListener("click", cargarContactos);

async function cargarContactos() {
    try {
        const response = await fetch('https://raydelto.org/agenda.php');
        const data = await response.json();

        listaContactos.innerHTML = "";
        data.forEach(function(contacto) {
            listaContactos.innerHTML += `
       ${contacto.nombre} ${contacto.apellido} - ${contacto.telefono}<br>`;
        });
    } catch (error) {
        console.error(error);
        listaContactos.innerHTML = "Error cargando los contactos.";
    }
}