//iteradores

function crearIterador(carrito){
    let i= 0;
    return{
        siguiente: () => {
            const fin=(i>=carrito.length);
             const valor= !fin? carrito[i++]:undefined;
             return {valor,fin};

        }
    }
}

const carrito = ['producto1', 'producto2', 'producto3'];

const iterador = crearIterador(carrito);
console.log(iterador.siguiente());
console.log(iterador.siguiente());
console.log(iterador.siguiente());
console.log(iterador.siguiente());