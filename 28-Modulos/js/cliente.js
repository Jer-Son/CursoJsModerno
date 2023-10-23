/*(function() {
    console.log('Desde un IIFE');
    window.nombreCliente = 'Fernando';
})();*/

export const nombreCliente = 'Fernando';

export const ahorro = 1000;


export function mostrarInformacion(nombreCliente, ahorro) {
    return `El cliente ${ nombreCliente } tiene un ahorro de ${ ahorro }`;	
}

export function tieneAhorro(ahorro) {
    if(ahorro > 0) {
        console.log('El cliente tiene un ahorro');
    }else {
        console.log('El cliente no tiene un ahorro');
    }
}

export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `El Cliente ${ this.nombre } tiene un ahorro de ${ this.ahorro }`;
    }
}
//un export default por archivo no necesita nombre por que siempre utiliza alias la clase que lo importe
export default function () {
    console.log('Desde una nueva funcion');
}