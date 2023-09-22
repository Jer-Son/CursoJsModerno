localStorage.removeItem('nombre');

//Actualizar
const mesesArray = JSON.parse(localStorage.getItem('meses'));
mesesArray.push('Nuevo Mes');
console.log(mesesArray);
localStorage.setItem('meses',JSON.stringify(mesesArray));


localStorage.clear();