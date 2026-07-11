const boton = document.getElementById("btnCargar");
const listaContactos = document.getElementById("resultado");

boton.addEventListener("click", cargarContactos);

function cargarContactos() {

    fetch('https://raydelto.org/agenda.php')
        .then(function(response){
            return response.json();
        })
        .then(function(response){
            console.log(response);
        });
        
}