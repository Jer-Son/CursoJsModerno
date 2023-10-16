//iteradores 

const ciudades = ['Bogota', 'Medellin', 'Barranquilla'];
const ordenes = new Set(['orden 1', 'orden 2', 'orden 3']);
const datos = new Map();

datos.set('nombres', 'Juan');
datos.set('apellidos', 'Perez');


//DEFAULT
for(ciudad of ciudades) {
    console.log(ciudad);
}
for(orden of ordenes) {
    console.log(orden);
}
for(let dato of datos) {
    console.log(dato);
}
//entries Iterator

/*for (let entry of datos.entries()) {
    console.log(entry);
}
for(let entry of ordenes.entries()) {
    console.log(entry);
}
*/


//values Iterator

/*for (let entry of ciudades.values()) {
    console.log(entry);
}
for (let entry of datos.values()) {
    console.log(entry);
}
for (let entry of ordenes.values()) {
    console.log(entry);
}*/


//Keys Iterator

for (let entry of datos.keys()) {
    console.log(entry);
}
for (let entry of ciudades.keys()) {
    console.log(entry);
}
for (let entry of ordenes.keys()) {
    console.log(entry);
}