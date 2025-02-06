// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres =[];

function agregarAmigo(){
const introducirNombre = document.getElementById("amigo").value;
console.log(introducirNombre);
  
    if (introducirNombre == ("")){
        alert('Por favor, introduzca un nombre válido');
        //return;
    }

    if (nombres.includes(introducirNombre)){
        alert('Este nombre ya forma parte de la lista');
        // let titulo = document.querySelector('h3');
        // titulo.innerHTML = 'Este nombre ya forma parte de la lista';
        limpiarCaja();
        //mostrarLista();
        return introducirNombre;
    }
    else {

        nombres.push(introducirNombre);
        console.log(nombres);
        limpiarCaja();
           
        const lista = document.getElementById("listaAmigos");
        const li = document.createElement("li");
        li.textContent = introducirNombre;
        lista.appendChild(li);
        //mensajeAdvertencia();
        return introducirNombre;
    }
}

function limpiarCaja(){
    valorCaja = document.querySelector("#amigo").value = '';
}

function mensajeAdvertencia(){
    advertencia = document.getElementById('alerta');
    advertencia.style.display='none';
}

function sortearAmigo(){
 
    if (nombres.length == 0){
        alert('No hay nombres en la lista');
        return;
    }
    else{
        const amigoAleatorio = (Math.floor(Math.random()*nombres.length));
        amigoSecreto = nombres[amigoAleatorio];

        resultado.innerHTML = (`El amigo secreto es: ${amigoSecreto}`);
        textoAleatorio();
        console.log(amigoSecreto);
    }
}

function textoAleatorio(){

    texto = document.getElementById('listaAmigos');
    texto.style.display='none';
}

function mostrarLista(){
    listado = document.getElementById('listaAmigos');
    listado.style.display='nombres';
}