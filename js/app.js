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
            <div class="card">
                <h3>${contacto.nombre} ${contacto.apellido}</h3>
                <p><strong>📞 Teléfono:</strong> ${contacto.telefono}</p>
            </div>`;
        });
    } catch (error) {
        console.error(error);
        listaContactos.innerHTML = "Error cargando los contactos.";
    }
}