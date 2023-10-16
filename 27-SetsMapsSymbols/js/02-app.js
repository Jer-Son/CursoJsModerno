//WeakSet
const weakset = new WeakSet();

const cliente = {
    nombre: 'Juan',
    saldo: 100
}
const nombre = 'Juan';
weakset.add(cliente); 
//weakset.add(nombre); este no acepta solo acepta objetos
console.log(weakset);
console.log(weakset.has(cliente));
//console.log(weakset.size); no sirve en este y no es iterable

//weakset.delete(cliente);
console.log(weakset);