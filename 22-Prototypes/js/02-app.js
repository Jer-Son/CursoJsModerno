function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo=saldo;

}

const jerson = new Cliente('jerson',300);


function formatearCliente(cliente) { 
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de: ${saldo}`;
}
function formatearEmpresa(Empresa) { 
    const {nombre, saldo,categoria} = Empresa;
    return `El cliente ${nombre} tiene un saldo de: ${saldo} y pertenece a la categoria: ${categoria}`;
}


console.log(formatearCliente(jerson));

function Empresa(nombre, saldo,categoria){
    this.nombre = nombre;
    this.saldo=saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Codigo con jerson',400,'Cursos en linea');
console.log(formatearEmpresa(CCJ));