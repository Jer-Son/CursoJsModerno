//variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul')



//Eventos

eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener('submit', agregarGasto);
}

//Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }
    calcularRestante(){
        const gastado = this.gastos.reduce((total,gasto)=> total + gasto.cantidad,0);
        this.restante = this.presupuesto - gastado;
        
    }
    eliminarGasto(id){
        this.gastos  = this.gastos.filter(gasto  => gasto.id !== id );
        this.calcularRestante();
    }
}

class UI {


    insertarPresupuesto(cantidad) {
        const { presupuesto, restante } = cantidad;
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo) {
        //crear div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        //mensaje error
        divMensaje.textContent = mensaje;

        //insertar html
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        //quitar hmtl 3 segundos despues
        setTimeout(() => {
            divMensaje.remove();
        }, 3000)
    }

    agregarGastoLista(gastos) {
        this.limpiarHtml();

        //iterar sobre gastos
        gastos.forEach(gasto => {

            
            const { cantidad, nombre, id } = gasto;

            //crear un LI
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            //nuevoGasto.setAttribute('data-id',id);
            nuevoGasto.dataset.id = id;
            //agregar el html del gasto
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill">$ ${cantidad}</span>`;

            //boton para borrar el gasto

            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.textContent = 'Borrar X'
            btnBorrar.onclick= () =>{
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnBorrar);

            //agregar lista

            gastoListado.appendChild(nuevoGasto);
        })
    }

    limpiarHtml() {
        while (gastoListado.firstChild) {
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }
    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestoObj){
        const {presupuesto,restante} = presupuestoObj;
        const restanteDiv = document.querySelector('.restante');
        //comprobar 25 %
        if((presupuesto / 4) > restante){
            restanteDiv.classList.remove('alert-success','alert-danger');
            restanteDiv.classList.add('alert-danger');
        }else if((presupuesto/2)> restante){
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        }else  {
            restanteDiv.classList.remove('alert-danger','alert-warning');
            restanteDiv.classList.add('alert-success');
        }

        //si el total es menor que 0
        if(restante<= 0){
            ui.imprimirAlerta('El presupuesto se agoto','error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }
}


const ui = new UI();
let presupuesto;


//Funciones


function preguntarPresupuesto() {
    const preguntartoUsuario = prompt('¿Cual es tu presupuesto:?');

    if (preguntartoUsuario === '' || preguntartoUsuario === 'null' || isNaN(preguntartoUsuario) || preguntartoUsuario <= 0) {
        preguntarPresupuesto();
        //window.location.reload();
    }
    //PRESUPUESTO VALUDO
    presupuesto = new Presupuesto(preguntartoUsuario);
    ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e) {
    e.preventDefault();

    //leer los inputs del form

    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);


    //validar
    if (nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    } else if (cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta('Cantidad invalida', 'error');
        return;
    }
    //generar un objeto con el gasto
    const gasto = { nombre, cantidad, id: Date.now() }
    //añade un nuevo gasto 
    presupuesto.nuevoGasto(gasto);
    ui.imprimirAlerta('Gasto agregado');
    //imprimir gastos
    const { gastos,restante } = presupuesto
    ui.agregarGastoLista(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);
    //reiniciar form
    formulario.reset();
}

function eliminarGasto(id){
    //elimina el gasto de la clase
    presupuesto.eliminarGasto(id);

    //elimina gastos del html
    const {gastos,restante} = presupuesto;
    ui.agregarGastoLista(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);
}