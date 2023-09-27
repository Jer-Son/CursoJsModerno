function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo=saldo;

}
Cliente.prototype.tipoCliente = function (){
    let tipo;
    if(this.saldo > 10000){
        tipo = 'Gold'
    }else if ( this.saldo>5000){
        tipo = 'Platinum'
    }else{
        tipo ='Normal'
    }
    return tipo;
}
Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, TipoCliente: ${this.tipoCliente()}`
}
Cliente.prototype.retiraSaldo = function(retira)
{
    this.saldo -= retira;
}

function Persona(nombre,saldo,telefono){
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;


const martin = new Persona('Martin',4000,43322111);

console.log(martin);
console.log(martin.nombreClienteSaldo());

Persona.prototype.mostrarTelefono= function(){

    return `El telefono de esta persona es ${this.telefono}`
}

console.log(martin.mostrarTelefono());
