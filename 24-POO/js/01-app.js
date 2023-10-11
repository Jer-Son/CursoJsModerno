//clas declaration
class Cliente {

        constructor(nombre, saldo){
            this.nombre = nombre;
            this.saldo =saldo;
        }
        mostrarInformacion(){
            return `Cliente : ${this.nombre}, tu saldo es de: ${this.saldo}`;
        }
        static bienvenida(){
            return `Bienvenido al cajero`
        }
}

const jerson = new Cliente('jerson',300);
console.log(Cliente.bienvenida());
console.log(jerson.mostrarInformacion());


//clas expression
const Cliente2 =  class{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo =saldo;
    }
    mostrarInformacion(){
        return `Cliente : ${this.nombre}, tu saldo es de: ${this.saldo}`;
    }
}

const jerson2 = new Cliente2('jerson',300);
console.log(jerson2.mostrarInformacion());