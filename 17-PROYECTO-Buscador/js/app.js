//VARIABLES
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear();
const min = max-10;

// Generar un objeto con la busqueda
const datosBusqueda ={
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

//EVENTOS
document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos(autos); //muestra los autos al cargar

    //llenar select de años
    llenarSelect();

} );

marca.addEventListener('change',e => {
    datosBusqueda.marca = e.target.value;
    filtrarAutos();
})
year.addEventListener('change',e => {
    datosBusqueda.year = e.target.value;
    filtrarAutos();
})
minimo.addEventListener('change',e => {
    datosBusqueda.minimo = e.target.value;
    filtrarAutos();
})
maximo.addEventListener('change',e => {
    datosBusqueda.maximo = e.target.value;
    filtrarAutos();
})
puertas.addEventListener('change',e => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAutos();
})
transmision.addEventListener('change',e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAutos();
})
color.addEventListener('change',e => {
    datosBusqueda.color = e.target.value;
    filtrarAutos();
})


function mostrarAutos(autos){
    limpiarHTML(); // elimina HTML previo
 autos.forEach (auto =>  {
    const {marca,modelo,year,puertas,transmision,precio,color} = auto
    const autoHtml = document.createElement('p');

    autoHtml.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}
    `;

    //INSERTAR HTML
    resultado.appendChild(autoHtml);
 })
}
function limpiarHTML(){
 while (resultado.firstChild){
    resultado.removeChild(resultado.firstChild);
 }
}
function llenarSelect(){
    for( i=max;i >=min;i--){
        const opcion = document.createElement('option');
        opcion.value= i;
        opcion.textContent=i;
        year.appendChild(opcion); //agregar option al select
    }
}

function filtrarAutos(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarYear)
    .filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision)
    .filter(filtrarColor);
    //console.log(resultado);
   
    if(resultado.length){
        mostrarAutos(resultado);
    }else{
        noResultado();
    }
}

function noResultado(){
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'no hay resultado';
    resultado.appendChild(noResultado);
}
function filtrarMarca(auto){
    const {marca} =datosBusqueda

    if(marca){
        return auto.marca === marca;
    }
    return auto;
}
function filtrarYear(auto){
    const {year} = datosBusqueda;

    if(year){
        return auto.year === parseInt(year);
    }
    return auto;
}
function filtrarMinimo(auto){
    const {minimo} = datosBusqueda;

    if(minimo){
        return auto.precio >= minimo;
    }
    return auto;
}
function filtrarMaximo(auto){
    const {maximo} = datosBusqueda;

    if(maximo){
        return auto.precio <= maximo;
    }
    return auto;
}
function filtrarPuertas(auto){
    const {puertas} = datosBusqueda;

    if(puertas){
        return auto.puertas === puertas;
    }
    return auto;
}
function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;

    if(transmision){
        return auto.transmision === transmision;
    }
    return auto;
}
function filtrarColor(auto){
    const {color} = datosBusqueda;

    if(color){
        return auto.color === color;
    }
    return auto;
}