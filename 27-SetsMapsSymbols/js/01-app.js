const carrito  = new Set();
carrito.add('Monitor 20 Pulgadas');
carrito.add('Monitor 24 Pulgadas');
//duplicados no se agregan al set
//carrito.add('Monitor 24 Pulgadas');
//carrito.size
console.log(carrito.has('Monitor 21 Pulgadas'));
console.log(carrito.delete('Monitor 24 Pulgadas'));
console.log(carrito);
//carrito.clear();
carrito.forEach((item,index,pertenece) =>{

    console.log(`${index}: ${item}`);
    console.log(pertenece);
} );


//eliminar duplicados de array
const numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];
const noDuplicados = [...new Set(numeros)];
console.log(noDuplicados);
