//generadores

function* crearGenerador(){
    yield 1;
    yield 'jerson';
    yield 3+3;
    yield true;
}


const iterador = crearGenerador();
console.log(iterador);
console.log(iterador.next().value);
console.log(iterador.next().done);
console.log(iterador.next().value);
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador);

// generador para carrito de compras
function * crearCarrito(carrito){
   for (let i = 0; i < carrito.length; i++){
       yield carrito[i];
   } 
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];
const iteradorCarrito = crearCarrito(carrito);
console.log(iteradorCarrito.next());
console.log(iteradorCarrito.next());
console.log(iteradorCarrito.next());
console.log(iteradorCarrito.next());