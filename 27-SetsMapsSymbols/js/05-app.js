//symbols
const sym1 = Symbol('1');
const sym2 = Symbol('1');

if (sym1 === sym2) {
    console.log('Son iguales');
} else {
    console.log('Son diferentes');
}


const nombre = Symbol();
const apellido = Symbol();

const persona = {}
//agregar nombre y apellido como llaves
persona[nombre] = 'Juan';
persona[apellido] = 'Perez';
persona.saldo = 100;
persona.tipo = 'premium';


console.log(persona);
//console.log(persona.nombre);
console.log(persona[nombre]);

//las propiedades del symbol no son iterables

for(let prop in persona){
    console.log(prop);
}

//definir descripcion del symbolo
const nombreCliente = Symbol('nombre del cliente');
const cliente = {}

cliente[nombreCliente] = 'Juan';
console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);