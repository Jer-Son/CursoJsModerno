// probar 2 valores

function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}

let resultado = sumar(20, 30);
let esperado = 51;
if (resultado === esperado) {
    console.log("Paso test");
}else{
    console.log(`Error ${resultado} != ${esperado}`);
}
