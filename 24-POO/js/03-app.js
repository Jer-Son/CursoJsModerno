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


//Herencia 
class Empresa extends Cliente{
    constructor(nombre,saldo,telefono,categoria){
        super(nombre,saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }
    static bienvenida(){
        return `Bienvenido al cajero de empresas`
    }

}
const jerson = new Cliente('jerson',300);
const empresa = new Empresa('Codigo con jerson', 400,300223223,'cat1');
console.log(empresa);
console.log(empresa.mostrarInformacion());
console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());