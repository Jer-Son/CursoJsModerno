
//agregar datos al local storage
localStorage.setItem('nombre','jerson');
//sessionStorage.setItem('nombre', 'jerson');
//solo strings

const producto = { 
    nombre:"Monitor 24 pulgadas",
    precio: 300
}

const productoString = JSON.stringify(producto);
localStorage.setItem('producto',productoString);

const meses =['Enero','Febrero','Marzo'];
localStorage.setItem('meses',JSON.stringify(meses));