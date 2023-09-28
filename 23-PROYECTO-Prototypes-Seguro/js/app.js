//constructores
function Seguro(marca,year,tipo){
    this.marca=marca;
    this.tipo=tipo;
    this.year=year;
}
//Realiza cotizacion con los datos
Seguro.prototype.cotizarSeguro = function(){
    /**
     * 1=Americano 1.15
     * 2=Asiatico  1.05
     * 3=Europeo 1.35
     */
    let cantidad;
    const base = 2000;
    switch(this.marca){
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
        default:
            break;
    }

    //Leer año
    const diferencia = new Date().getFullYear()- this.year;
    //Cada año que la diferencia es mayo el costo se reduce un 3%
    cantidad -= ((diferencia * 3)*cantidad)/100;
    /**
     * Si el seguro es basico se multiplica por 30%
     * si el seguro es completo se multiplica por 50%
     * 
     */
    if(this.tipo ==='basico'){
        cantidad == 1.30;
    }else{
        cantidad ==1.50;
    }
    return cantidad;
}

function UI(){

}
//llena las opciones de los años
UI.prototype.llenarOpciones=()=>{
    const max=new Date().getFullYear();
    const min = max-20;

    const selectYear = document.querySelector('#year');
    for(let i= max; i>min;i--){
        let option = document.createElement('option');
        option.value=i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}
//mostrar alertas
UI.prototype.mostrarMensaje=(mensaje,tipo)=>{
const div= document.createElement('div');
if(tipo === 'error'){
    div.classList.add('error')
}else{
    div.classList.add('correcto');
}
div.classList.add('mensaje','mt-10');
div.textContent=mensaje;
//insertar html
const formulario = document.querySelector('#cotizar-seguro');
formulario.insertBefore(div,document.querySelector('#resultado'));
setTimeout(()=>{
    div.remove();
    
},3000);
}
UI.prototype.mostrarResultado = (seguro,total)=>{

    const {marca, year, tipo} = seguro;
    let textoMarca;
    switch(marca){

        case'1':
        textoMarca = 'Americano';
            break;
        case'2':
        textoMarca = 'Asiatico';
            break;
        case'3':
        textoMarca = 'Europeo';
            break;
        default:
            break;
    }
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class="header">Tu resumen</p>
        <p class="font-bold">Marca: <span class="font-normal"> ${textoMarca}</span></p>
        <p class="font-bold">Año: <span class="font-normal"> ${year}</span></p>
        <p class="font-bold">Tipo: <span class="font-normal capitalize"> ${tipo}</span></p>
        <p class="font-bold">Total: $<span class="font-normal"> ${total}</span></p>
    `;

    const resultado = document.querySelector('#resultado');
    

    //mostrar spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(()=>{
        spinner.style.display='none';//se borra el spinner pero se muestra el resultado
        resultado.appendChild(div);
    },3000);
}
//instanciar UI
const ui= new UI();

document.addEventListener('DOMContentLoaded',()=>{
ui.llenarOpciones();
})


eventListeners();
function eventListeners(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit',cotizarSeguro);
}

function cotizarSeguro(e){
    e.preventDefault();

    //leer marca seleccionada

    const marca = document.querySelector('#marca').value;
    //año seleccionado
    const year = document.querySelector('#year').value;
    //tipo cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    if(marca === ''|| year===''||tipo===''){
        ui.mostrarMensaje('Todos los campos son obligatorios','error')
        return;
    }
    ui.mostrarMensaje('Cotizando','correcto');
    //ocultar cotizaciones previas
    const resultados  = document.querySelector('#resultado div');
    if(resultados != null){
        resultados.remove();
    }
    //instanciar seguro
    const seguro = new Seguro(marca,year,tipo);
    const total = seguro.cotizarSeguro();
    //utilizar el prototype que va a cotizar
    ui.mostrarResultado(seguro,total);
}