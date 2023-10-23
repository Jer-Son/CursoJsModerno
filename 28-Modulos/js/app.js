import alias,{ nombreCliente as nombre, ahorro, mostrarInformacion, tieneAhorro, Cliente } from './cliente.js';

//importar empresa
import { Empresa } from './empresa.js';

console.log( nombre );
console.log( ahorro);
console.log( mostrarInformacion(nombre, ahorro) );
tieneAhorro(ahorro);

const cliente = new Cliente(nombre, ahorro);
console.log(cliente.mostrarInformacion());



const empresa = new Empresa('Google', 1000, 'Informatica');
console.log(empresa.mostrarInformacion());

alias();