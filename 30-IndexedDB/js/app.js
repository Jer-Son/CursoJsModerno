
let DB;
document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 5000);
})

function crmDB() {
    //crear base de datos version 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    //si hay un error
    crmDB.onerror = function () {
        console.log('hubo un error al crear la Base de datos');
    }
    //si se creo bien
    crmDB.onsuccess = function () {
        console.log('Base de datos creada con exito');
        DB = crmDB.result;
    }

    //configuracion de la base de datos
    crmDB.onupgradeneeded = function (e) {
        const db = e.target.result;
        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

        objectStore.createIndex('nombre', 'nombre', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
        objectStore.createIndex('telefono', 'telefono', { unique: false });
        console.log('Base de datos configurada');
    }
}
function crearCliente() {
    let transaction = DB.transaction(['crm'], 'readwrite');
    transaction.oncomplete = function () {
        console.log('transaccion completada');
    }
    transaction.onerror = function () {
        console.log('hubo un error en la transaccion');
    }
    const objectStore = transaction.objectStore('crm');
    const cliente = {
        telefono: '123456',
        nombre: 'Juan',
        email: 'XUeQv@example.com',
    }

    const request = objectStore.add(cliente);
    request.onsuccess = function () {
        console.log('Cliente guardado');
    }
    request.onerror = function () {
        console.log('hubo un error al guardar el cliente');
    }
}