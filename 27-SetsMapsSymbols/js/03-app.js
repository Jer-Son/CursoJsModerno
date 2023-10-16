const cliente = new Map();
cliente.set('nombre', 'Jerson');
cliente.set('saldo', 100);
cliente.set('tipo', 'premium');
cliente.set('true',true);
console.log(cliente);

console.log(cliente.size);
console.log(cliente.has('nombre'));
console.log(cliente.get('nombre'));
cliente.delete('true');
console.log(cliente);
cliente.clear();
console.log(cliente);

const paciente = new Map([['nombre', 'Jerson'], ['saldo', 100], ['tipo', 'premium']]);
paciente.set('dr', 'Dr. Juan');
paciente.set('nombre', 'Jerson');
console.log(paciente);
paciente.forEach((value, key) => {
    console.log(`${key}: ${value}`);
})