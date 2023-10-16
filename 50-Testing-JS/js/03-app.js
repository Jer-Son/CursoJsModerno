// probar 2 valores

function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
async function sumaAsync(a, b) {
    return Promise.resolve(sumar(a + b));
}

let resultado = sumar(20, 30);
let esperado = 51;
if (resultado === esperado) {
    console.log("Paso test");
}else{
    console.log(`Error ${resultado} != ${esperado}`);
}
resultado = restar(20, 10);
esperado = 10;
expected(esperado).toBe(resultado);
expected(esperado).toEqual(resultado);

test('Prueba suma 10 + 20 resulta 30', async () => {
    const result = await sumaAsync(10, 20);
    const esperado = 30;
    expected(esperado).toBe(result);
});
async function test (mensaje,callback){
    try{
        await callback();
        console.log(`Paso Test: ${mensaje}`);
    }catch(error){
        console.log('error:');
        console.log(error);
    }
}
function expected(esperado){
    return{
        toBe(resultado){
            if(resultado === esperado){
                console.log("Paso test");
            }else{
                console.log(`Error ${resultado} != ${esperado}`);
            }
        },
        toEqual(resultado){
            if(resultado === esperado){
                console.log("Paso test");
            }else{
                console.log(`Error ${resultado} != ${esperado}`);
            }
        }
    }
}