import {Cliente} from './cliente.js';

export class Empresa extends Cliente {
    constructor(nombre, ahorro,categoria) {
        super(nombre, ahorro);
        this.categoria = categoria;
    }
    mostrarInformacion() {
        return `El Cliente ${ this.nombre } tiene un ahorro de ${ this.ahorro } y pertenece a la categoria ${ this.categoria }`;
    }
}