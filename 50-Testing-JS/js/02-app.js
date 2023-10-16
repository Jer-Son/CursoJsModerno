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