//variables
const misTweets = document.querySelector('#lista-tweets');
const formulario = document.querySelector('#formulario');
let tweets = [];

//eventos
eventListeners();
function eventListeners(){
    //cuando usuario agregar tweet
formulario.addEventListener('submit',agregarTweet);
    //cuando documento este listo
document.addEventListener('DOMContentLoaded',()=>{
    tweets = JSON.parse(localStorage.getItem('tweets')) || [];
    crearHTML();
});
}



//funciones

function agregarTweet(e){
e.preventDefault();
//textarea
const tweet = document.querySelector('#tweet').value;

//validacion
if(tweet ===''){
    mostrarError('Un mensaje no puede ir vacio');
    return; //evita que se ejecute mas lineas de codigo
}

const tweetObj={
    id:Date.now(),
    tweet
}
//añadir al arreglo de tweets
tweets=[...tweets,tweetObj];
//una vez agregado agregarlo al html
crearHTML();
//reiniciar form
formulario.reset();
}

function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //INSERTAR CONTENIDO 
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    setTimeout(()=>{
        mensajeError.remove();
    }, 3000);

}

function crearHTML(){
    limpiarHTML();
    if(tweets.length>0){
        tweets.forEach(tweet =>{
            //agregar btn eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText= 'X';
            //añadir funcion eliminar
            btnEliminar.onclick=()=>{
                borrarTweet(tweet.id);
            }

            //crear html
            const li = document.createElement('li');

            //añadir al texto
            li.innerText= tweet.tweet;
            //asignar eliminar
            li.appendChild(btnEliminar);

            //insertar HTML
            misTweets.appendChild(li);
        })
    }
    sincronizarStorage();
}

//agregar tweets a local storage
function sincronizarStorage(){
    localStorage.setItem('tweets',JSON.stringify(tweets));
}
//elimina tweet
function borrarTweet(id){
    tweets = tweets.filter(tweet => tweet.id != id);
    crearHTML();
}

function limpiarHTML(){
    while(misTweets.firstChild){
        misTweets.removeChild(misTweets.firstChild);
    }
}