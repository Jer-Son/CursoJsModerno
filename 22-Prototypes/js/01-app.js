const cliente = { 
    nombre:"jerson",
    saldo:300

}

console.log(cliente);


function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo=saldo;

}

const jerson = new Cliente('jerson',300);
console.log(jerson);