const nombre = localStorage.getItem('nombre');
console.log(nombre);

const productoJson = localStorage.getItem('producto');
console.log(JSON.parse(productoJson));

const mesesJson = localStorage.getItem('meses');
console.log(JSON.parse(mesesJson));