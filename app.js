// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres =[];

function agregarAmigo(){

    const introducirNombre = document.getElementById("amigo").value;
    console.log(introducirNombre);

    if (introducirNombre == ("")){
        const alerta = document.getElementById("alerta");
        const alert = document.getElementById("amigo").value;
        alerta.innerHTML = "Por favor, introduce un nombre válido";
        console.log(alerta);
        limpiarSorteo();
        limpiarSorteado();
        return introducirNombre;
        
    }

    else if (nombres.includes(introducirNombre)){

        const repeticion = document.getElementById("repeticion");
        const alert = document.getElementById("amigo").value;
        repeticion.innerHTML = "Este nombre ya forma parte de la lista";
        console.log(repeticion);
        

        limpiarCaja();
        mostrarLista();
        return introducirNombre;
    }
    else {

        nombres.push(introducirNombre);
        console.log(nombres);
        limpiarCaja();
        limpiarAlerta();
        limpiarSorteo();
        limpiarSorteado();
        limpiarRepeticion();

        const lista = document.getElementById("listaAmigos");
        const li = document.createElement("li");
        li.textContent = introducirNombre;
        lista.appendChild(li);
        mostrarLista();
        actualizarLista();
    }
}

function sortearAmigo(){
 
    if (nombres.length == 0){
        limpiarAlerta();
        sinNombre();
        return;
    }
    else{
        const amigoAleatorio = (Math.floor(Math.random()*nombres.length));
        amigoSecreto = nombres[amigoAleatorio];

        resultado.innerHTML = (`El amigo secreto es: ${amigoSecreto}`);
        textoAleatorio();
        limpiarAlerta();
        limpiarRepeticion();
        console.log(amigoSecreto);
    }
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    nombres.forEach((nombre, index) => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = nombre;

        const img = document.createElement("img");
        img.src = "/assets/delete.png"; 
        img.alt = "Eliminar";
        img.style.width = "20px";
        img.style.cursor = "pointer";
        img.style.margin = "5px";
        img.style.alignContent = "center";
        img.onclick = () => eliminarNombre(index);

        li.appendChild(span);
        li.appendChild(img);
        lista.appendChild(li);
    });
}

function eliminarNombre(index) {
    nombres.splice(index, 1); 
    actualizarLista(); 
}




function eliminarAmigo (){
    nombres.pop(introducirNombre);
    console.log(introducirNombre);
}
function limpiarCaja() {
    valorCaja = document.querySelector("#amigo").value = '';
}


function limpiarAlerta(){
    const alerta = document.getElementById("alerta");
    const alert = document.getElementById("amigo").value;
    alerta.innerHTML = "";
}

function limpiarRepeticion () {
    const repeticion = document.getElementById("repeticion");
    // const alert = document.getElementById("amigo").value;
    repeticion.innerHTML = "";
}

function limpiarSorteo(){
    const alertaSecreto = document.getElementById("alertaAmigo")
    const alert = document.getElementById("amigo").value;
    alertaSecreto.innerHTML = ""
}

function limpiarSorteado(){
    const sorteado = document.getElementById("resultado");
    sorteado.innerHTML= "";
}

function textoAleatorio(){

    texto = document.getElementById('listaAmigos');
    texto.style.display='none';
    limpiarAlerta();
    
}

function mostrarLista(){
    
    if (nombres.length == 0){
        sinNombre();
        limpiarAlerta();
    }
    else {

    listado = document.getElementById('listaAmigos');
    listado.style.display='flex';
    limpiarSorteado();
    limpiarAlerta();
    console.log(nombres);
    }
}

function sinNombre(){
    const alerta = document.getElementById("alertaAmigo");
        const alertaSecreto = document.getElementById("amigo").value;
        alerta.innerHTML = "No hay amigos en la lista";
        return;
}
function reiniciar() {
    nombres = [];

    document.getElementById("listaAmigos").innerHTML = "";
    limpiarAlerta();
    limpiarSorteado();
    limpiarSorteo();

    console.log("Lista vaciada:", nombres);
}
